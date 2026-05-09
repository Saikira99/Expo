'use client';

import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const categories = [
  { name: "Fully Automatic", icon: "🥚" },
  { name: "Semi-Automatic", icon: "⚙️" },
  { name: "Solar Powered", icon: "☀️" },
  { name: "Candling Lamps", icon: "🔬" },
  { name: "Humidity Controllers", icon: "💧" },
  { name: "Spare Parts", icon: "📦" },
  { name: "Industrial", icon: "🏭" },
  { name: "New Arrivals", icon: "🆕" },
];

export const CategoryNav = () => {
  return (
    <div className="bg-primary text-white py-2.5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
          <button className="flex items-center gap-2 font-bold text-[13px] min-w-max hover:text-secondary transition-colors group">
            <Menu size={18} />
            All Categories
            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          
          <div className="h-4 w-[1px] bg-white/20 hidden md:block" />

          <div className="flex items-center gap-6 md:gap-8">
            {categories.map((cat) => (
              <Link 
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ /g, '-')}`}
                className="flex items-center gap-2 text-[13px] font-medium min-w-max hover:text-secondary transition-colors relative group py-1"
              >
                <span>{cat.icon}</span>
                {cat.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
