import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-56 -left-32 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500 blur-[140px]" />
        <div className="absolute top-10 right-0 h-[32rem] w-[32rem] rounded-full bg-emerald-500 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[34rem] w-[34rem] rounded-full bg-sky-500 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-white/70 text-xs sm:text-sm mb-6"
        >
          New drop — SS25 Performance Couture
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05]"
        >
          Move Loud. Breathe Free. Be Unapologetic.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 max-w-2xl text-white/80"
        >
          Performance gear engineered for kinetic expression. Precision fabrics, audacious color, and silhouettes that flex with your rhythm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#shop"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-rose-500 hover:text-white transition"
          >
            Shop the Drop
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#lookbook"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white/90 hover:border-white hover:text-white transition"
          >
            Explore Lookbook
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {['4-Way Stretch','Seamless','Ultra-Breathable','Sweat Wicking','Recycled','Studio to Street'].map((f) => (
            <div key={f} className="text-[11px] sm:text-xs tracking-wider uppercase text-center border border-white/10 py-3 rounded-lg bg-white/5">
              {f}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
