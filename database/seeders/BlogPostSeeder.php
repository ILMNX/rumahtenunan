<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BlogPostSeeder extends Seeder {
    public function run() {
        DB::table('blog_posts')->insert([
            [
                'title' => 'Mengenal Tenun Ikat Sumba',
                'slug' => Str::slug('Mengenal Tenun Ikat Sumba'),
                'excerpt' => 'Sejarah dan keunikan tenun ikat dari Sumba, NTT.',
                'content' => 'Tenun ikat Sumba adalah salah satu warisan budaya Indonesia yang memiliki motif khas dan proses pembuatan yang unik...',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Kisah Pengrajin Tenun Lombok',
                'slug' => Str::slug('Kisah Pengrajin Tenun Lombok'),
                'excerpt' => 'Cerita inspiratif dari pengrajin tenun di Lombok, NTB.',
                'content' => 'Pengrajin tenun Lombok telah melestarikan tradisi turun-temurun dengan inovasi warna alami...',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
