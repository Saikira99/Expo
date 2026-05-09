'use client';

import React, { useEffect } from 'react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { CheckCircle2, Package, Truck, Calendar } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';

export default function OrderSuccessPage() {
  const clearCart = useStore((state) => state.clearCart);

  useEffect(() => {
    // Clear cart on success page load
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-20 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[40px] shadow-2xl p-12 border border-neutral-light overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-success" />
          
          <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          
          <h1 className="font-heading text-4xl font-bold text-primary mb-4">Order Successful!</h1>
          <p className="text-neutral-dark/60 text-lg mb-10">
            Thank you for shopping with HatchNest. Your order #HN-82736 has been placed successfully.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Package, label: "Order Status", val: "Confirmed" },
              { icon: Calendar, label: "Est. Delivery", val: "12 May 2025" },
              { icon: Truck, label: "Shipping Method", val: "Express" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-neutral-light/50 rounded-3xl border border-neutral-light">
                <item.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-[10px] font-black uppercase text-neutral-dark/40 mb-1">{item.label}</div>
                <div className="font-bold text-primary">{item.val}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-2xl h-14 px-10" onClick={() => window.location.href = '/'}>
              Continue Shopping
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl h-14 px-10">
              Track My Order
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
