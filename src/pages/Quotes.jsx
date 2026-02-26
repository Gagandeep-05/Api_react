import React, { useState, useEffect } from 'react'

const Quotes = () => {
  // Static quotes data with famous Indian personalities and universal quotes
  const quotesData = [
    {
      content: "In a gentle way, you can shake the world.",
      author: "Mahatma Gandhi"
    },
    {
      content: "The best way to find yourself is to lose yourself in the service of others.",
      author: "Mahatma Gandhi"
    },
    {
      content: "Arise, awake and do not stop until the goal is reached.",
      author: "Swami Vivekananda"
    },
    {
      content: "You cannot believe in God until you believe in yourself.",
      author: "Swami Vivekananda"
    },
    {
      content: "The mind is everything. What you think you become.",
      author: "Lord Buddha"
    },
    {
      content: "Change your thoughts and you change your world.",
      author: "Indian Proverb"
    },
    {
      content: "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
      author: "Dr. APJ Abdul Kalam"
    },
    {
      content: "Excellence is a continuous process and not an accident.",
      author: "Dr. APJ Abdul Kalam"
    },
    {
      content: "The future depends on what you do today.",
      author: "Mahatma Gandhi"
    },
    {
      content: "Learning is never done without errors and defeat.",
      author: "Vladimir Lenin"
    },
    {
      content: "Your beliefs don't make you a better person, your behavior does.",
      author: "Sukhraj S. Dhillon"
    },
    {
      content: "The power to question is the basis of all human progress.",
      author: "Indira Gandhi"
    },
    {
      content: "Service to others is the rent you pay for your room here on earth.",
      author: "Muhammad Ali"
    },
    {
      content: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      content: "If you want to shine like a sun, first burn like a sun.",
      author: "Dr. APJ Abdul Kalam"
    }
  ];

  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    setLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      setQuote(quotesData[randomIndex]);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 sm:py-20 flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Inspirational Quotes</h1>
          <p className="text-lg text-gray-600">Find wisdom in words of great minds</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-8 sm:p-12 relative overflow-hidden">
          {/* Decorative quote mark */}
          <div className="absolute top-4 left-6 text-[120px] leading-none text-orange-50 font-serif opacity-50 select-none pointer-events-none">
            "
          </div>
          <div className="absolute bottom-4 right-6 text-[120px] leading-none text-green-50 font-serif opacity-50 select-none pointer-events-none rotate-180">
            "
          </div>

          <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
            {loading ? (
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-600"></div>
                <div className="text-center text-gray-500 font-medium tracking-wide">Drawing inspiration...</div>
              </div>
            ) : quote ? (
              <div className="flex flex-col h-full justify-between">
                <blockquote className="text-2xl sm:text-3xl text-gray-800 font-medium leading-normal mb-8 text-center px-4 sm:px-8">
                  "{quote.content}"
                </blockquote>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-auto border-t border-gray-100 pt-8">
                  <p className="text-lg text-gray-600 font-semibold mb-6 sm:mb-0 uppercase tracking-wider text-sm">
                    — {quote.author}
                  </p>
                  <button
                    onClick={fetchQuote}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 hover:shadow-md transition-all duration-200 active:scale-95 flex items-center"
                  >
                    <span>Get Another Quote</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes
