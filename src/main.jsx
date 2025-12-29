import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// 1. The Bakery Component Logic
const COOKIE_DATA = [
  { id: 1, category: 'Classic', name: 'Salted Toffee', price: '$4', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600' },
  { id: 2, category: 'Vegan', name: 'Oat & Maple', price: '$5', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600' },
  { id: 3, category: 'Classic', name: 'Dark Chocolate', price: '$4', image: 'https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?q=80&w=600' },
  { id: 4, category: 'Specialty', name: 'Matcha White', price: '$6', image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?q=80&w=600' },
];

function Bakery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Classic', 'Vegan', 'Specialty'];

  const filteredCookies = filter === 'All' 
    ? COOKIE_DATA 
    : COOKIE_DATA.filter(c => c.category === filter);

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] text-[#33302E] block">
      <nav className="w-full p-6 flex justify-between items-center border-b border-stone-200 bg-white">
        <h1 className="text-2xl font-bold tracking-tighter">OVEN & EARTH</h1>
        <div className="text-xs uppercase tracking-widest">Menu</div>
      </nav>

      <header className="py-20 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-serif italic text-stone-800">Freshly Baked</h2>
        <div className="flex justify-center gap-4 mt-10">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 text-[10px] uppercase tracking-widest border transition-all
                ${filter === cat ? 'bg-black text-white border-black' : 'bg-transparent text-stone-400 border-stone-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredCookies.map((cookie) => (
            <div key={cookie.id} className="flex flex-col">
              <div className="aspect-square w-full overflow-hidden bg-stone-200 mb-4">
                <img src={cookie.image} alt={cookie.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg">{cookie.name}</h3>
                <span className="text-stone-400">{cookie.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// 2. The Mounting Logic (Connecting React to your HTML)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Bakery />
  </React.StrictMode>,
)