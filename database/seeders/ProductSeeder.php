<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dressCategory = Category::where('slug', 'dress-tenun')->first();
        $bagCategory = Category::where('slug', 'tas-tenun')->first();
        $shoeCategory = Category::where('slug', 'sepatu-tenun')->first();

        $products = [
            // Dresses
            [
                'category_id' => $dressCategory->id,
                'name' => 'Dress Ikat Flores Premium',
                'slug' => 'dress-ikat-flores-premium',
                'description' => 'Elegant dress featuring traditional Flores ikat patterns, handwoven by skilled artisans from Nusa Tenggara Timur. Made with premium cotton threads and natural dyes.',
                'short_description' => 'Premium Flores ikat dress with traditional patterns',
                'price' => 750000,
                'compare_price' => 950000,
                'stock_quantity' => 12,
                'images' => [], // Empty array as placeholder
                'artisan_info' => [
                    'name' => 'Ibu Maria Nggapu',
                    'village' => 'Sikka, Flores',
                    'experience' => '25 years',
                    'specialty' => 'Ikat weaving'
                ],
                'weaving_details' => [
                    'technique' => 'Ikat tie-dye',
                    'threads' => 'Premium cotton',
                    'dyes' => 'Natural indigo and morinda',
                    'time_to_make' => '3-4 weeks'
                ],
                'size' => 'S,M,L,XL',
                'color' => 'Indigo Blue',
                'material' => '100% Cotton',
                'origin_region' => 'NTT - Flores',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'category_id' => $dressCategory->id,
                'name' => 'Dress Songket NTB Klasik',
                'slug' => 'dress-songket-ntb-klasik',
                'description' => 'Classic songket dress from Lombok artisans, featuring intricate gold thread patterns. Perfect for special occasions and cultural events.',
                'short_description' => 'Classic Lombok songket dress with gold patterns',
                'price' => 1200000,
                'compare_price' => null,
                'stock_quantity' => 8,
                'images' => [], // Empty array as placeholder
                'artisan_info' => [
                    'name' => 'Ibu Siti Aisyah',
                    'village' => 'Sukarare, Lombok',
                    'experience' => '30 years',
                    'specialty' => 'Songket weaving'
                ],
                'weaving_details' => [
                    'technique' => 'Songket supplementary weft',
                    'threads' => 'Silk and gold metallic',
                    'dyes' => 'Traditional plant dyes',
                    'time_to_make' => '6-8 weeks'
                ],
                'size' => 'S,M,L',
                'color' => 'Maroon Gold',
                'material' => '80% Silk, 20% Metallic Thread',
                'origin_region' => 'NTB - Lombok',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            // Bags
            [
                'category_id' => $bagCategory->id,
                'name' => 'Tas Tenun Sumba Motif Kuda',
                'slug' => 'tas-tenun-sumba-motif-kuda',
                'description' => 'Authentic Sumba woven bag featuring traditional horse motifs, symbolizing nobility and strength in Sumbanese culture.',
                'short_description' => 'Traditional Sumba bag with horse motifs',
                'price' => 350000,
                'compare_price' => 450000,
                'stock_quantity' => 15,
                'images' => [], // Empty array as placeholder
                'artisan_info' => [
                    'name' => 'Bapak Umbu Pati',
                    'village' => 'Prailiu, Sumba Timur',
                    'experience' => '20 years',
                    'specialty' => 'Traditional Sumba weaving'
                ],
                'weaving_details' => [
                    'technique' => 'Traditional backstrap loom',
                    'threads' => 'Cotton',
                    'dyes' => 'Natural indigo and turmeric',
                    'time_to_make' => '2 weeks'
                ],
                'size' => '30x25x10 cm',
                'color' => 'Navy Blue',
                'material' => '100% Cotton',
                'origin_region' => 'NTT - Sumba',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 3,
            ],
            // Shoes
            [
                'category_id' => $shoeCategory->id,
                'name' => 'Sepatu Tenun Rote Casual',
                'slug' => 'sepatu-tenun-rote-casual',
                'description' => 'Comfortable casual shoes incorporating traditional Rote weaving patterns, perfect for daily wear while celebrating Indonesian heritage.',
                'short_description' => 'Casual shoes with Rote traditional patterns',
                'price' => 480000,
                'compare_price' => null,
                'stock_quantity' => 20,
                'images' => [], // Empty array as placeholder
                'artisan_info' => [
                    'name' => 'Ibu Yustina Ndun',
                    'village' => 'Oesao, Rote Ndao',
                    'experience' => '15 years',
                    'specialty' => 'Rote traditional patterns'
                ],
                'weaving_details' => [
                    'technique' => 'Hand embroidery on leather',
                    'threads' => 'Cotton and silk',
                    'dyes' => 'Natural plant colors',
                    'time_to_make' => '1 week'
                ],
                'size' => '36,37,38,39,40,41,42',
                'color' => 'Brown Earth',
                'material' => 'Leather with Cotton Weaving',
                'origin_region' => 'NTT - Rote Ndao',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 4,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
