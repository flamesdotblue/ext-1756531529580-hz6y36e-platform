import React, { useState } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-red-500 shadow-lg" />
            <span className="font-extrabold tracking-widest text-lg">LULU:BOLD</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#shop" className="text-white/80 hover:text-white transition">Shop</a>
            <a href="#lookbook" className="text-white/80 hover:text-white transition">Lookbook</a>
            <a href="#stories" className="text-white/80 hover:text-white transition">Stories</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-2 h-5 w-5 text-[10px] rounded-full bg-white text-black grid place-items-center font-bold">2</span>
            </button>
            <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-3 text-sm">
              <a href="#shop" className="py-2">Shop</a>
              <a href="#lookbook" className="py-2">Lookbook</a>
              <a href="#stories" className="py-2">Stories</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
