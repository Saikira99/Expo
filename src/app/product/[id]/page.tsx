'use client';

import React, { useState } from 'react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { CategoryNav } from '@/components/CategoryNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { 
  ChevronRight, Star, Heart, Share2, ShieldCheck, Truck, 
  RotateCcw, Award, CheckCircle2, Minus, Plus, Zap, Eye, Play
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useStore } from '@/store/useStore';
import { useToast } from '@/components/Toast';
import { IncuCard } from '@/components/IncuCard';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { showToast } = useToast();

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
          <span className="text-primary">HatchMaster Pro 100</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left: Gallery (45%) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-square bg-white rounded-[32px] border border-neutral-light overflow-hidden group">
              <div className="absolute top-4 left-4 z-10 bg-danger text-white text-[11px] font-black px-3 py-1.5 rounded-lg shadow-lg">
                ⚡ 38% OFF
              </div>
              <div className="absolute top-4 right-4 z-10 bg-success/10 text-success text-[10px] font-black px-3 py-1.5 rounded-lg border border-success/20 flex items-center gap-1 uppercase tracking-widest">
                <CheckCircle2 size={12} /> Assured Quality
              </div>
              
              {/* Product Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center p-16">
                 <div className="w-full h-full bg-accent/30 rounded-[40px] shadow-inner flex items-center justify-center relative animate-float">
                    <Zap size={80} className="text-primary/10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                 </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
                 <button className="w-10 h-10 bg-white/80 backdrop-blur rounded-xl shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all"><Eye size={20} /></button>
                 <button className="w-10 h-10 bg-white/80 backdrop-blur rounded-xl shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all"><Play size={20} fill="currentColor" /></button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={cn(
                  "w-20 h-20 bg-white rounded-2xl border-2 shrink-0 cursor-pointer transition-all",
                  i === 1 ? "border-primary shadow-lg" : "border-neutral-light hover:border-primary/20"
                )}>
                  <div className="w-full h-full bg-accent/20 rounded-xl m-0 flex items-center justify-center">
                    <Zap size={24} className="text-primary/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info (55%) */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-bold text-secondary uppercase tracking-[0.2em]">HatchMaster Pro</span>
                <div className="flex items-center gap-4">
                  <button className="text-neutral-dark/40 hover:text-danger transition-colors"><Heart size={20} /></button>
                  <button className="text-neutral-dark/40 hover:text-primary transition-colors"><Share2 size={20} /></button>
                </div>
              </div>
              <h1 className="font-heading text-4xl font-bold text-primary mb-4 leading-tight">
                HatchMaster Pro 100 Egg Digital Fully Automatic Incubator with 
                Auto-Turning & Humidity Control
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={cn(i < 4 ? "text-secondary fill-secondary" : "text-neutral-light fill-neutral-light")} />
                  ))}
                </div>
                <span className="text-sm font-bold text-neutral-dark/60">4.4 (2,347 Ratings | 876 Reviews)</span>
              </div>
            </div>

            <div className="p-8 bg-primary/5 rounded-[32px] border border-primary/10 mb-8">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-price text-5xl text-primary font-black">₹6,499</span>
                <span className="text-xl text-neutral-dark/40 line-through font-medium">₹10,999</span>
                <span className="text-lg text-danger font-black uppercase tracking-wider">Save 41%</span>
              </div>
              <p className="text-xs text-neutral-dark/50 font-bold uppercase tracking-widest mb-6">Inclusive of all taxes</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-secondary/20 text-secondary p-1 rounded-md"><Award size={16} /></div>
                  <span className="font-bold text-primary">Bank Offer:</span>
                  <span className="text-neutral-dark/70">Extra 5% OFF on HDFC/ICICI Cards</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                   <div className="bg-primary/10 text-primary p-1 rounded-md"><Zap size={16} /></div>
                   <span className="font-bold text-primary">EMI:</span>
                   <span className="text-neutral-dark/70">No Cost EMI starts at ₹542/month</span>
                </div>
              </div>
            </div>

            {/* Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-neutral-dark/50">Capacity</label>
                <div className="flex flex-wrap gap-2">
                  {["48 Eggs", "100 Eggs", "200 Eggs"].map((cap) => (
                    <button key={cap} className={cn(
                      "px-6 py-2.5 rounded-xl text-sm font-bold border-2 transition-all",
                      cap === "100 Eggs" ? "border-primary bg-primary text-white shadow-lg" : "border-neutral-light text-neutral-dark hover:border-primary/30"
                    )}>
                      {cap}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-neutral-dark/50">Power Type</label>
                <div className="flex flex-wrap gap-2">
                   {["Electric", "Solar + AC"].map((p) => (
                    <button key={p} className={cn(
                      "px-6 py-2.5 rounded-xl text-sm font-bold border-2 transition-all",
                      p === "Solar + AC" ? "border-primary bg-primary text-white shadow-lg" : "border-neutral-light text-neutral-dark hover:border-primary/30"
                    )}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Qty and CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
               <div className="flex items-center bg-white border border-neutral-light rounded-2xl p-1 shadow-sm">
                  <button onClick={() => setQty(Math.max(1, qty-1))} className="w-12 h-12 flex items-center justify-center text-primary hover:bg-neutral-light rounded-xl transition-all"><Minus size={18} /></button>
                  <span className="w-12 text-center font-bold text-lg">{qty}</span>
                  <button onClick={() => setQty(qty+1)} className="w-12 h-12 flex items-center justify-center text-primary hover:bg-neutral-light rounded-xl transition-all"><Plus size={18} /></button>
               </div>
               <div className="flex-1 flex gap-4 w-full">
                  <Button 
                    size="lg" 
                    className="flex-1 h-14 rounded-2xl shadow-xl shadow-primary/20 uppercase font-black tracking-widest"
                    onClick={() => {
                      useStore.getState().addToCart({
                        id: params.id,
                        name: "HatchMaster Pro 100 Egg Digital",
                        price: 6499,
                        quantity: qty,
                        image: "/h-1.png"
                      });
                      showToast("Added to cart successfully!");
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="flex-1 h-14 rounded-2xl shadow-xl shadow-secondary/20 uppercase font-black tracking-widest"
                    onClick={() => {
                      useStore.getState().addToCart({
                        id: params.id,
                        name: "HatchMaster Pro 100 Egg Digital",
                        price: 6499,
                        quantity: qty,
                        image: "/h-1.png"
                      });
                      window.location.href = "/cart";
                    }}
                  >
                    Buy Now
                  </Button>
               </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-neutral-light/50 rounded-3xl border border-neutral-light">
               {[
                 { icon: RotateCcw, text: "7-Day Return" },
                 { icon: ShieldCheck, text: "1-Yr Warranty" },
                 { icon: Truck, text: "Free Shipping" },
                 { icon: Award, text: "Certified" },
               ].map((badge, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 text-center">
                    <badge.icon size={20} className="text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-dark/60">{badge.text}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Frequently Bought Together */}
        <section className="mb-20 p-10 bg-white rounded-[40px] border border-neutral-light shadow-xl overflow-hidden relative">
           <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
           <h2 className="font-heading text-2xl font-bold text-primary mb-10 flex items-center gap-2">
              <Zap className="text-secondary fill-secondary" size={20} />
              Frequently Bought Together
           </h2>
           
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex items-center gap-6">
                 {[
                   { name: "HatchMaster Pro 100", price: 6499, image: "/h-1.png" },
                   { name: "Digital Candler Lamp", price: 899, image: "/h-2.png" },
                   { name: "Hygrometer Pro", price: 499, image: "/h-3.png" },
                 ].map((item, i) => (
                   <React.Fragment key={i}>
                      <div className="flex flex-col items-center gap-4 text-center">
                         <div className="w-24 h-24 bg-accent/20 rounded-2xl flex items-center justify-center p-4">
                            <div className="w-10 h-10 bg-white/50 rounded-full blur-xl" />
                         </div>
                         <div className="max-w-[100px]">
                            <div className="text-[10px] font-black uppercase text-neutral-dark/30 mb-1">{item.name}</div>
                            <div className="font-bold text-primary">₹{item.price}</div>
                         </div>
                      </div>
                      {i < 2 && <Plus className="text-neutral-dark/20" size={20} />}
                   </React.Fragment>
                 ))}
              </div>

              <div className="md:ml-auto md:pl-10 md:border-l border-neutral-light flex flex-col items-center md:items-start text-center md:text-left gap-4">
                 <div>
                    <div className="text-sm font-bold text-neutral-dark/50">Total for all 3:</div>
                    <div className="font-price text-4xl text-primary font-black">₹7,897</div>
                    <div className="text-xs font-bold text-success uppercase tracking-widest">You Save ₹1,400!</div>
                 </div>
                 <Button className="rounded-xl px-8 h-12 shadow-lg shadow-primary/20">Add All 3 to Cart</Button>
              </div>
           </div>
        </section>

        {/* Tabs Section */}
        <div className="mb-20">
           <div className="flex items-center gap-8 border-b border-neutral-light mb-10 overflow-x-auto no-scrollbar">
              {['Description', 'Specifications', 'How to Use', 'FAQ', 'Reviews'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={cn(
                    "pb-6 text-sm font-black uppercase tracking-[0.2em] relative transition-all whitespace-nowrap",
                    activeTab === tab.toLowerCase() ? "text-primary" : "text-neutral-dark/30 hover:text-primary/60"
                  )}
                >
                  {tab}
                  {activeTab === tab.toLowerCase() && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
                  )}
                </button>
              ))}
           </div>

           <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl border border-neutral-light">
              {activeTab === 'description' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                   <div>
                      <h2 className="font-heading text-4xl font-bold text-primary mb-8">Achieve Industry-Leading Hatch Rates</h2>
                      <p className="text-neutral-dark/70 text-lg mb-8 leading-relaxed">
                        The HatchMaster Pro 100 is engineered for farmers who demand precision and reliability. 
                        With its advanced micro-computer controlled temperature and humidity management, 
                        you can rest assured that your flock is in safe hands.
                      </p>
                      <ul className="space-y-4">
                        {[
                          "Precise Digital Temp Control (±0.1°C)",
                          "Auto-Humidity Regulation with built-in sensors",
                          "45° Bi-directional Automatic Egg Turning",
                          "Emergency Solar Power Backup Ready",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-primary">
                             <div className="w-5 h-5 rounded-full bg-success/20 text-success flex items-center justify-center"><CheckCircle2 size={14} /></div>
                             {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="bg-accent rounded-3xl h-[400px] flex items-center justify-center overflow-hidden">
                      <div className="w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse-slow" />
                      <div className="absolute font-heading text-primary/10 text-6xl font-black rotate-12">HATCH-PRO</div>
                   </div>
                </div>
              )}
           </div>
        </div>
         {/* Related Products */}
         <section className="mt-20 mb-20">
            <div className="flex items-center justify-between mb-10">
               <h2 className="font-heading text-3xl font-bold text-primary">Farmers also bought</h2>
               <button className="text-primary font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { id: '2', name: 'Solar-Hatch 50 Hybrid Incubator', price: 8999, originalPrice: 12499, rating: 4.9, reviews: 876, image: '/h-2.png', discount: 28 },
                 { id: '3', name: 'FarmTech Mini 12 Egg Portable', price: 2499, originalPrice: 4499, rating: 4.5, reviews: 1240, image: '/h-3.png', discount: 44 },
                 { id: '4', name: 'IncuPro 500 Industrial Grade', price: 45000, originalPrice: 55000, rating: 4.7, reviews: 156, image: '/h-4.png', discount: 18 },
                 { id: '1', name: 'HatchMaster Pro 100 Digital', price: 6499, originalPrice: 10999, rating: 4.8, reviews: 2347, image: '/h-1.png', discount: 41 },
               ].map((product) => (
                 <IncuCard key={product.id} {...product} />
               ))}
            </div>
         </section>
      </main>

      <Footer />
    </div>
  );
}
