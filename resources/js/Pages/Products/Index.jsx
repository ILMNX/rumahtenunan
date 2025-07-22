import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import TenunanLayout from '@/Layouts/TenunanLayout';

export default function Index({ auth, products, categories, filters }) {
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [selectedCategory, setSelectedCategory] = useState(filters.category || '');
    const [sortBy, setSortBy] = useState(filters.sort || 'default');

    const handleFilter = () => {
        const params = {};
        if (searchTerm) params.search = searchTerm;
        if (selectedCategory) params.category = selectedCategory;
        if (sortBy !== 'default') params.sort = sortBy;

        router.get('/products', params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('');
        setSortBy('default');
        router.get('/products');
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <TenunanLayout user={auth?.user}>
            <Head title="Koleksi Produk - Rumah Tenunan" />

            <div className="bg-white">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold font-serif mb-4">
                                Koleksi Tenun Nusantara
                            </h1>
                            <p className="text-xl opacity-90 max-w-2xl mx-auto">
                                Temukan keindahan karya tangan pengrajin terbaik Indonesia
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                        {/* Sidebar Filters */}
                        <div className="lg:col-span-1 mb-8 lg:mb-0">
                            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Produk</h3>
                                
                                {/* Search */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Cari Produk
                                    </label>
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Nama produk..."
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
                                    />
                                </div>

                                {/* Categories */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Kategori
                                    </label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        <option value="">Semua Kategori</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.slug}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Sort */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Urutkan
                                    </label>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        <option value="default">Default</option>
                                        <option value="name">Nama A-Z</option>
                                        <option value="price_low">Harga Terendah</option>
                                        <option value="price_high">Harga Tertinggi</option>
                                        <option value="newest">Terbaru</option>
                                    </select>
                                </div>

                                {/* Filter Buttons */}
                                <div className="space-y-2">
                                    <button
                                        onClick={handleFilter}
                                        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
                                    >
                                        Terapkan Filter
                                    </button>
                                    <button
                                        onClick={clearFilters}
                                        className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                                    >
                                        Reset Filter
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="lg:col-span-3">
                            {/* Results Info */}
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-gray-600">
                                    Menampilkan {products.data.length} dari {products.total} produk
                                </p>
                            </div>

                            {products.data.length > 0 ? (
                                <>
                                    {/* Products Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                                        {products.data.map((product) => (
                                            <Link
                                                key={product.id}
                                                href={`/products/${product.slug}`}
                                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                                            >
                                                <div className="aspect-square bg-gray-200 overflow-hidden">
                                                    {product.images && product.images[0] ? (
                                                        <img
                                                            src={`/storage/${product.images[0]}`}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                            <span className="text-6xl">🧵</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-semibold text-gray-900 line-clamp-2 flex-1">
                                                            {product.name}
                                                        </h3>
                                                        {product.is_featured && (
                                                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full ml-2">
                                                                Featured
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">
                                                        {product.category.name}
                                                    </p>
                                                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                                                        {product.short_description || product.description}
                                                    </p>
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <span className="text-lg font-bold text-orange-600">
                                                                {formatPrice(product.price)}
                                                            </span>
                                                            {product.compare_price && (
                                                                <span className="text-sm text-gray-500 line-through ml-2">
                                                                    {formatPrice(product.compare_price)}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {product.stock_quantity === 0 && (
                                                            <span className="text-red-600 text-sm font-medium">
                                                                Habis
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    {products.last_page > 1 && (
                                        <div className="flex justify-center">
                                            <div className="flex space-x-1">
                                                {products.links.map((link, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => router.get(link.url)}
                                                        disabled={!link.url}
                                                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                                                            link.active
                                                                ? 'bg-orange-600 text-white'
                                                                : link.url
                                                                ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        }`}
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">🔍</div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        Produk tidak ditemukan
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Coba ubah filter pencarian Anda
                                    </p>
                                    <button
                                        onClick={clearFilters}
                                        className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                                    >
                                        Reset Filter
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </TenunanLayout>
    );
}
