<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $cartItems = Cart::with('product')
            ->where(function($query) use ($request) {
                if (auth('customer')->check()) {
                    $query->where('customer_id', auth('customer')->id());
                } else {
                    $query->where('session_id', session()->getId());
                }
            })
            ->get();

        $total = $cartItems->sum(fn($item) => $item->quantity * $item->product->price);

        return Inertia::render('Cart/Index', [
            'cartItems' => $cartItems,
            'total' => $total
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $product = Product::findOrFail($validated['product_id']);

        if ($product->stock < $validated['quantity']) {
            return back()->withErrors(['quantity' => 'Insufficient stock']);
        }

        $cartData = [
            'product_id' => $validated['product_id'],
            'quantity' => $validated['quantity']
        ];

        if (auth('customer')->check()) {
            $cartData['customer_id'] = auth('customer')->id();
            $cartData['session_id'] = session()->getId();
        } else {
            $cartData['session_id'] = session()->getId();
        }

        Cart::updateOrCreate(
            ['session_id' => session()->getId(), 'product_id' => $validated['product_id']],
            $cartData
        );

        return redirect()->back()->with('success', 'Product added to cart');
    }

    public function update(Request $request, Cart $cart)
    {
        $validated = $request->validate([
            'quantity' => 'required|integer|min:1'
        ]);

        if ($cart->product->stock < $validated['quantity']) {
            return back()->withErrors(['quantity' => 'Insufficient stock']);
        }

        $cart->update($validated);

        return redirect()->back()->with('success', 'Cart updated');
    }

    public function destroy(Cart $cart)
    {
        $cart->delete();
        return redirect()->back()->with('success', 'Item removed from cart');
    }
}
