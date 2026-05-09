'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  Star,
  Play
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { CategoryNav } from '@/components/CategoryNav';
import { HeroBanner } from '@/components/HeroBanner';
import { IncuCard } from '@/components/IncuCard';
import { Footer } from '@/components/Footer';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { useToast } from '@/components/Toast';
import { bestSellers, categoryShortcuts, trustBadges } from '@/lib/data';

const letterVariants: Variants = {
  hidden: { y: 120, opacity: 0, scale: 0, rotate: 45, filter: "blur(10px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  })
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [phase, setPhase] = useState('egg');
  const { showToast } = useToast();

  useEffect(() => {
    setMounted(true);
    const timers = [
      setTimeout(() => setPhase('hatch'), 1500),
      setTimeout(() => setPhase('logo'), 1900),
      setTimeout(() => setPhase('complete'), 3800),
      setTimeout(() => setShowSplash(false), 4200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);



  if (!mounted) return <div className="min-h-screen bg-white" />;

  if (!showSplash) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Navbar />
        <CategoryNav />
        
        <main>
          <HeroBanner />

          {/* Category Shortcuts */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-4">
              {categoryShortcuts.map((cat) => (
                <motion.div
                  key={cat.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-3 min-w-[120px] p-6 bg-white rounded-2xl border border-neutral-light shadow-sm cursor-pointer hover:border-secondary transition-colors"
                >
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="text-[12px] font-bold text-neutral-dark uppercase tracking-wider text-center">
                    {cat.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Deal of the Day */}
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="font-heading text-3xl font-bold text-primary">⚡ Deal of the Day</h2>
                <div className="flex items-center gap-2 bg-danger/10 text-danger px-4 py-1.5 rounded-full font-price text-xl">
                  <Clock size={20} />
                  <span>Ends in 04:23:15</span>
                </div>
              </div>
              <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                View All Deals <ChevronRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Featured Deal Card - Improved Styling */}
              <div className="lg:col-span-4">
                <div className="relative h-full bg-white rounded-[2rem] border-2 border-secondary/30 overflow-hidden shadow-2xl p-8 flex flex-col items-center text-center">
                  <div className="absolute top-6 left-6 bg-danger text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-danger/20">
                    EXCLUSIVE DEAL
                  </div>
                  <div className="w-full aspect-square bg-accent/30 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden group">
                     <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute inset-0 flex items-center justify-center font-heading text-primary/5 text-2xl font-black text-center px-4 select-none pointer-events-none"
                     >
                        HATCHMASTER PRO SERIES
                     </motion.div>
                     <div className="relative z-10 w-4/5 h-4/5">
                        <Image src="/h-1.png" alt="Deal" fill className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" />
                     </div>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">HatchMaster Pro 100</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-price text-4xl text-primary font-black">₹5,499</span>
                    <span className="text-lg text-neutral-dark/40 line-through">₹8,999</span>
                    <span className="bg-danger text-white text-[10px] font-bold px-2 py-1 rounded-lg">38% OFF</span>
                  </div>
                  <div className="w-full bg-neutral-light rounded-full h-3 mb-4 p-0.5">
                     <div className="w-[85%] h-full bg-gradient-to-r from-secondary to-orange-400 rounded-full" />
                  </div>
                  <p className="text-[10px] font-black text-neutral-dark/40 mb-8 uppercase tracking-[0.2em]">HURRY! ONLY 7 UNITS LEFT!</p>
                  <Button size="lg" className="w-full h-14 rounded-2xl bg-secondary text-primary hover:bg-secondary/90 shadow-xl shadow-secondary/20 font-black uppercase tracking-widest">
                    Claim Deal Now
                  </Button>
                </div>
              </div>

              {/* Sub Deals Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {bestSellers.map((product) => (
                  <IncuCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </section>

          {/* Trust Badges Strip */}
          <section className="bg-primary/5 py-16 border-y border-neutral-light">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                      <badge.Icon size={32} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{badge.title}</h4>
                      <p className="text-[12px] text-neutral-dark/50">{badge.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Educational Banner - Fixed Contrast & Colors */}
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="bg-gradient-to-br from-[#064E3B] to-[#042F24] rounded-[40px] overflow-hidden relative p-12 md:p-20 text-white group flex flex-col md:flex-row items-center gap-12 shadow-2xl">
              <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[120%] bg-white/5 rotate-12 skew-x-12 pointer-events-none" />
              <div className="relative z-10 max-w-xl text-center md:text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
                >
                  Not sure which incubator matches your farm needs?
                </motion.h2>
                <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto md:ml-0 font-medium">
                  Our expert buying guide breaks down everything from egg capacity tiers 
                  to humidity control features.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                  <Button size="lg" className="bg-[#F59E0B] text-[#064E3B] h-14 px-10 rounded-2xl hover:bg-[#F59E0B]/90 font-black uppercase tracking-widest shadow-xl shadow-[#F59E0B]/20 transition-all hover:scale-105">
                    Read Buying Guide
                  </Button>
                  <button className="flex items-center gap-2 font-black text-white hover:text-[#F59E0B] transition-colors uppercase tracking-widest text-xs">
                    Take the Quiz <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="relative z-10 w-full md:w-1/2 flex justify-center">
                <div className="w-full aspect-[4/3] relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-500 group">
                   <Image src="/guide.png" alt="Guide" fill className="object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/60 to-transparent" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30">
                         <Play size={32} className="text-white fill-white ml-1" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* RESTORING: Interactive Hatching Guide */}
          <section className="max-w-7xl mx-auto px-6 mb-20">
             <div className="bg-primary rounded-[48px] p-10 md:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div className="text-center md:text-left">
                      <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                         Master the Art of <span className="text-secondary">Incubation</span>
                      </h2>
                      <div className="space-y-4 mb-12">
                         {[
                           { day: "Days 1-7", desc: "Setting & Embryo development" },
                           { day: "Days 8-14", desc: "Growth & Blood vessel mapping" },
                           { day: "Days 18-21", desc: "Lockdown & Hatching phase" },
                         ].map((step, i) => (
                           <div key={i} className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                              <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center font-black text-xs shrink-0">
                                 {step.day}
                              </div>
                              <div className="text-white font-bold">{step.desc}</div>
                           </div>
                         ))}
                      </div>
                      <Button size="lg" className="bg-white text-primary hover:bg-neutral-light h-14 px-10 rounded-2xl font-black uppercase tracking-widest">
                         Download PDF Guide
                      </Button>
                   </div>
                   <div className="relative aspect-square">
                      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-[100px]" />
                      <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 p-10 flex flex-col justify-center text-center">
                         <div className="text-[120px] mb-8 animate-float">🐣</div>
                         <h3 className="text-white font-heading text-3xl font-bold mb-4">Day 21: The Hatch</h3>
                         <div className="flex items-center gap-4">
                            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                               <div className="w-[95%] h-full bg-secondary" />
                            </div>
                            <span className="text-white font-black text-[10px]">95% PROGRESS</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* RESTORING: Customer Reviews */}
          <section className="max-w-7xl mx-auto px-6 py-20 bg-neutral-light/30 rounded-[60px] mb-20 text-center">
             <h2 className="font-heading text-4xl font-bold text-primary mb-4">💬 What Our Farmers Say</h2>
             <p className="text-neutral-dark/60 mb-16">Join 50,000+ satisfied customers across India</p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[1, 2, 3].map((i) => (
                  <GlassCard key={i} className="bg-white border-none shadow-xl rounded-3xl p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} className="text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-neutral-dark/70 text-sm italic mb-8">
                      &quot;Got 97% hatch rate in my first batch! The solar backup is a lifesaver in my village.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10" />
                      <div>
                        <div className="font-bold text-primary text-sm">Ramesh Kumar</div>
                        <div className="text-[11px] text-success font-bold">Verified Farmer</div>
                      </div>
                    </div>
                  </GlassCard>
                ))}
             </div>
          </section>

          {/* RESTORING: Hatch Rate Calculator */}
          <section className="max-w-7xl mx-auto px-6 mb-20">
             <div className="bg-white rounded-[48px] border border-neutral-light shadow-2xl p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <div className="flex-1">
                   <h2 className="font-heading text-4xl font-bold text-primary mb-6">🐣 Hatch Rate Calculator</h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-widest text-neutral-dark/40">Egg Species</label>
                         <select className="w-full h-14 bg-neutral-light/50 border border-neutral-light rounded-2xl px-6 font-bold text-primary outline-none">
                            <option>Chicken Eggs (21 Days)</option>
                            <option>Quail Eggs (17 Days)</option>
                         </select>
                      </div>
                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-widest text-neutral-dark/40">Number of Eggs</label>
                         <input type="number" defaultValue="100" className="w-full h-14 bg-neutral-light/50 border border-neutral-light rounded-2xl px-6 font-bold text-primary outline-none" />
                      </div>
                   </div>
                   <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 flex items-center justify-between">
                      <div className="text-3xl font-price font-black text-primary">85–95 Chicks</div>
                      <Button className="rounded-2xl h-14 px-8 bg-primary text-white">Find My Match</Button>
                   </div>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-accent/20 rounded-[40px] flex items-center justify-center text-[120px]">
                   🥚
                </div>
             </div>
          </section>

          {/* Newsletter Section */}
          <section className="max-w-7xl mx-auto px-6 mb-20">
             <div className="bg-secondary rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                   <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Join the HatchNest Community</h2>
                   <p className="text-primary/70 font-medium">Get expert hatching tips and exclusive offers.</p>
                </div>
                <div className="flex w-full md:w-auto bg-white rounded-2xl p-1.5 shadow-xl border border-primary/10">
                   <input type="email" placeholder="Enter your email" className="bg-transparent px-6 py-3 outline-none text-primary flex-1 md:w-64 font-medium" />
                   <Button 
                     className="rounded-xl px-8 h-12 bg-primary text-white"
                     onClick={() => showToast("Subscribed!")}
                   >
                     Subscribe
                   </Button>
                </div>
             </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {phase === 'egg' && (
          <motion.div
            key="egg"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: [1, 1.05, 1], rotate: 0 }}
            exit={{ 
              scale: 2.5, 
              opacity: 0, 
              filter: "blur(40px)", 
              rotate: 20,
              transition: { duration: 0.5, ease: "easeIn" }
            }}
            transition={{ 
              scale: { repeat: Infinity, duration: 0.8, ease: "easeInOut" }
            }}
            className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-secondary to-orange-500 rounded-[45%_45%_50%_50%] shadow-[0_40px_100px_rgba(245,158,11,0.5)] flex items-center justify-center border-b-8 border-black/10"
          >
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
               <Zap className="text-white fill-white" size={64} />
            </motion.div>
          </motion.div>
        )}

        {phase === 'hatch' && (
          <motion.div
            key="hatch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
             {[...Array(24)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ x: 0, y: 0, scale: 1 }}
                 animate={{ 
                   x: Math.cos(i * 15 * Math.PI / 180) * (Math.random() * 400 + 200),
                   y: Math.sin(i * 15 * Math.PI / 180) * (Math.random() * 400 + 200),
                   scale: 0,
                   opacity: 0,
                   rotate: Math.random() * 360
                 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="absolute w-2 h-8 bg-secondary rounded-full blur-[1px]"
               />
             ))}
             <motion.div 
               initial={{ scale: 0, opacity: 1 }}
               animate={{ scale: 4, opacity: 0 }}
               transition={{ duration: 0.5 }}
               className="absolute w-40 h-40 bg-secondary rounded-full blur-3xl"
             />
          </motion.div>
        )}

        {(phase === 'logo' || phase === 'complete') && (
          <motion.div
            key="logo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            className="flex flex-col items-center relative z-10"
          >
            <div className="flex items-center gap-1 md:gap-4 mb-8">
              {"HATCHNEST".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={`text-6xl md:text-[10rem] font-black tracking-tighter select-none ${
                    i > 4 ? "text-primary" : "text-secondary"
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-6"
            >
               <div className="h-[2px] w-12 bg-neutral-light rounded-full" />
               <span className="text-[12px] md:text-sm font-black text-neutral-dark/20 uppercase tracking-[1em]">
                 The Future is Hatching
               </span>
               <div className="h-[2px] w-12 bg-neutral-light rounded-full" />
            </motion.div>

            <motion.div 
               className="absolute inset-0 pointer-events-none mix-blend-overlay"
               initial={{ x: "-100%" }}
               animate={{ x: "200%" }}
               transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
            >
               <div className="w-[150%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -rotate-12" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-[-1]">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-light/20 to-transparent" />
      </div>

      <style jsx global>{`
        body {
          background-color: white !important;
          overflow: ${phase === 'complete' ? 'auto' : 'hidden'} !important;
        }
      `}</style>
    </div>
  );
}
