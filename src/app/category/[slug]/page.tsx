'use client';

import React from 'react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { CategoryNav } from '@/components/CategoryNav';
import { Footer } from '@/components/Footer';
import { SidebarFilters } from '@/components/SidebarFilters';
import { IncuCard } from '@/components/IncuCard';
import { ChevronRight, Grid, List, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const products = [
  { id: '1', name: 'HatchMaster Pro 100 Digital Fully Automatic Incubator', price: 6499, originalPrice: 10999, rating: 4.8, reviews: 2347, image: '/h-1.png', discount: 41, isBestSeller: true },
  { id: '2', name: 'Solar-Hatch 50 Hybrid Incubator with Battery Backup', price: 8999, originalPrice: 12499, rating: 4.9, reviews: 876, image: '/h-2.png', discount: 28, isBestSeller: true },
  { id: '3', name: 'FarmTech Mini 12 Egg Portable Digital Incubator', price: 2499, originalPrice: 4499, rating: 4.5, reviews: 1240, image: '/h-3.png', discount: 44, isNew: true },
  { id: '4', name: 'IncuPro 500 Industrial Grade Automatic Incubator', price: 45000, originalPrice: 55000, rating: 4.7, reviews: 156, image: '/h-4.png', discount: 18 },
  { id: '5', name: 'EliteHatch 48 Egg Digital Semi-Auto Machine', price: 4299, originalPrice: 6999, rating: 4.4, reviews: 543, image: '/h-1.png', discount: 38 },
  { id: '6', name: 'PoultryPlus 96 Egg Dual Power Smart Incubator', price: 7499, originalPrice: 11999, rating: 4.6, reviews: 312, image: '/h-2.png', discount: 37 },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <CategoryNav />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[12px] font-bold text-neutral-dark/40 uppercase tracking-widest mb-8">
          <span className="hover:text-primary cursor-pointer">Home</span>
          <ChevronRight size={14} />
          <span className="hover:text-primary cursor-pointer">Incubators</span>
          <ChevronRight size={14} />
          <span className="text-primary">{categoryName}</span>
        </div>

        <div className="flex gap-10">
          {/* Filters Sidebar */}
          <SidebarFilters />

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-light">
              <div>
                <h1 className="font-heading text-4xl font-bold text-primary mb-2">
                  {categoryName} Incubators
                </h1>
                <p className="text-sm text-neutral-dark/50">Showing 1–24 of 87 Results</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white rounded-xl border border-neutral-light p-1">
                  <button className="p-2 bg-neutral-light text-primary rounded-lg"><Grid size={18} /></button>
                  <button className="p-2 text-neutral-dark/40 hover:text-primary transition-colors"><List size={18} /></button>
                </div>
                <button className="flex items-center gap-4 bg-white border border-neutral-light px-4 py-2.5 rounded-xl text-sm font-bold text-primary group">
                  Sort By: <span className="text-neutral-dark/60">Relevance</span>
                  <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Active Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["48–100 Eggs", "Free Delivery", "HatchMaster"].map((filter) => (
                <div key={filter} className="flex items-center gap-2 bg-primary/5 text-primary text-[11px] font-black px-3 py-1.5 rounded-lg border border-primary/10 uppercase tracking-wider">
                  {filter}
                  <button className="hover:text-danger">×</button>
                </div>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <IncuCard key={product.id} {...product} />
              ))}
              {/* Repeat some for visual density */}
              {products.map((product) => (
                <IncuCard key={`rep-${product.id}`} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex items-center justify-center gap-4">
              <button className="w-12 h-12 rounded-2xl border border-neutral-light flex items-center justify-center text-neutral-dark/40 hover:text-primary hover:border-primary transition-all">
                 ←
              </button>
              <div className="flex items-center gap-2">
                {[1, 2, 3, "...", 8].map((page, i) => (
                  <button 
                    key={i}
                    className={cn(
                      "w-12 h-12 rounded-2xl font-bold transition-all",
                      page === 1 ? "bg-primary text-white" : "hover:bg-primary/5 text-neutral-dark/60"
                    )}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="w-12 h-12 rounded-2xl border border-neutral-light flex items-center justify-center text-neutral-dark/40 hover:text-primary hover:border-primary transition-all">
                 →
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
