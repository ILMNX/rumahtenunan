import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import TenunanLayout from '@/Layouts/TenunanLayout';

export default function Show({ auth, product, relatedProducts }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const addToCart = () => {
        if (!auth?.user) {
            router.visit('/login');
            return;
        }

        router.post('/cart', {
            product_id: product.id,
            quantity: quantity,
        }, {
            preserveScroll: true,
            onSuccess: () => {
                // Show success message or notification
            },
        });
    };

    return (
        <TenunanLayout user={auth?.user}>
            <Head title={`${product.name} - Rumah Tenunan`} />

            <div className="bg-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Breadcrumb */}
                    <nav className="flex mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            <li>
                                <Link href="/" className="text-gray-500 hover:text-gray-700">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <span className="text-gray-500">/</span>
                            </li>
                            <li>
                                <Link href="/products" className="text-gray-500 hover:text-gray-700">
                                    Produk
                                </Link>
                            </li>
                            <li>
                                <span className="text-gray-500">/</span>
                            </li>
                            <li>
                                <Link
                                    href={`/products?category=${product.category.slug}`}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    {product.category.name}
                                </Link>
                            </li>
                            <li>
                                <span className="text-gray-500">/</span>
                            </li>
                            <li className="text-gray-900 font-medium">
                                {product.name}
                            </li>
                        </ol>
                    </nav>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-12">
                        {/* Product Images */}
                        <div>
                            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden mb-4">
                                {product.images && product.images.length > 0 ? (
                                    <img
                                        src={`/storage/${product.images[selectedImage]}`}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <span className="text-9xl">🧵</span>
                                    </div>
                                )}
                            </div>

                            {/* Image Thumbnails */}
                            {product.images && product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-2">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`aspect-square bg-white rounded-md shadow-sm overflow-hidden border-2 ${
                                                selectedImage === index
                                                    ? 'border-orange-600'
                                                    : 'border-transparent hover:border-gray-300'
                                            }`}
                                        >
                                            <img
                                                src={`/storage/${image}`}
                                                alt={`${product.name} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                                    {product.category.name}
                                </span>
                                {product.is_featured && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                                        ⭐ Featured
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center space-x-4 mb-6">
                                <span className="text-3xl font-bold text-orange-600">
                                    {formatPrice(product.price)}
                                </span>
                                {product.compare_price && (
                                    <span className="text-xl text-gray-500 line-through">
                                        {formatPrice(product.compare_price)}
                                    </span>
                                )}
                            </div>

                            {/* Stock Status */}
                            <div className="mb-6">
                                {product.stock_quantity > 0 ? (
                                    <div className="flex items-center text-green-600">
                                        <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                                        <span>Stok Tersedia ({product.stock_quantity} pcs)</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center text-red-600">
                                        <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                                        <span>Stok Habis</span>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Add to Cart */}
                            {product.stock_quantity > 0 && (
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="flex items-center border border-gray-300 rounded-md">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="px-3 py-2 text-gray-600 hover:text-gray-800"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            max={product.stock_quantity}
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                            className="w-16 text-center border-0 focus:ring-0"
                                        />
                                        <button
                                            onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
                                            className="px-3 py-2 text-gray-600 hover:text-gray-800"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={addToCart}
                                        className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition-colors font-medium"
                                    >
                                        Tambah ke Keranjang
                                    </button>
                                </div>
                            )}

                            {/* Artisan Info */}
                            {product.artisan_info && (
                                <div className="bg-amber-50 p-6 rounded-lg mb-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Informasi Pengrajin
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        {product.artisan_info.name && (
                                            <p>
                                                <span className="font-medium">Nama:</span> {product.artisan_info.name}
                                            </p>
                                        )}
                                        {product.artisan_info.origin && (
                                            <p>
                                                <span className="font-medium">Asal:</span> {product.artisan_info.origin}
                                            </p>
                                        )}
                                        {product.artisan_info.experience && (
                                            <p>
                                                <span className="font-medium">Pengalaman:</span> {product.artisan_info.experience}
                                            </p>
                                        )}
                                        {product.artisan_info.story && (
                                            <p className="mt-3">
                                                <span className="font-medium">Cerita:</span> {product.artisan_info.story}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Weaving Details */}
                            {product.weaving_details && (
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Detail Tenunan
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        {product.weaving_details.pattern && (
                                            <div>
                                                <span className="font-medium text-gray-700">Motif:</span>
                                                <p>{product.weaving_details.pattern}</p>
                                            </div>
                                        )}
                                        {product.weaving_details.material && (
                                            <div>
                                                <span className="font-medium text-gray-700">Bahan:</span>
                                                <p>{product.weaving_details.material}</p>
                                            </div>
                                        )}
                                        {product.weaving_details.technique && (
                                            <div>
                                                <span className="font-medium text-gray-700">Teknik:</span>
                                                <p>{product.weaving_details.technique}</p>
                                            </div>
                                        )}
                                        {product.weaving_details.origin_region && (
                                            <div>
                                                <span className="font-medium text-gray-700">Daerah Asal:</span>
                                                <p>{product.weaving_details.origin_region}</p>
                                            </div>
                                        )}
                                        {product.weaving_details.cultural_meaning && (
                                            <div className="col-span-2">
                                                <span className="font-medium text-gray-700">Makna Budaya:</span>
                                                <p>{product.weaving_details.cultural_meaning}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts && relatedProducts.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Produk Serupa
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedProducts.map((relatedProduct) => (
                                    <Link
                                        key={relatedProduct.id}
                                        href={`/products/${relatedProduct.slug}`}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                                    >
                                        <div className="aspect-square bg-gray-200 overflow-hidden">
                                            {relatedProduct.images && relatedProduct.images[0] ? (
                                                <img
                                                    src={`/storage/${relatedProduct.images[0]}`}
                                                    alt={relatedProduct.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                    <span className="text-4xl">🧵</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                                                {relatedProduct.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-2">
                                                {relatedProduct.category.name}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold text-orange-600">
                                                    {formatPrice(relatedProduct.price)}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </TenunanLayout>
    );
}
