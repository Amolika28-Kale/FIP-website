"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0c10] text-slate-400 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">

          {/* BRAND ARCHITECTURE */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-amber-500/50 flex items-center justify-center">
                <span className="text-[10px] font-bold text-amber-500 font-serif">F</span>
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                FIP<span className="text-amber-500">.</span>
              </span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed font-light uppercase tracking-wider">
              Bespoke capital structures and high-yield asset acquisition for the institutional investor.
            </p>
          </div>

          {/* CORE SECTORS */}
          <div>
            <h3 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-8">Core Sectors</h3>
            <ul className="space-y-4 text-xs md:text-sm">
              <FooterLink label="Finance Solutions" to="/finance" />
              <FooterLink label="Yield Portfolios" to="/investments" />
              <FooterLink label="Property Advisory" to="/property" />
              <FooterLink label="Our Philosophy" to="/about" />
            </ul>
          </div>

          {/* CAPITAL INSTRUMENTS */}
          <div>
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Instruments</h3>
            <ul className="space-y-4 text-xs md:text-sm">
              <li className="flex items-center gap-2 group cursor-default">
                <span className="w-1 h-1 bg-white/20 group-hover:bg-amber-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">Corporate Equity</span>
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <span className="w-1 h-1 bg-white/20 group-hover:bg-amber-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">Asset Liquidity</span>
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <span className="w-1 h-1 bg-white/20 group-hover:bg-amber-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">Trade Finance</span>
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <span className="w-1 h-1 bg-white/20 group-hover:bg-amber-500 transition-colors" />
                <span className="group-hover:text-white transition-colors">Tactical Growth</span>
              </li>
            </ul>
          </div>

          {/* GLOBAL CONTACT */}
          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8">Inquiries</h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 group">
                <MapPin size={14} className="text-amber-500 shrink-0" />
                <span className="group-hover:text-white transition-colors leading-relaxed uppercase tracking-tighter">
                  Executive Suite 402, Financial District,<br />International Wealth Center
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone size={14} className="text-amber-500 shrink-0" />
                <span className="group-hover:text-white transition-colors">+91 (Protocol) 0000 000 000</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail size={14} className="text-amber-500 shrink-0" />
                <span className="group-hover:text-white transition-colors">advisory@fipwealth.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p className="text-slate-600 text-center md:text-left">
            © {currentYear} FIP INSTITUTIONAL — STRATEGIC WEALTH MANAGEMENT.
          </p>
          <div className="flex items-center gap-8">
            <span className="hover:text-amber-500 cursor-pointer transition-colors">Privacy Protocol</span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">Terms of Engagement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterLink({ label, to }) {
  return (
    <li>
      <Link 
        to={to} 
        className="flex items-center justify-between group text-slate-400 hover:text-white transition-all duration-300"
      >
        <span className="group-hover:translate-x-1 transition-transform uppercase tracking-widest text-[10px] md:text-xs">
          {label}
        </span>
        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:text-amber-500 transition-all" />
      </Link>
    </li>
  );
}