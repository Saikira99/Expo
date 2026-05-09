import { ShieldCheck, Truck, Award, Users } from 'lucide-react';

export const bestSellers = [
  {
    id: '1',
    name: 'HatchMaster Pro 100 Digital Fully Automatic Incubator',
    price: 6499,
    originalPrice: 10999,
    rating: 4.8,
    reviews: 2347,
    image: '/h-1.png',
    discount: 41,
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Solar-Hatch 50 Hybrid Incubator with Battery Backup',
    price: 8999,
    originalPrice: 12499,
    rating: 4.9,
    reviews: 876,
    image: '/h-2.png',
    discount: 28,
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'FarmTech Mini 12 Egg Portable Digital Incubator',
    price: 2499,
    originalPrice: 4499,
    rating: 4.5,
    reviews: 1240,
    image: '/h-3.png',
    discount: 44,
    isNew: true,
  },
  {
    id: '4',
    name: 'IncuPro 500 Industrial Grade Automatic Incubator',
    price: 45000,
    originalPrice: 55000,
    rating: 4.7,
    reviews: 156,
    image: '/h-4.png',
    discount: 18,
  },
];

export const categoryShortcuts = [
  { name: "Fully Auto", icon: "🥚" },
  { name: "Semi Auto", icon: "⚙️" },
  { name: "Solar Series", icon: "☀️" },
  { name: "Mini Portable", icon: "🐦" },
  { name: "Industrial", icon: "🏭" },
  { name: "Candlers", icon: "🔦" },
  { name: "Controllers", icon: "💧" },
  { name: "Spare Parts", icon: "📦" },
];

export const trustBadges = [
  { Icon: ShieldCheck, title: "100% Genuine", sub: "Direct from Brands" },
  { Icon: Truck, title: "Pan-India Delivery", sub: "Express Shipping Available" },
  { Icon: Award, title: "1-Year Warranty", sub: "On all Machines" },
  { Icon: Users, title: "Expert Support", sub: "24/7 Farmer Assistance" },
];
