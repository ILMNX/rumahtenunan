<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Dress Tenun',
                'slug' => 'dress-tenun',
                'description' => 'Beautiful hand-woven dresses from traditional Indonesian artisans',
                'image_url' => 'categories/dress-tenun.jpg',
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Tas Tenun',
                'slug' => 'tas-tenun',
                'description' => 'Traditional woven bags with modern functionality',
                'image_url' => 'categories/tas-tenun.jpg',
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Sepatu Tenun',
                'slug' => 'sepatu-tenun',
                'description' => 'Comfortable shoes featuring traditional weaving patterns',
                'image_url' => 'categories/sepatu-tenun.jpg',
                'is_active' => true,
                'sort_order' => 3,
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
