'use client';

import React from 'react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  User, Package, Heart, MapPin, CreditCard, 
  Settings, LogOut, Bell, Award, ChevronRight, 
  Zap, Clock, CheckCircle2 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AccountPage() {
  const menuItems = [
    { icon: Package, label: "My Orders", count: 3 },
    { icon: Heart, label: "Wishlist", count: 12 },
    { icon: MapPin, label: "My Addresses", count: 2 },
    { icon: CreditCard, label: "Saved Cards & UPI", count: 1 },
    { icon: Award, label: "My Coupons & Rewards", count: 5 },
    { icon: Bell, label: "Notifications", count: 2 },
    { icon: Settings, label: "Account Settings", count: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[40px] p-10 border border-neutral-light shadow-2xl sticky top-24">
              <div className="flex items-center gap-6 mb-10 pb-10 border-b border-neutral-light">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary border-4 border-white shadow-xl">
                  <User size={40} />
                </div>
                <div>
                  <h1 className="font-heading text-2xl font-bold text-primary">Ramesh Kumar</h1>
                  <p className="text-sm text-neutral-dark/40 font-bold uppercase tracking-widest">Premium Farmer</p>
                </div>
              </div>

              <div className="space-y-2">
                {menuItems.map((item, i) => (
                  <button 
                    key={i}
                    className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-neutral-light/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-light flex items-center justify-center text-neutral-dark/40 group-hover:bg-primary group-hover:text-white transition-all">
                        <item.icon size={20} />
                      </div>
                      <span className="font-bold text-primary">{item.label}</span>
                    </div>
                    {item.count ? (
                      <span className="bg-secondary text-primary text-[10px] font-black px-2 py-1 rounded-md">{item.count}</span>
                    ) : (
                      <ChevronRight size={16} className="text-neutral-dark/20" />
                    )}
                  </button>
                ))}
                
                <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-danger hover:bg-danger/5 transition-all mt-4 font-bold">
                  <LogOut size={20} />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {/* Dashboard Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                 {[
                   { label: "Coins Earned", val: "450", icon: Zap, color: "text-secondary" },
                   { label: "Orders Placed", val: "12", icon: Package, color: "text-primary" },
                   { label: "Active Subscriptions", val: "2", icon: Award, color: "text-success" },
                 ].map((stat, i) => (
                   <div key={i} className="bg-white rounded-3xl p-8 border border-neutral-light shadow-sm">
                      <stat.icon size={24} className={stat.color + " mb-4"} />
                      <div className="text-3xl font-price font-black text-primary">{stat.val}</div>
                      <div className="text-xs font-bold text-neutral-dark/40 uppercase tracking-widest">{stat.label}</div>
                   </div>
                 ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-[40px] p-10 border border-neutral-light shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-heading text-2xl font-bold text-primary">Recent Orders</h2>
                  <button className="text-primary font-bold text-sm hover:underline">View All</button>
                </div>

                <div className="space-y-6">
                  {[
                    { id: "HN-82736", name: "HatchMaster Pro 100", date: "09 May 2025", status: "In Transit", icon: Truck },
                    { id: "HN-82712", name: "Digital Candler Lamp", date: "02 May 2025", status: "Delivered", icon: CheckCircle2 },
                  ].map((order, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-[32px] border border-neutral-light hover:border-primary/20 transition-all">
                       <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center text-primary">
                          <Package size={32} />
                       </div>
                       <div className="flex-1 text-center md:text-left">
                          <div className="text-xs font-bold text-neutral-dark/40 uppercase tracking-widest mb-1">Order {order.id}</div>
                          <h3 className="font-heading font-bold text-primary text-lg mb-1">{order.name}</h3>
                          <p className="text-sm text-neutral-dark/60 font-medium">Placed on {order.date}</p>
                       </div>
                       <div className="flex flex-col items-center md:items-end gap-2">
                          <div className={cn(
                            "flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold",
                            order.status === "In Transit" ? "bg-primary text-white" : "bg-success/10 text-success"
                          )}>
                             <order.icon size={14} />
                             {order.status}
                          </div>
                          <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Track Package</button>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Account Security */}
              <div className="bg-primary rounded-[40px] p-10 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                 <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                       <h2 className="font-heading text-3xl font-bold mb-2">Account Security</h2>
                       <p className="text-white/60 font-medium max-w-md">Your account is currently protected with two-factor authentication.</p>
                    </div>
                    <button className="bg-white text-primary px-8 py-3 rounded-2xl font-bold hover:bg-neutral-light transition-all whitespace-nowrap">
                       Manage Security
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
