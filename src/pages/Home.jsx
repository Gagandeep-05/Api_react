import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { title: '🌤️ Weather', path: '/weather', desc: 'Check current weather conditions for any city around the world.' },
    { title: '🛍️ Products', path: '/products', desc: 'Browse through our product catalog with detailed information.' },
    { title: '🍽️ Recipes', path: '/recipes', desc: 'Discover delicious recipes from around the world.' },
    { title: '💬 Quotes', path: '/quotes', desc: 'Get inspired with random motivational quotes.' },
    { title: '📰 News', path: '/news', desc: 'Stay updated with the latest news from various sources.' },
  ];

  return (
    <div className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-green-50 flex-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">🇮🇦 API Hub</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore various API integrations in one place. Fast, simple, and fully responsive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="group bg-white rounded-2xl shadow-sm border border-orange-100 p-8 hover:shadow-lg hover:border-orange-200 hover:scale-105 transition-all duration-200 flex flex-col items-start"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </Link>
          ))}

          {/* Contact Card */}
          <Link
            to="/contact"
            className="group bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl shadow-sm border border-orange-200 p-8 hover:shadow-lg hover:scale-105 transition-all duration-200 flex flex-col items-start"
          >
            <h3 className="text-2xl font-bold text-orange-800 mb-3 group-hover:text-orange-900 transition-colors">
              📞 Contact Us
            </h3>
            <p className="text-orange-700 leading-relaxed">
              Have a question or feedback? Get in touch with us through our contact form.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
