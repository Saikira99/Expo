'use client';

import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, ChevronDown, MapPin, Menu, Zap } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { useToast } from './Toast';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const cart = useStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const megaMenuData = [
    {
      title: "By Type",
      items: ["Fully Automatic", "Semi-Automatic", "Manual", "Portable Mini", "Commercial", "Combo Kits"]
    },
    {
      title: "By Capacity",
      items: ["Upto 12 Eggs", "12-48 Eggs", "48-100 Eggs", "100-300 Eggs", "300-500 Eggs", "1000+ Industrial"]
    },
    {
      title: "By Feature",
      items: ["Digital Display", "Auto Egg Turning", "Dual Power", "Transparent Lid", "Built-in Candler", "App Controlled"]
    },
    {
      title: "By Species",
      items: ["Chicken Eggs", "Quail Eggs", "Duck Eggs", "Turkey Eggs", "Ostrich Eggs", "Exotic Birds"]
    }
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b border-neutral-light",
      isScrolled ? "py-2 shadow-lg" : "py-4"
    )}>
      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-neutral-light shadow-2xl z-50 p-12"
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-5 gap-12">
              {megaMenuData.map((col, i) => (
                <div key={i} className="space-y-6">
                  <h3 className="font-heading text-lg font-bold text-primary border-b border-neutral-light pb-2">{col.title}</h3>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="text-sm font-medium text-neutral-dark/60 hover:text-secondary cursor-pointer transition-colors">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div className="bg-accent/30 rounded-3xl p-6 flex flex-col justify-between group">
                <div>
                   <div className="bg-secondary text-primary text-[10px] font-black px-2 py-1 rounded inline-block mb-4">FEATURED DEAL</div>
                   <h4 className="font-heading text-xl font-bold text-primary mb-2">HatchMaster 100</h4>
                   <p className="text-sm text-neutral-dark/50">Get 45% OFF on our best selling automatic incubator.</p>
                </div>
                <Button className="w-full bg-primary text-white mt-4">Shop Now</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-8">
          {/* Logo Area */}
          <Link href="/" className="flex flex-col items-start min-w-max">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-secondary shadow-lg transform -rotate-6">
                <Zap size={24} fill="currentColor" />
              </div>
              <span className="font-heading text-2xl font-bold text-primary tracking-tight">HatchNest</span>
            </div>
            <span className="text-[10px] font-bold text-neutral-dark/30 uppercase tracking-[0.2em] ml-1 hidden md:block">
              Premium Incubation Equipment
            </span>
          </Link>

          {/* Search Area */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative">
            <form action="/search" className="flex w-full items-center bg-neutral-light/50 rounded-2xl p-1.5 border border-transparent focus-within:border-primary/20 focus-within:bg-white transition-all shadow-inner">
              <button 
                type="button"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold flex items-center gap-2 whitespace-nowrap hover:bg-primary/90 transition-all shadow-md"
              >
                Categories <ChevronDown size={16} />
              </button>
              <input 
                name="q"
                type="text" 
                placeholder="Search egg incubators, hatchers..."
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none font-medium"
              />
              <button type="submit" className="w-10 h-10 bg-secondary text-primary rounded-xl flex items-center justify-center hover:bg-secondary/90 transition-all shadow-md">
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden xl:flex items-center gap-2 text-neutral-dark/40 hover:text-primary cursor-pointer transition-colors">
              <MapPin size={18} />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest">Deliver to</span>
                <span className="text-xs font-bold text-primary">Hyderabad 500001</span>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-5">
              <div className="relative cursor-pointer hover:text-primary transition-colors">
                <User className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>

              <div className="relative cursor-pointer hover:text-primary transition-colors">
                <Heart className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>

              <Link href="/cart" className="relative cursor-pointer hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-4 h-4 md:w-5 md:h-5 bg-danger text-white text-[8px] md:text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">
                  {cartCount}
                </span>
              </Link>
            </div>
            
            <button className="lg:hidden p-1 hover:text-primary transition-colors">
              <Search size={22} />
            </button>
            
            <button className="lg:hidden p-1 hover:text-primary transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
