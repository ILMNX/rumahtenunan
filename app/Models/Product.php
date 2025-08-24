<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
<<<<<<< HEAD
use Illuminate\Database\Eloquent\Relations\HasMany;
=======
>>>>>>> temp-branch

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
<<<<<<< HEAD
        'name',
        'slug',
        'description',
        'story',
        'price',
        'compare_price',
        'stock',
        'sku',
        'images',
        'material',
        'dimensions',
        'origin_region',
        'is_featured',
        'is_active',
        'category_id',
        'artisan_id'
=======
        'category_id',
        'name',
        'slug',
        'description',
        'short_description',
        'price',
        'compare_price',
        'stock_quantity',
        'images',
        'artisan_info',
        'weaving_details',
        'size',
        'color',
        'material',
        'origin_region',
        'is_featured',
        'is_active',
        'sort_order',
>>>>>>> temp-branch
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'compare_price' => 'decimal:2',
        'images' => 'array',
<<<<<<< HEAD
        'is_featured' => 'boolean',
        'is_active' => 'boolean'
=======
        'artisan_info' => 'array',
        'weaving_details' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
>>>>>>> temp-branch
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

<<<<<<< HEAD
    public function artisan(): BelongsTo
    {
        return $this->belongsTo(Artisan::class);
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function cartItems(): HasMany
    {
        return $this->hasMany(Cart::class);
    }

    public function testimonials(): HasMany
    {
        return $this->hasMany(Testimonial::class);
    }

=======
>>>>>>> temp-branch
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

<<<<<<< HEAD
    public function scopeInStock($query)
    {
        return $query->where('stock', '>', 0);
=======
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function scopeInStock($query)
    {
        return $query->where('stock_quantity', '>', 0);
>>>>>>> temp-branch
    }
}
