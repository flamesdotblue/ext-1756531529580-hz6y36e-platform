import React from 'react';
import { motion } from 'framer-motion';

const looks = [
  {
    img: 'https://images.unsplash.com/photo-1548778943-5dde6c1b92a2?q=80&w=1600&auto=format&fit=crop',
    title: 'Chromatic Heat',
    tag: 'City Run',
  },
  {
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop',
    title: 'Night Shift',
    tag: 'Studio',
  },
  {
    img: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?q=80&w=1600&auto=format&fit=crop',
    title: 'Hyper Blue',
    tag: 'Court',
  },
  {
    img: 'https://images.unsplash.com/photo-1542996966-2e31c00bae83?q=80&w=1600&auto=format&fit=crop',
    title: 'Soft Focus',
    tag: 'Lounge',
  },
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="relative py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-black">Lookbook</h2>
          <span className="text-sm text-white/70">SS25. Shot in Tokyo at dawn.</span>
        </div>

        <div className="no-scrollbar overflow-x-auto">
          <div className="flex gap-6 min-w-full">
            {looks.map((l, i) => (
              <motion.figure
                key={l.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="relative shrink-0 w-[82%] sm:w-[48%] lg:w-[32%] rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="aspect-[4/5]">
                  <img src={l.img} alt={l.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="p-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-white/60">{l.tag}</div>
                    <div className="font-semibold text-lg">{l.title}</div>
                  </div>
                  <a href="#" className="text-sm underline underline-offset-4 decoration-white/30 hover:decoration-white">Shop the look</a>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] uppercase tracking-wider text-white/60">
          {['Sculpt Knit','Featherweight','All-Condition','Reflective','Bonded Seams','Anti-odor','Core Support','CloudTouch'].map((tag) => (
            <div key={tag} className="border border-white/10 text-center rounded-lg py-2 bg-white/5">{tag}</div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-block rounded-full border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-black transition">See the full editorial</a>
        </div>
      </div>
    </section>
  );
}
