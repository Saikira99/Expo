'use client';

import React from 'react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-neutral-dark/50">This screen is under construction as part of the implementation plan.</p>
      </main>
      <Footer />
    </div>
  );
}
