'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Button } from './Button';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    title: "Hatch More With India&apos;s #1 Incubator",
    subtitle: "Fully Automatic | Digital Control | 99.2% Hatch Rate",
    cta1: "Shop Now",
    cta2: "Watch Demo",
    badge: "⭐ Bestseller | 4.8/5",
    color: "from-amber-100 to-orange-50",
    image: "/hero-1.png",
  },
  {
    id: 2,
    title: "Power Cuts? No Problem.",
    subtitle: "Solar + Battery Backup Incubators. Hatch 24/7 without electricity.",
    cta1: "Explore Solar",
    cta2: "View Range",
    badge: "⚡ Power Solutions",
    color: "from-green-100 to-emerald-50",
    image: "/hero-2.png",
  },
];

export const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[480px] md:h-[540px] overflow-hidden bg-accent">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[current].color}`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left">
            <div className="z-10 py-10 md:py-0">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur rounded-full text-[11px] md:text-[12px] font-bold text-primary mb-4 md:mb-6 shadow-sm border border-primary/10">
                  <Star size={14} className="text-secondary fill-secondary" />
                  {slides[current].badge}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-primary mb-4 md:mb-6 leading-[1.1]">
                  {slides[current].title.split(" ").map((word, i) => (
                    <span key={i} className={word === "Hatch" || word === "India's" ? "text-secondary" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>
                <p className="text-sm md:text-xl font-medium text-neutral-dark/70 mb-8 md:mb-10 max-w-lg mx-auto md:ml-0">
                  {slides[current].subtitle}
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 shadow-xl shadow-secondary/20 h-12 md:h-14 px-6 md:px-8 rounded-xl md:rounded-2xl group text-sm md:text-base">
                    {slides[current].cta1}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary/20 text-primary h-12 md:h-14 px-6 md:px-8 rounded-xl md:rounded-2xl bg-white/50 backdrop-blur text-sm md:text-base">
                    <Play className="mr-2 fill-primary" size={18} />
                    {slides[current].cta2}
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="hidden md:flex justify-end relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="relative z-10"
              >
                <div className="w-[450px] h-[450px] bg-white/20 backdrop-blur-xl rounded-[60px] shadow-2xl relative overflow-hidden border border-white/30 p-2 group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <Image 
                      src={slides[current].image} 
                      alt="Incubator" 
                      fill
                      className="object-cover rounded-[50px] transform group-hover:scale-105 transition-transform duration-700"
                   />
                   
                   <div className="absolute bottom-10 -left-10 bg-white/80 backdrop-blur p-4 rounded-3xl shadow-xl border border-white/50 animate-float">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center text-success">
                            <ShieldCheck size={20} />
                         </div>
                         <div>
                            <div className="text-[10px] font-black uppercase text-neutral-dark/40">Verified</div>
                            <div className="text-[12px] font-bold text-primary">High Hatch Rate</div>
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === i ? "w-8 bg-primary" : "w-2 bg-primary/20"
            )}
          />
        ))}
      </div>
    </section>
  );
};
