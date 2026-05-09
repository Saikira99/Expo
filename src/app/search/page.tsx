'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { CategoryNav } from '@/components/CategoryNav';
import { Footer } from '@/components/Footer';
import { IncuCard } from '@/components/IncuCard';
import { SidebarFilters } from '@/components/SidebarFilters';

const allProducts = [
  { id: '1', name: 'HatchMaster Pro 100 Digital Fully Automatic Incubator', price: 6499, originalPrice: 10999, rating: 4.8, reviews: 2347, image: '/h-1.png', discount: 41, isBestSeller: true },
  { id: '2', name: 'Solar-Hatch 50 Hybrid Incubator with Battery Backup', price: 8999, originalPrice: 12499, rating: 4.9, reviews: 876, image: '/h-2.png', discount: 28, isBestSeller: true },
  { id: '3', name: 'FarmTech Mini 12 Egg Portable Digital Incubator', price: 2499, originalPrice: 4499, rating: 4.5, reviews: 1240, image: '/h-3.png', discount: 44, isNew: true },
  { id: '4', name: 'IncuPro 500 Industrial Grade Automatic Incubator', price: 45000, originalPrice: 55000, rating: 4.7, reviews: 156, image: '/h-4.png', discount: 18 },
  { id: '5', name: 'EliteHatch 48 Egg Digital Semi-Auto Machine', price: 4299, originalPrice: 6999, rating: 4.4, reviews: 543, image: '/h-1.png', discount: 38 },
  { id: '6', name: 'PoultryPlus 96 Egg Dual Power Smart Incubator', price: 7499, originalPrice: 11999, rating: 4.6, reviews: 312, image: '/h-2.png', discount: 37 },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = allProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <CategoryNav />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-neutral-dark/50">Found {filteredProducts.length} items matching your search</p>
        </div>

        <div className="flex gap-10">
          <SidebarFilters />
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <IncuCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white rounded-[40px] border border-dashed border-neutral-light">
                <div className="text-6xl mb-6">🔍</div>
                <h2 className="text-2xl font-bold text-primary mb-2">No results found</h2>
                <p className="text-neutral-dark/50 mb-8">Try adjusting your keywords or filters</p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
