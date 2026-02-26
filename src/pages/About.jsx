import React from 'react'

const About = () => {
  return (
    <div className="py-12 sm:py-20 flex-1 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">API Hub</span></h1>
          <p className="text-lg text-gray-600">Discover the power of combined integrations in one unified platform.</p>
        </div>

        <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-8 sm:p-10 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            API Hub is a comprehensive platform that demonstrates the power of API integrations.
            We bring together various public APIs to showcase how modern web applications can
            leverage external data sources to provide rich, dynamic user experiences.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <ul className="space-y-4 text-gray-600 text-lg">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✓</span>
              <span>Real-time weather information for cities worldwide</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✓</span>
              <span>Extensive product catalog with detailed information</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✓</span>
              <span>Searchable recipe database with cooking instructions</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✓</span>
              <span>Inspirational quotes from great minds and Indian leaders</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✓</span>
              <span>Up-to-date news from reliable sources</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 sm:p-10 text-white">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-3 text-orange-100">Frontend</h3>
              <ul className="space-y-2 text-orange-50">
                <li>• React.js</li>
                <li>• React Router Dom</li>
                <li>• Tailwind CSS v4</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3 text-orange-100">APIs Integrated</h3>
              <ul className="space-y-2 text-orange-50">
                <li>• OpenWeatherMap</li>
                <li>• FakeStore API</li>
                <li>• TheMealDB</li>
                <li>• Static Quotes Data</li>
                <li>• News API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
