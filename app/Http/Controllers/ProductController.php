<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Models\Product;
use App\Models\Category;
use App\Models\Artisan;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
=======
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
>>>>>>> temp-branch

class ProductController extends Controller
{
    public function index(Request $request)
    {
<<<<<<< HEAD
        $query = Product::with(['category', 'artisan'])
            ->where('is_active', true);

        if ($request->category) {
            $query->whereHas('category', fn($q) => $q->where('slug', $request->category));
        }

        if ($request->search) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        if ($request->min_price) {
            $query->where('price', '>=', $request->min_price);
        }

        if ($request->max_price) {
            $query->where('price', '<=', $request->max_price);
        }

        $products = $query->paginate(12);
        $categories = Category::where('is_active', true)->get();
=======
        $query = Product::with('category');

        // Search functionality
        if ($search = $request->input('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('short_description', 'like', "%{$search}%");
            });
        }

        // Category filter
        if ($category = $request->input('category')) {
            $query->whereHas('category', function ($q) use ($category) {
                $q->where('slug', $category);
            });
        }

        // Price range filter
        if ($minPrice = $request->input('min_price')) {
            $query->where('price', '>=', $minPrice);
        }
        if ($maxPrice = $request->input('max_price')) {
            $query->where('price', '<=', $maxPrice);
        }

        // Sorting
        $sort = $request->input('sort', 'default');
        switch ($sort) {
            case 'name':
                $query->orderBy('name', 'asc');
                break;
            case 'price_low':
                $query->orderBy('price', 'asc');
                break;
            case 'price_high':
                $query->orderBy('price', 'desc');
                break;
            case 'newest':
                $query->orderBy('created_at', 'desc');
                break;
            default:
                $query->orderBy('is_featured', 'desc')->orderBy('created_at', 'desc');
        }

        // Paginate results
        $products = $query->where('is_active', true)->paginate(12);

        // Get all categories for filter
        $categories = Category::where('is_active', true)->orderBy('name')->get();
>>>>>>> temp-branch

        return Inertia::render('Products/Index', [
            'products' => $products,
            'categories' => $categories,
<<<<<<< HEAD
            'filters' => $request->only(['category', 'search', 'min_price', 'max_price'])
=======
            'filters' => [
                'search' => $request->input('search'),
                'category' => $request->input('category'),
                'min_price' => $request->input('min_price'),
                'max_price' => $request->input('max_price'),
                'sort' => $request->input('sort'),
            ],
>>>>>>> temp-branch
        ]);
    }

    public function show(Product $product)
    {
<<<<<<< HEAD
        $product->load(['category', 'artisan', 'testimonials.customer']);
        
        $relatedProducts = Product::where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->where('is_active', true)
=======
        // Load product with relationships
        $product->load('category');

        // Get related products (same category, excluding current product)
        $relatedProducts = Product::with('category')
            ->where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->where('is_active', true)
            ->inRandomOrder()
>>>>>>> temp-branch
            ->limit(4)
            ->get();

        return Inertia::render('Products/Show', [
            'product' => $product,
<<<<<<< HEAD
            'relatedProducts' => $relatedProducts
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'story' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'compare_price' => 'nullable|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'sku' => 'nullable|string|unique:products',
            'images' => 'required|array',
            'material' => 'nullable|string',
            'dimensions' => 'nullable|string',
            'origin_region' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'artisan_id' => 'nullable|exists:artisans,id',
            'is_featured' => 'boolean',
            'is_active' => 'boolean'
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        Product::create($validated);

        return redirect()->back()->with('success', 'Product created successfully');
    }
=======
            'relatedProducts' => $relatedProducts,
        ]);
    }
>>>>>>> temp-branch
}
