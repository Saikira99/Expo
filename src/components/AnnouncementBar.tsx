'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "🚚 Free Shipping on orders above ₹5,000 | Use code: HATCH10 for 10% OFF",
  "⭐ 99.2% Hatch Rate Guaranteed with our Pro Series",
  "☀️ Go Solar! New Solar-Powered range now available",
];

export const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white h-8 md:h-9 flex items-center justify-center relative overflow-hidden px-10 md:px-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] md:text-[13px] font-medium text-center line-clamp-1"
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 md:right-4 hover:opacity-70 transition-opacity"
      >
        <X className="w-3.5 h-3.5 md:w-4 md:h-4" />
      </button>
    </div>
  );
};
