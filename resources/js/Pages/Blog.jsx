import { Head, Link } from '@inertiajs/react';
import TenunanLayout from '@/Layouts/TenunanLayout';

export default function Blog({ posts }) {
    return (
        <TenunanLayout>
            <Head title="Blog & Cerita - Rumah Tenunan" />
            <section className="max-w-5xl mx-auto py-20 px-4">
                <h1 className="text-4xl font-bold font-serif mb-6 text-primary-dark">Blog & Cerita</h1>
                <p className="text-lg text-muted-dark mb-8">Cerita, inspirasi, dan edukasi seputar tenun tradisional Indonesia dan pengrajin Nusantara.</p>
                <div className="grid md:grid-cols-2 gap-8">
                    {posts && posts.length > 0 ? (
                        posts.map(post => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                                <h2 className="text-2xl font-bold text-primary mb-2">{post.title}</h2>
                                <p className="text-muted-dark mb-4 line-clamp-3">{post.excerpt}</p>
                                <span className="text-sm text-gray-500">{post.published_at}</span>
                            </Link>
                        ))
                    ) : (
                        <p className="text-muted-dark">Belum ada artikel.</p>
                    )}
                </div>
            </section>
        </TenunanLayout>
    );
}
