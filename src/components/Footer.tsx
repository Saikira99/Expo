'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Camera, Play, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-primary font-bold text-2xl rotate-12">
                  HN
                </div>
                <span className="font-heading text-3xl font-bold text-white">HatchNest</span>
              </div>
              <span className="text-[11px] text-white/60 font-medium tracking-tight mt-1">
                &quot;Hatch More. Lose Less. Earn More.&quot;
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              India&apos;s most trusted provider of premium egg incubation equipment. We help farmers achieve industry-leading hatch rates.
            </p>
            <div className="flex items-center gap-4">
              {[MessageCircle, Camera, Play].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-8">Help & Support</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {["FAQ", "Track Order", "Returns & Refunds", "Warranty Claims", "Contact Support"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-secondary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {["Fully Automatic", "Solar Incubators", "Candling Lamps", "Spare Parts", "Industrial Range"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-secondary transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-xl font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-secondary shrink-0" />
                <div>
                  <div className="font-bold text-white">Call Us</div>
                  <div>+91 80000 XXXXX</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-secondary shrink-0" />
                <div>
                  <div className="font-bold text-white">Email Us</div>
                  <div>support@hatchnest.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary shrink-0" />
                <div>
                  <div className="font-bold text-white">Our Location</div>
                  <div>Hyderabad, Telangana, India</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/50">
            © 2025 HatchNest Pro. All Rights Reserved | Privacy Policy | Terms of Use | Sitemap
          </p>
          <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Payment Icons Placeholder */}
            <div className="text-[10px] font-black uppercase tracking-widest flex gap-4">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>UPI</span>
              <span>GPay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
