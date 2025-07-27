import { Head, Link } from '@inertiajs/react';
import TenunanLayout from '@/Layouts/TenunanLayout';

export default function BlogShow({ post }) {
    return (
        <TenunanLayout>
            <Head title={post.title + ' - Rumah Tenunan'} />
            <section className="max-w-3xl mx-auto py-20 px-4">
                <h1 className="text-4xl font-bold font-serif mb-6 text-primary-dark">{post.title}</h1>
                <p className="text-muted-dark mb-4">{post.published_at}</p>
                <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
                <Link href="/blog" className="text-primary hover:underline">← Kembali ke Blog</Link>
            </section>
        </TenunanLayout>
    );
}
