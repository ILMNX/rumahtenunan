import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function TenunanLayout({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { url } = usePage();

    const isActive = (path) => {
        return url === path || url.startsWith(path + '/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Navigation Header */}
            <header className="bg-amber-50/30 backdrop-blur-lg shadow-lg border-b border-amber-200/30 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-20 justify-center relative">
                        {/* Logo */}
                        <div className="flex items-center space-x-3 absolute left-0 top-0 bottom-0 h-full">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <img src="/images/logo-tenunan-transparent.webp" alt="Rumah Tenunan" className='style:object-contain w-11 h-11' />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                                        Rumah Tenunan
                                    </h1>
                                    <p className="text-xs text-gray-600 -mt-1">Warisan Nusantara</p>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation - Centered */}
                        <nav className="hidden md:flex space-x-8 justify-center mx-auto">
                            <Link
                                href="/"
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isActive('/') && url === '/'
                                        ? 'bg-orange-100 text-orange-700 shadow-md'
                                        : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
                                }`}
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/products"
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isActive('/products')
                                        ? 'bg-orange-100 text-orange-700 shadow-md'
                                        : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
                                }`}
                            >
                                Produk
                            </Link>
                            <Link
                                href="/about"
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isActive('/about')
                                        ? 'bg-orange-100 text-orange-700 shadow-md'
                                        : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
                                }`}
                            >
                                Tentang
                            </Link>
                            <Link
                                href="/blog"
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isActive('/blog')
                                        ? 'bg-orange-100 text-orange-700 shadow-md'
                                        : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
                                }`}
                            >
                                Blog
                            </Link>
                        </nav>

                        {/* Right Side: Instagram & Contact Us */}
                        <div className="flex items-center space-x-4 absolute right-0 top-0 bottom-0 h-full">
                            <a
                                href="https://instagram.com/rumahtenunan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-400 hover:scale-105 transition-transform"
                                aria-label="Instagram"
                            >
                                {/* Instagram SVG */}
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </a>
                            <Link
                                href="/contact"
                                className="px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden absolute right-0 top-0 bottom-0 h-full flex items-center">
                            <button
                                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
                            >
                                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {showingNavigationDropdown ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {showingNavigationDropdown && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <div className="px-4 py-4 space-y-2">
                            <Link
                                href="/"
                                className={`block px-4 py-2 rounded-lg text-base font-medium ${
                                    isActive('/') && url === '/'
                                        ? 'bg-orange-100 text-orange-700'
                                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
                                }`}
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/products"
                                className={`block px-4 py-2 rounded-lg text-base font-medium ${
                                    isActive('/products')
                                        ? 'bg-orange-100 text-orange-700'
                                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
                                }`}
                            >
                                Produk
                            </Link>
                            <Link
                                href="/about"
                                className={`block px-4 py-2 rounded-lg text-base font-medium ${
                                    isActive('/about')
                                        ? 'bg-orange-100 text-orange-700'
                                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
                                }`}
                            >
                                Tentang
                            </Link>
                            <Link
                                href="/blog"
                                className={`block px-4 py-2 rounded-lg text-base font-medium ${
                                    isActive('/blog')
                                        ? 'bg-orange-100 text-orange-700'
                                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
                                }`}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-4 py-2 rounded-lg text-base font-medium bg-orange-600 text-white hover:bg-orange-700 transition-colors"
                            >
                                Contact Us
                            </Link>
                            <a
                                href="https://instagram.com/rumahtenunan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 rounded-lg text-base font-medium bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:scale-105 transition-transform"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="relative">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg">🧵</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Rumah Tenunan</h3>
                                    <p className="text-sm text-gray-400">Warisan Nusantara</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Melestarikan keindahan tenun tradisional Indonesia melalui 
                                karya-karya pengrajin terbaik Nusantara.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Menu</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">Beranda</Link></li>
                                <li><Link href="/products" className="text-gray-300 hover:text-orange-400 transition-colors">Produk</Link></li>
                                <li><Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">Tentang Kami</Link></li>
                                <li><Link href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</Link></li>
                                <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Kategori</h4>
                            <ul className="space-y-2">
                                <li><Link href="/products?category=dress-tenun" className="text-gray-300 hover:text-orange-400 transition-colors">Dress Tenun</Link></li>
                                <li><Link href="/products?category=tas-tenun" className="text-gray-300 hover:text-orange-400 transition-colors">Tas Tenun</Link></li>
                                <li><Link href="/products?category=sepatu-tenun" className="text-gray-300 hover:text-orange-400 transition-colors">Sepatu Tenun</Link></li>
                            </ul>
                        </div>

                        {/* Blog Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Blog</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-orange-400">📝</span>
                                    <Link href="/blog" className="text-gray-300 text-sm hover:text-orange-400 transition-colors">Artikel & Cerita</Link>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-orange-400">📷</span>
                                    <a href="https://instagram.com/rumahtenunan" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-orange-400 transition-colors">Instagram</a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-orange-400">✉️</span>
                                    <Link href="/contact" className="text-gray-300 text-sm hover:text-orange-400 transition-colors">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Rumah Tenunan. Semua hak cipta dilindungi.
                        </p>
                        <p className="text-gray-400 text-sm mt-2 md:mt-0">
                            Dibuat dengan ❤️ untuk melestarikan budaya Indonesia
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
