<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'product_id',
<<<<<<< HEAD
        'quantity',
        'price'
    ];

    protected $casts = [
        'price' => 'decimal:2'
=======
        'product_name',
        'product_price',
        'quantity',
        'total_price',
    ];

    protected $casts = [
        'product_price' => 'decimal:2',
        'total_price' => 'decimal:2',
>>>>>>> temp-branch
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
<<<<<<< HEAD

    public function getTotalAttribute()
    {
        return $this->quantity * $this->price;
    }
=======
>>>>>>> temp-branch
}
