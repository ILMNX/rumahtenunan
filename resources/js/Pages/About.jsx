import { Head } from '@inertiajs/react';
import TenunanLayout from '@/Layouts/TenunanLayout';

export default function About() {
    return (
        <TenunanLayout>
            <Head title="Tentang Rumah Tenunan" />
            <section className="max-w-4xl mx-auto py-20 px-4">
                <h1 className="text-4xl font-bold font-serif mb-6 text-primary-dark">Tentang Rumah Tenunan</h1>
                <p className="text-lg text-muted-dark mb-8">
                    Rumah Tenunan adalah komunitas dan profil digital yang berfokus pada pelestarian tenun tradisional Indonesia. Kami bekerja sama dengan pengrajin dari berbagai daerah untuk menghadirkan cerita, inspirasi, dan edukasi tentang warisan budaya Nusantara.
                </p>
                <ul className="list-disc pl-6 text-muted-dark space-y-2 mb-8">
                    <li>Koleksi tenun eksklusif dari berbagai daerah</li>
                    <li>Profil pengrajin dan kisah di balik setiap karya</li>
                    <li>Inspirasi gaya dan tips perawatan tenun</li>
                    <li>Program edukasi dan pelatihan tenun</li>
                </ul>
                <img src="/images/tentang_rumahtenunan.webp" alt="Pengrajin Tenun Indonesia" className="rounded-3xl shadow-xl w-full max-w-md object-cover mx-auto" />
            </section>
        </TenunanLayout>
    );
}
