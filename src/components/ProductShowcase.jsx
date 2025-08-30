import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Pulse Legging 2.0',
    color: 'Fuchsia Heat',
    price: '$118',
    img: 'https://images.unsplash.com/photo-1617551307407-2d536f2a9f66?q=80&w=1200&auto=format&fit=crop',
    badge: 'New',
  },
  {
    title: 'AeroFlex Jacket',
    color: 'Electric Moss',
    price: '$198',
    img: 'https://images.unsplash.com/photo-1596357395104-2183b0c25d4b?q=80&w=1200&auto=format&fit=crop',
    badge: 'Limited',
  },
  {
    title: 'Kinetic Tank',
    color: 'Obsidian',
    price: '$68',
    img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Tempo Short 7"',
    color: 'Hyper Blue',
    price: '$78',
    img: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Studio Bomber',
    color: 'Night Iris',
    price: '$248',
    img: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1200&auto=format&fit=crop',
    badge: 'Recycled',
  },
  {
    title: 'Flow Bra',
    color: 'Crimson Pop',
    price: '$58',
    img: 'https://images.unsplash.com/photo-1581009137042-c552e4856971?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductShowcase() {
  return (
    <section id="shop" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-black">Featured Gear</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider bg-white text-black px-3 py-1 rounded-full font-bold">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-white/80 text-sm">{p.price}</span>
                </div>
                <p className="text-white/60 text-sm mt-1">{p.color}</p>
                <button className="mt-4 w-full rounded-lg bg-white text-black py-2 font-semibold hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-rose-500 hover:text-white transition">
                  Add to bag
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
