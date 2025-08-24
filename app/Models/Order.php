<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_number',
<<<<<<< HEAD
        'customer_id',
        'status',
        'subtotal',
        'shipping_cost',
        'total',
        'shipping_address',
        'payment_method',
        'payment_status',
        'notes',
        'tracking_number',
        'shipped_at',
        'delivered_at'
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'shipping_cost' => 'decimal:2',
        'total' => 'decimal:2',
        'shipping_address' => 'array',
        'shipped_at' => 'datetime',
        'delivered_at' => 'datetime'
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function orderItems(): HasMany
=======
        'user_id',
        'status',
        'total_amount',
        'tax_amount',
        'shipping_amount',
        'shipping_address',
        'billing_address',
        'payment_method',
        'payment_status',
        'shipped_at',
        'delivered_at',
        'notes',
    ];

    protected $casts = [
        'total_amount' => 'decimal:2',
        'tax_amount' => 'decimal:2',
        'shipping_amount' => 'decimal:2',
        'shipping_address' => 'array',
        'billing_address' => 'array',
        'shipped_at' => 'datetime',
        'delivered_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
>>>>>>> temp-branch
    {
        return $this->hasMany(OrderItem::class);
    }

    public function scopeByStatus($query, $status)
    {
        return $query->where('status', $status);
    }

<<<<<<< HEAD
    public function scopePaid($query)
    {
        return $query->where('payment_status', 'paid');
=======
    public function scopeByPaymentStatus($query, $paymentStatus)
    {
        return $query->where('payment_status', $paymentStatus);
    }

    public function getFormattedTotalAttribute(): string
    {
        return 'Rp ' . number_format($this->total_amount, 0, ',', '.');
    }

    public function generateOrderNumber(): string
    {
        return 'RT-' . date('Ymd') . '-' . str_pad($this->id, 6, '0', STR_PAD_LEFT);
>>>>>>> temp-branch
    }
}
