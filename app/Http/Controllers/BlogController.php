<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\BlogPost;

class BlogController extends Controller {
    public function index() {
        $posts = BlogPost::orderByDesc('published_at')->get();
        return Inertia::render('Blog', [
            'posts' => $posts,
        ]);
    }
    public function show($slug) {
        $post = BlogPost::where('slug', $slug)->firstOrFail();
        return Inertia::render('BlogShow', [
            'post' => $post,
        ]);
    }
}
