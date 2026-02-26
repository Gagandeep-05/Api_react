import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch product details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-orange-50 via-white to-green-50 flex flex-col items-center justify-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mb-4"></div>
        <div className="text-lg text-gray-600 font-medium">Loading product...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex-1 bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-12">
        <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-orange-100 max-w-md">
          <div className="text-xl text-red-600 font-semibold mb-6">{error || 'Product not found'}</div>
          <Link to="/products" className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition font-medium">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Link to="/products" className="inline-flex items-center text-orange-600 hover:text-orange-800 hover:underline mb-8 font-medium transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Catalog
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12">

            {/* Image Section */}
            <div className="flex items-center justify-center bg-white p-8 group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-h-[400px] object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-orange-50 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full capitalize tracking-wide border border-orange-100">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100">
                  <span className="text-yellow-500 text-lg mr-1.5 leading-none">★</span>
                  <span className="text-lg font-bold text-gray-800 leading-none mr-1">{product.rating.rate}</span>
                  <span className="text-gray-500 text-sm">/ 5</span>
                </div>
                <span className="text-gray-400">—</span>
                <span className="text-gray-500 text-sm font-medium">
                  {product.rating.count} reviews
                </span>
              </div>

              <div className="text-4xl font-black text-orange-600 tracking-tight mb-8">
                ${product.price.toFixed(2)}
              </div>

              <div className="pt-8 border-t border-gray-100 mt-auto">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Product Details</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 pt-6">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-sm cursor-not-allowed opacity-80">
                  Add to Cart (Demo)
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails; 
