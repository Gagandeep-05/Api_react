import React, { useState, useEffect } from 'react'

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('general');
  const [error, setError] = useState('');

  const API_KEY = 'b95845aa40954b85af43f0c703d65d27'; // Add your News API key here from newsapi.org

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const fetchNews = async () => {
    setLoading(true);
    setError('');

    try {
      // Using a sample API endpoint - replace with actual News API
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data = await response.json();
      setArticles(data.articles || []);
    } catch (err) {
      setError(err.message);
      // Fallback to sample data if API fails
      setArticles([
        {
          title: "Sample News Article 1",
          description: "This is a sample news article. Add your News API key to see real news.",
          url: "#",
          urlToImage: "https://via.placeholder.com/400x200",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" }
        },
        {
          title: "Sample News Article 2",
          description: "Get your free API key from newsapi.org to display real news articles.",
          url: "#",
          urlToImage: "https://via.placeholder.com/400x200",
          publishedAt: new Date().toISOString(),
          source: { name: "Sample Source" }
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['general', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];

  return (
    <div className="flex-1 bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Latest News</h1>
          <p className="text-lg text-gray-600">Stay up to date with the latest headlines</p>
        </div>

        {!API_KEY && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-xl mb-8 flex items-start sm:items-center max-w-4xl mx-auto">
            <span className="text-xl mr-3 mt-1 sm:mt-0">⚠️</span>
            <span>
              Please add your News API key to see real news. Get one free at{' '}
              <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-900 transition flex items-center inline-flex">
                newsapi.org
              </a>
            </span>
          </div>
        )}

        <div className="mb-12 flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
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

        {error && !loading && articles.length === 0 && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl max-w-2xl mx-auto mb-8 text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col h-full"
            >
              {article.urlToImage && (
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
                    }}
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                  {article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                  {article.description}
                </p>
                <div className="mt-auto text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center">
                  Read more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default News
