import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const fetchProducts = async () => {
    setLoading(true);
    setError('');

    try {
      const url = category === 'all'
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${category}`;

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">Discover top-quality items across all categories</p>
        </div>

        <div className="mb-12 flex justify-center gap-3 flex-wrap">
          {['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-medium capitalize transition-all duration-200 ${category === cat
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600 hover:shadow-sm'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl max-w-2xl mx-auto mb-8 text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {!loading && products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-lg hover:border-orange-200 hover:scale-105 transition-all duration-200 flex flex-col h-full"
            >
              <div className="h-64 p-6 flex items-center justify-center bg-white group-hover:scale-105 transition-transform duration-300 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6 border-t border-gray-50 flex flex-col flex-1 bg-gray-50/50">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-extrabold text-orange-600 tracking-tight">
                    ${product.price}
                  </span>
                  <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                    <span className="text-yellow-500 mr-1 text-sm">⭐</span>
                    <span className="font-semibold text-gray-700 text-sm">{product.rating.rate}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
