// import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import ProductList from './ProductList'
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Product type
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  featured: boolean;
}

interface ProductContextValue {
  products: Product[];
  loading: boolean;
  refresh: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext<ProductContextValue | null>(null);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const API_URL = 'https://646b3e2f7d3c1cae4ce37657.mockapi.io/api';

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      console.log('API response:', response.data); //  log this
      setProducts(response.data);
    } catch (error) {
      console.error('API request failed:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  const contextValue: ProductContextValue = {
    products,
    loading,
    refresh: fetchProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=' app relative pt-[4rem]'>
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <ProductProvider>
              <ProductList />
            </ProductProvider>
          }
        />
      </Routes>
    </Router>
    </div>
  )
}

export default App
