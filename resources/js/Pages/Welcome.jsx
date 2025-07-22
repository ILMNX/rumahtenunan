import { Head, Link } from '@inertiajs/react';
import TenunanLayout from '@/Layouts/TenunanLayout';

export default function Welcome({ auth }) {
    return (
        <TenunanLayout user={auth?.user}>
            <Head title="Rumah Tenunan - Warisan Budaya Nusantara" />

            {/* Hero Section - Fullscreen */}
            <section className="relative h-screen w-full overflow-hidden -mt-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/tenun-bg.webp" 
                        alt="Traditional Indonesian Weaving" 
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                
                {/* Color Overlay matching current gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/80 via-orange-600/75 to-red-600/80"></div>
                
                {/* Traditional Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                
                {/* Content */}
                <div className="relative flex items-center justify-center h-full pt-20">
                    <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif mb-8 tracking-tight">
                            Rumah Tenunan
                        </h1>
                        <p className="text-xl md:text-3xl lg:text-4xl text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                            Jelajahi keindahan tenun tradisional Indonesia yang dibuat oleh 
                            pengrajin terbaik dari Nusa Tenggara Timur dan Nusa Tenggara Barat
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center px-10 py-5 bg-white text-orange-700 font-bold text-lg rounded-full hover:bg-amber-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
                            >
                                <span>Jelajahi Koleksi</span>
                                <svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center px-10 py-5 border-3 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-orange-700 transition-all duration-300 backdrop-blur-sm"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
                            Kategori Produk Kami
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Dari dress elegan hingga aksesori fungsional, semua dibuat dengan cinta oleh tangan-tangan terampil pengrajin Indonesia
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Dress Tenun',
                                description: 'Gaun elegan dengan motif tradisional ikat dan songket',
                                icon: '👗',
                                color: 'from-amber-400 to-orange-500',
                                href: '/products?category=dress-tenun'
                            },
                            {
                                title: 'Tas Tenun',
                                description: 'Tas fungsional dengan keindahan motif Nusantara',
                                icon: '👜',
                                color: 'from-blue-400 to-indigo-500',
                                href: '/products?category=tas-tenun'
                            },
                            {
                                title: 'Sepatu Tenun',
                                description: 'Alas kaki nyaman dengan sentuhan budaya lokal',
                                icon: '👞',
                                color: 'from-emerald-400 to-teal-500',
                                href: '/products?category=sepatu-tenun'
                            }
                        ].map((category, index) => (
                            <Link 
                                key={index}
                                href={category.href}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-orange-600 transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {category.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </TenunanLayout>
    );
}
