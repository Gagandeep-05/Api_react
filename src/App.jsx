import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Products from './pages/Products';
import Quotes from './pages/Quotes';
import Recipes from './pages/Recipes';
import Weather from './pages/Weather';
import ProductDetails from './pages/ProductDetails';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
