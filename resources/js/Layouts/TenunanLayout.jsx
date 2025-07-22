import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function TenunanLayout({ user, children }) {
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
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <span className="text-white text-xl font-bold">🧵</span>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                                        Rumah Tenunan
                                    </h1>
                                    <p className="text-xs text-gray-600 -mt-1">Warisan Nusantara</p>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
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
                                href="/contact"
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isActive('/contact')
                                        ? 'bg-orange-100 text-orange-700 shadow-md'
                                        : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
                                }`}
                            >
                                Kontak
                            </Link>
                        </nav>

                        {/* User Menu */}
                        <div className="hidden md:flex items-center space-x-4">
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
                                    >
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold">
                                                {user.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <span className="font-medium">{user.name}</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    {showingNavigationDropdown && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                                            <Link
                                                href="/dashboard"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                href="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                                            >
                                                Profile
                                            </Link>
                                            <hr className="my-2" />
                                            <Link
                                                href="/logout"
                                                method="post"
                                                as="button"
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700"
                                            >
                                                Keluar
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Link
                                        href="/login"
                                        className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-700 transition-colors"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-medium rounded-full hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
                                    >
                                        Daftar
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
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
                                href="/contact"
                                className={`block px-4 py-2 rounded-lg text-base font-medium ${
                                    isActive('/contact')
                                        ? 'bg-orange-100 text-orange-700'
                                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
                                }`}
                            >
                                Kontak
                            </Link>
                            
                            {user ? (
                                <>
                                    <hr className="my-4" />
                                    <div className="px-4 py-2">
                                        <div className="font-medium text-gray-800">{user.name}</div>
                                        <div className="text-sm text-gray-500">{user.email}</div>
                                    </div>
                                    <Link
                                        href="/dashboard"
                                        className="block px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="block w-full text-left px-4 py-2 rounded-lg text-base font-medium text-red-700 hover:bg-red-50"
                                    >
                                        Keluar
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <hr className="my-4" />
                                    <Link
                                        href="/login"
                                        className="block px-4 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="block px-4 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center"
                                    >
                                        Daftar
                                    </Link>
                                </>
                            )}
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
                                <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Kontak</Link></li>
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

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-orange-400">📍</span>
                                    <span className="text-gray-300 text-sm">Jakarta, Indonesia</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-orange-400">📞</span>
                                    <span className="text-gray-300 text-sm">+62 812-3456-7890</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-orange-400">✉️</span>
                                    <span className="text-gray-300 text-sm">info@rumahtenunan.id</span>
                                </div>
                            </div>
                            
                            {/* Social Media */}
                            <div className="flex space-x-3 mt-6">
                                <a href="#" className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                                    <span className="text-white text-sm">📘</span>
                                </a>
                                <a href="#" className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                                    <span className="text-white text-sm">📷</span>
                                </a>
                                <a href="#" className="w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                                    <span className="text-white text-sm">🐦</span>
                                </a>
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
