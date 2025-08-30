import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Lookbook from './components/Lookbook';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="pt-20">
        <Hero />
        <ProductShowcase />
        <Lookbook />
      </main>
    </div>
  );
}
