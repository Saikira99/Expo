'use client';

import React from 'react';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { CategoryNav } from '@/components/CategoryNav';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { Minus, Plus, X, Trash2, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { useToast } from '@/components/Toast';
import Link from 'next/link';

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useStore();
  const { showToast } = useToast();
  
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * 0.41; // Mock discount
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <CategoryNav />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-[12px] font-bold text-neutral-dark/40 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary">Your Shopping Cart</span>
        </div>

        <h1 className="font-heading text-4xl font-bold text-primary mb-12 flex items-center gap-4">
          🛒 My Cart <span className="text-xl text-neutral-dark/40">({cart.length} Items)</span>
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-[40px] p-20 text-center border border-neutral-light shadow-xl">
             <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
                <Trash2 size={40} className="text-primary/20" />
             </div>
             <h2 className="text-2xl font-bold text-primary mb-4">Your cart is empty</h2>
             <p className="text-neutral-dark/50 mb-10">Looks like you haven't added any incubators to your cart yet.</p>
             <Link href="/">
                <Button size="lg" className="rounded-2xl h-14 px-10">Start Shopping</Button>
             </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-[32px] p-6 border border-neutral-light shadow-sm flex flex-col md:flex-row items-center gap-8 relative group">
                  <div className="w-32 h-32 bg-accent/30 rounded-2xl flex items-center justify-center shrink-0">
                     <div className="w-12 h-12 bg-white/50 rounded-full blur-xl" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-xl font-bold text-primary line-clamp-1">{item.name}</h3>
                      <button 
                        onClick={() => {
                          removeFromCart(item.id);
                          showToast("Item removed from cart", "info");
                        }}
                        className="text-neutral-dark/30 hover:text-danger transition-colors p-2"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <p className="text-xs font-bold text-neutral-dark/40 uppercase tracking-widest">Variant: Solar + AC | Qty: {item.quantity}</p>
                    <div className="flex items-baseline gap-3">
                      <span className="font-price text-2xl text-primary font-black">₹{item.price.toLocaleString()}</span>
                      <span className="text-sm text-neutral-dark/40 line-through">₹{(item.price * 1.6).toLocaleString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4">
                       <div className="flex items-center bg-neutral-light/50 rounded-xl p-1">
                          <button 
                            onClick={() => useStore.getState().updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => useStore.getState().updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all"
                          >
                            <Plus size={14} />
                          </button>
                       </div>
                       <button className="text-[11px] font-black uppercase tracking-widest text-primary hover:underline">Save for Later</button>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 hidden group-hover:block">
                     <div className="bg-danger/10 text-danger text-[10px] font-black px-2 py-1 rounded">⚠️ ONLY 2 LEFT</div>
                  </div>
                </div>
              ))}

              <button 
                onClick={() => {
                  clearCart();
                  showToast("Cart cleared", "info");
                }}
                className="text-sm font-bold text-neutral-dark/40 hover:text-danger flex items-center gap-2 ml-auto"
              >
                <Trash2 size={16} /> Clear Cart
              </button>
            </div>

            {/* Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-[40px] p-10 border border-neutral-light shadow-2xl sticky top-24">
                <h3 className="font-heading text-2xl font-bold text-primary mb-8 pb-4 border-b border-neutral-light">Order Summary</h3>
                
                <div className="space-y-6 mb-8">
                   <div className="flex justify-between text-sm">
                      <span className="text-neutral-dark/60">Price ({cart.length} Items)</span>
                      <span className="font-bold">₹{subtotal.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-neutral-dark/60">Discount</span>
                      <span className="font-bold text-success">-₹{discount.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-neutral-dark/60">Delivery Charges</span>
                      <span className="font-bold text-success uppercase">Free</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-neutral-dark/60">Coupon Discount</span>
                      <button className="text-primary font-bold hover:underline">Apply Coupon</button>
                   </div>
                </div>

                <div className="pt-6 border-t-2 border-dashed border-neutral-light mb-8">
                   <div className="flex justify-between items-baseline">
                      <span className="font-heading text-2xl font-bold text-primary">Total Amount</span>
                      <span className="font-price text-4xl text-primary font-black">₹{total.toLocaleString()}</span>
                   </div>
                   <p className="text-[11px] font-bold text-success uppercase tracking-widest mt-2">💰 You save ₹{discount.toLocaleString()} on this order!</p>
                </div>

                <Link href="/order-success">
                  <Button size="lg" className="w-full h-16 rounded-2xl shadow-xl shadow-primary/20 text-sm font-black uppercase tracking-[0.2em] group">
                    Proceed to Checkout
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <div className="mt-8 flex items-center gap-3 text-[11px] font-bold text-neutral-dark/50 justify-center">
                   <ShieldCheck size={16} className="text-success" />
                   <span>Safe & Secure Payments. 100% Authentic Products.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Saved for Later Section */}
        <section className="mt-20">
           <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-2xl font-bold text-primary">Saved for Later (2)</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { id: 'save-1', name: 'Digital Candler Lamp with LED', price: 899, originalPrice: 1499, rating: 4.5, reviews: 120, image: '/h-2.png', discount: 40 },
                { id: 'save-2', name: 'Poultry Humidity Controller V3', price: 1299, originalPrice: 1999, rating: 4.2, reviews: 85, image: '/h-3.png', discount: 35 },
              ].map((item) => (
                <div key={item.id} className="bg-white rounded-[32px] p-6 border border-neutral-light shadow-sm flex flex-col gap-4 group">
                   <div className="aspect-square bg-accent/20 rounded-2xl flex items-center justify-center p-4">
                      <div className="w-12 h-12 bg-white/50 rounded-full blur-xl" />
                   </div>
                   <div>
                      <h3 className="font-heading font-bold text-primary mb-1 line-clamp-1">{item.name}</h3>
                      <div className="flex items-baseline gap-2 mb-4">
                         <span className="font-bold text-primary">₹{item.price}</span>
                         <span className="text-xs text-neutral-dark/40 line-through">₹{item.originalPrice}</span>
                      </div>
                      <div className="flex gap-2">
                         <Button variant="outline" className="flex-1 rounded-xl h-10 text-xs font-bold">Move to Cart</Button>
                         <button className="w-10 h-10 flex items-center justify-center text-neutral-dark/30 hover:text-danger border border-neutral-light rounded-xl transition-all">
                            <Trash2 size={16} />
                         </button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
