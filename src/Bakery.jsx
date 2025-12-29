import React, { useState } from 'react';

const COOKIE_DATA = [
  { id: 1, category: 'Classic', name: 'Salted Toffee', price: '$4', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600' },
  { id: 2, category: 'Vegan', name: 'Oat & Maple', price: '$5', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600' },
  { id: 3, category: 'Classic', name: 'Dark Chocolate', price: '$4', image: 'https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?q=80&w=600' },
  { id: 4, category: 'Specialty', name: 'Matcha White', price: '$6', image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?q=80&w=600' },
];

export default function Bakery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Classic', 'Vegan', 'Specialty'];

  const filteredCookies = filter === 'All' 
    ? COOKIE_DATA 
    : COOKIE_DATA.filter(c => c.category === filter);

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#33302E]">
      {/* Header */}
      <nav className="p-10 flex justify-between items-center border-b border-stone-200">
        <h1 className="font-serif text-3xl tracking-tight">Oven & Earth</h1>
        <ul className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-medium">
          <li className="cursor-pointer hover:opacity-50">Shop</li>
          <li className="cursor-pointer hover:opacity-50">Process</li>
          <li className="cursor-pointer hover:opacity-50">Visit</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="py-24 px-10 text-center">
        <h2 className="text-6xl md:text-8xl font-serif italic mb-8">Warmth in every crumb.</h2>
        
        {/* Filter Bar */}
        <div className="flex justify-center space-x-6 mt-12 border-y border-stone-200 py-4 max-w-xl mx-auto">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[11px] uppercase tracking-widest transition-all ${filter === cat ? 'font-bold border-b border-black' : 'opacity-40 hover:opacity-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Listing Page */}
      <section className="max-w-7xl mx-auto px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCookies.map((cookie) => (
            <div key={cookie.id} className="group overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-stone-200 mb-4">
                <img 
                  src={cookie.image} 
                  alt={cookie.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-xl">{cookie.name}</h3>
                <span className="text-sm opacity-60 italic">{cookie.price}</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">{cookie.category}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-stone-100 py-16 text-center text-[10px] uppercase tracking-[0.3em] opacity-50">
        © 2024 Oven & Earth Bakery • Made for slow mornings
      </footer>
    </div>
  );
}