<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class OrderController extends Controller
{
    use AuthorizesRequests;
    public function index()
    {
        $orders = Order::with('orderItems.product')
            ->where('customer_id', auth('customer')->id())
            ->latest()
            ->paginate(10);

        return Inertia::render('Orders/Index', [
            'orders' => $orders
        ]);
    }

    public function show(Order $order)
    {
        $this->authorize('view', $order);

        $order->load(['orderItems.product', 'customer']);

        return Inertia::render('Orders/Show', [
            'order' => $order
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'shipping_address' => 'required|array',
            'shipping_address.name' => 'required|string',
            'shipping_address.address' => 'required|string',
            'shipping_address.city' => 'required|string',
            'shipping_address.postal_code' => 'required|string',
            'shipping_address.phone' => 'required|string',
            'payment_method' => 'required|string',
            'notes' => 'nullable|string'
        ]);

        $cartItems = Cart::with('product')
            ->where('customer_id', auth('customer')->id())
            ->get();

        if ($cartItems->isEmpty()) {
            return back()->withErrors(['cart' => 'Cart is empty']);
        }

        $subtotal = $cartItems->sum(fn($item) => $item->quantity * $item->product->price);
        $shippingCost = 50000; // Fixed shipping cost
        $total = $subtotal + $shippingCost;

        $order = Order::create([
            'order_number' => 'RT-' . strtoupper(Str::random(8)),
            'customer_id' => auth('customer')->id(),
            'subtotal' => $subtotal,
            'shipping_cost' => $shippingCost,
            'total' => $total,
            'shipping_address' => $validated['shipping_address'],
            'payment_method' => $validated['payment_method'],
            'notes' => $validated['notes'] ?? null
        ]);

        foreach ($cartItems as $cartItem) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $cartItem->product_id,
                'quantity' => $cartItem->quantity,
                'price' => $cartItem->product->price
            ]);

            // Update stock
            $cartItem->product->decrement('stock', $cartItem->quantity);
        }

        // Clear cart
        Cart::where('customer_id', auth('customer')->id())->delete();

        return redirect()->route('orders.show', $order)->with('success', 'Order placed successfully');
    }
}
