import React, { useState } from 'react'

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '7c17ef5e38e2e128d6b536fa69445e2b';

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (!response.ok) {
        // Show more detailed error message from API
        if (data.message) {
          throw new Error(data.message);
        } else if (response.status === 404) {
          throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
        } else if (response.status === 401) {
          throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      }

      setWeather(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 sm:py-20 flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Weather</h1>
          <p className="text-lg text-gray-600">Check current conditions around the world</p>
        </div>

        {!API_KEY && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-xl mb-8 mx-auto flex items-start sm:items-center">
            <span className="text-xl mr-3 mt-1 sm:mt-0">⚠️</span>
            <span>
              Please add your OpenWeatherMap API key to use this feature. Get one free at{' '}
              <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-amber-900 transition flex items-center inline-flex">
                openweathermap.org
              </a>
            </span>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-sm border border-orange-100 p-6 sm:p-10 mb-8">
          <form onSubmit={fetchWeather} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city (e.g., Mumbai, Delhi, Bangalore)..."
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm bg-gray-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 hover:shadow-md transition-all duration-200 disabled:opacity-50 flex justify-center items-center h-full sm:min-w-[140px]"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  'Search'
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6">
              <p className="font-semibold text-lg mb-1 flex items-center">
                <span className="mr-2">❌</span> Error
              </p>
              <p className="text-red-600">{error}</p>
              {(error.includes('401') || error.includes('Invalid API key')) && (
                <p className="mt-2 text-sm text-red-500">
                  Your API key may be invalid or expired. Get a new free key at{' '}
                  <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                    openweathermap.org
                  </a>
                </p>
              )}
            </div>
          )}

          {weather && (
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg p-8 sm:p-10 text-white overflow-hidden relative">
              {/* Decorative background sun/cloud icon placeholder */}
              <div className="absolute -top-10 -right-10 text-[200px] opacity-10 select-none pointer-events-none">
                ☁️
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight drop-shadow-sm">
                  {weather.name}, {weather.sys.country}
                </h2>

                <div className="flex flex-col items-center justify-center my-8">
                  <div className="text-7xl sm:text-8xl font-black tracking-tighter drop-shadow-md">
                    {Math.round(weather.main.temp)}°
                  </div>
                  <p className="text-2xl font-medium capitalize mt-2 text-blue-100">
                    {weather.weather[0].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 border-t border-blue-400/30 pt-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-blue-100 text-xs text-transform uppercase tracking-wider mb-1">Feels Like</p>
                    <p className="text-xl font-bold">{Math.round(weather.main.feels_like)}°</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-blue-100 text-xs text-transform uppercase tracking-wider mb-1">Humidity</p>
                    <p className="text-xl font-bold">{weather.main.humidity}%</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-blue-100 text-xs text-transform uppercase tracking-wider mb-1">Wind</p>
                    <p className="text-xl font-bold">{weather.wind.speed} <span className="text-sm font-normal text-blue-100">m/s</span></p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <p className="text-blue-100 text-xs text-transform uppercase tracking-wider mb-1">Pressure</p>
                    <p className="text-xl font-bold">{weather.main.pressure} <span className="text-sm font-normal text-blue-100">hPa</span></p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Weather
