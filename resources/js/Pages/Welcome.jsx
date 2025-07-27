import { Head, Link } from '@inertiajs/react';
import TenunanLayout from '@/Layouts/TenunanLayout';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function Welcome({ auth }) {
    return (
        <TenunanLayout user={auth?.user}>
            <Head title="Rumah Tenunan - Warisan Budaya Nusantara" />

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden -mt-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="/images/tenun-bg.webp" 
                        alt="Tenun Tradisional Indonesia" 
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-secondary/90"></div>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                {/* Content */}
                <div className="relative flex items-center justify-center h-full pt-20">
                    <div className="text-center text-primary-contrast px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-8xl font-bold font-serif mb-6 tracking-tight">
                            Rumah Tenunan
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-contrast/80 mb-8 font-light">
                            Platform digital untuk melestarikan dan mempromosikan tenun tradisional Indonesia. Temukan koleksi eksklusif, cerita pengrajin, dan inspirasi gaya dari warisan budaya Nusantara.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                            <Link
                                href="/products"
                                className="inline-flex items-center px-10 py-5 bg-primary text-primary-contrast font-bold text-lg rounded-full hover:bg-primary-dark transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
                            >
                                Jelajahi Koleksi
                                <svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center px-10 py-5 border-3 border-primary-contrast text-primary-contrast font-bold text-lg rounded-full hover:bg-primary-contrast hover:text-primary transition-all duration-300 backdrop-blur-sm"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 text-primary-contrast/80 text-base">
                            <span>🌏 Mendukung pengrajin lokal</span>
                            <span>🧵 100% tenun asli Indonesia</span>
                            <span>🚚 Pengiriman ke seluruh Indonesia</span>
                        </div>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-primary-contrast/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary-contrast/70 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <motion.section
                className="min-h-screen flex items-center bg-gradient-to-b from-muted-light to-muted"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                    <div className="text-center mt-16 mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary-dark mb-6">
                            Tentang Rumah Tenunan
                        </h2>
                        <p className="text-lg text-muted-dark max-w-3xl mx-auto leading-relaxed">
                            Rumah Tenunan adalah komunitas dan marketplace yang berfokus pada pelestarian tenun tradisional Indonesia. Kami bekerja sama dengan pengrajin dari Nusa Tenggara Timur, Nusa Tenggara Barat, dan berbagai daerah lain untuk menghadirkan produk berkualitas dan cerita inspiratif.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <ul className="list-disc pl-6 text-muted-dark space-y-2 text-left">
                                <li>Koleksi tenun eksklusif dari berbagai daerah</li>
                                <li>Profil pengrajin dan kisah di balik setiap karya</li>
                                <li>Inspirasi gaya dan tips perawatan tenun</li>
                                <li>Program edukasi dan pelatihan tenun</li>
                            </ul>
                            <Link
                                href="/about"
                                className="inline-block mt-8 px-8 py-3 bg-secondary text-secondary-contrast rounded-full font-semibold hover:bg-secondary-dark transition"
                            >
                                Selengkapnya
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/images/tentang_rumahtenunan.webp"
                                alt="Pengrajin Tenun Indonesia"
                                className="rounded-3xl shadow-xl w-full max-w-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Categories Section */}
            <motion.section
                className="min-h-screen flex items-center bg-gradient-to-b from-muted-light to-muted"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                    <div className="text-center mt-16 mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-6">
                            Kategori Produk Kami
                        </h2>
                        <p className="text-xl text-muted-dark max-w-3xl mx-auto leading-relaxed">
                            Dari dress elegan hingga aksesori fungsional, semua dibuat dengan cinta oleh tangan-tangan terampil pengrajin Indonesia
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Dress Tenun',
                                description: 'Gaun elegan dengan motif tradisional ikat dan songket',
                                icon: '👗',
                                color: 'from-primary-light to-primary',
                                href: '/products?category=dress-tenun'
                            },
                            {
                                title: 'Tas Tenun',
                                description: 'Tas fungsional dengan keindahan motif Nusantara',
                                icon: '👜',
                                color: 'from-secondary-light to-secondary',
                                href: '/products?category=tas-tenun'
                            },
                            {
                                title: 'Sepatu Tenun',
                                description: 'Alas kaki nyaman dengan sentuhan budaya lokal',
                                icon: '👞',
                                color: 'from-accent-light to-accent',
                                href: '/products?category=sepatu-tenun'
                            }
                        ].map((category, index) => (
                            <Link 
                                key={index}
                                href={category.href}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-muted"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-muted-dark leading-relaxed text-lg">
                                    {category.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Pengrajin Section */}
            <motion.section
                className="min-h-screen flex items-center bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                    <div className="text-center mt-16 mb-16">
                        <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
                            Pengrajin Unggulan
                        </h2>
                        <p className="text-xl text-muted-dark max-w-3xl mx-auto leading-relaxed">
                            Kenali para pengrajin yang berkontribusi dalam pelestarian budaya tenun Indonesia.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Ibu Maria',
                                region: 'Sumba, NTT',
                                img: '/images/pengrajin-maria.webp',
                                desc: 'Spesialis motif ikat Sumba, 20+ tahun pengalaman.'
                            },
                            {
                                name: 'Bapak Hasan',
                                region: 'Lombok, NTB',
                                img: '/images/pengrajin-hasan.webp',
                                desc: 'Ahli tenun songket Lombok, inovasi warna alami.'
                            },
                            {
                                name: 'Ibu Wayan',
                                region: 'Bali',
                                img: '/images/pengrajin-wayan.webp',
                                desc: 'Tenun endek Bali, pelestari teknik tradisional.'
                            }
                        ].map((crafter, idx) => (
                            <div key={idx} className="bg-muted-light rounded-2xl shadow-md p-6 flex flex-col items-center">
                                <img src={crafter.img} alt={crafter.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-primary" />
                                <h4 className="text-xl font-bold text-secondary mb-1">{crafter.name}</h4>
                                <span className="text-sm text-muted-dark mb-2">{crafter.region}</span>
                                <p className="text-muted-dark text-center">{crafter.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="py-16 bg-gradient-to-r from-primary to-accent text-primary-contrast text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
            >
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Gabung Komunitas Rumah Tenunan</h2>
                    <p className="text-lg mb-8">
                        Dapatkan update koleksi terbaru, promo eksklusif, dan cerita inspiratif langsung ke email Anda.
                    </p>
                    <Link
                        href="/register"
                        className="inline-block px-8 py-4 bg-secondary text-secondary-contrast rounded-full font-semibold hover:bg-secondary-dark transition"
                    >
                        Daftar Sekarang
                    </Link>
                </div>
            </motion.section>
        </TenunanLayout>
    );
}
