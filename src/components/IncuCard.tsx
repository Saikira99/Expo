'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingCart, Eye, Zap, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';
import { useToast } from './Toast';

interface IncuCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  discount: number;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const IncuCard: React.FC<IncuCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  discount,
  isBestSeller,
  isNew,
}) => {
  const addToCart = useStore((state) => state.addToCart);
  const { showToast } = useToast();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl border border-neutral-light overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {discount > 0 && (
          <div className="bg-danger text-white text-[11px] font-black px-2 py-1 rounded-md shadow-sm uppercase tracking-wider">
            {discount}% OFF
          </div>
        )}
        {isBestSeller && (
          <div className="bg-secondary text-primary text-[10px] font-black px-2 py-1 rounded-md shadow-sm uppercase tracking-wider flex items-center gap-1">
            <Zap size={10} fill="currentColor" />
            Bestseller
          </div>
        )}
        {isNew && (
          <div className="bg-success text-white text-[10px] font-black px-2 py-1 rounded-md shadow-sm uppercase tracking-wider">
            New Arrival
          </div>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-neutral-dark hover:text-danger hover:bg-white transition-all shadow-sm">
        <Heart size={18} strokeWidth={2} />
      </button>

      {/* Image Area */}
      <Link href={`/product/${id}`} className="relative aspect-square overflow-hidden bg-accent/30 flex items-center justify-center p-6 group cursor-pointer">
        <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover rounded-2xl"
          />
          {/* 3D Glass Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
        </div>
        
        {/* Shadow under image for depth */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/10 blur-xl rounded-full" />
        
        {/* Quick View Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/20 to-transparent">
          <Button className="w-full bg-white text-primary hover:bg-neutral-light text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-2">
            <Eye size={14} />
            Quick View
          </Button>
        </div>
      </Link>

      {/* Info Area */}
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={cn(
                i < Math.floor(rating) ? "text-secondary fill-secondary" : "text-neutral-light fill-neutral-light"
              )} 
            />
          ))}
          <span className="text-[11px] text-neutral-dark/50 font-bold ml-1">({reviews})</span>
        </div>

        <Link href={`/product/${id}`}>
          <h3 className="font-heading text-lg font-bold text-primary mb-2 line-clamp-2 leading-snug min-h-[3rem] hover:text-secondary transition-colors cursor-pointer">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <span className="font-price text-2xl text-primary font-black">₹{price.toLocaleString()}</span>
          <span className="text-sm text-neutral-dark/40 line-through">₹{originalPrice.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-success font-bold mb-5">
          <ShieldCheck size={14} />
          <span>FREE Delivery by Tomorrow</span>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="primary" 
            className="flex-1 rounded-xl h-10 text-xs font-black uppercase tracking-wider"
            onClick={() => {
              addToCart({ id, name, price, quantity: 1, image });
              showToast(`${name.slice(0, 20)}... added to cart!`);
            }}
          >
            Add to Cart
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 rounded-xl border-neutral-light hover:bg-neutral-light">
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
