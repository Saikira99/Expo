'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SidebarFilters = () => {
  return (
    <div className="w-[260px] hidden lg:block sticky top-24 self-start space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-primary uppercase tracking-widest text-sm">Filters</h3>
        <button className="text-xs text-neutral-dark/40 font-bold hover:text-primary">Clear All</button>
      </div>

      {/* Category */}
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer group">
          <h4 className="font-heading text-lg font-bold text-primary">Category</h4>
          <ChevronDown size={18} className="text-neutral-dark/40 group-hover:text-primary transition-colors" />
        </div>
        <div className="space-y-3">
          {["Fully Automatic", "Semi-Automatic", "Manual"].map((item) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer group">
              <div className={cn(
                "w-5 h-5 rounded-md border-2 border-neutral-light transition-all",
                item === "Fully Automatic" ? "bg-primary border-primary" : "group-hover:border-primary/30"
              )} />
              <span className="text-sm font-medium text-neutral-dark/70 group-hover:text-primary transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Capacity */}
      <div className="space-y-4 pt-6 border-t border-neutral-light">
        <h4 className="font-heading text-lg font-bold text-primary">Egg Capacity</h4>
        <div className="space-y-3">
          {["Upto 12 Eggs", "12–48 Eggs", "48–100 Eggs", "100–300 Eggs", "300+ Eggs"].map((item) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-md border-2 border-neutral-light group-hover:border-primary/30 transition-all" />
              <span className="text-sm font-medium text-neutral-dark/70 group-hover:text-primary transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4 pt-6 border-t border-neutral-light">
        <h4 className="font-heading text-lg font-bold text-primary">Price Range</h4>
        <div className="px-2">
          <div className="h-1.5 bg-neutral-light rounded-full relative">
            <div className="absolute left-[10%] right-[30%] h-full bg-primary rounded-full" />
            <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md cursor-pointer" />
            <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md cursor-pointer" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-[12px] font-bold text-neutral-dark/50">₹1,000</div>
            <div className="text-[12px] font-bold text-neutral-dark/50">₹50,000</div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-4 pt-6 border-t border-neutral-light">
        <h4 className="font-heading text-lg font-bold text-primary">Customer Rating</h4>
        <div className="space-y-3">
          {[4, 3, 2].map((rating) => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-full border-2 border-neutral-light group-hover:border-primary/30 transition-all" />
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-neutral-dark/70">{rating}★ & Above</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Power Type */}
      <div className="space-y-4 pt-6 border-t border-neutral-light">
        <h4 className="font-heading text-lg font-bold text-primary">Power Type</h4>
        <div className="space-y-3">
          {["Electric Only", "Solar + AC", "Battery Backup", "Dual Power"].map((item) => (
            <label key={item} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-5 h-5 rounded-md border-2 border-neutral-light group-hover:border-primary/30 transition-all" />
              <span className="text-sm font-medium text-neutral-dark/70 group-hover:text-primary transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
