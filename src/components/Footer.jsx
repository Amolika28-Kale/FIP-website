"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f6f9fc] text-slate-600 border-t border-slate-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">

          {/* BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-sky-400 flex items-center justify-center">
                <span className="text-[11px] font-bold text-sky-600 font-serif">F</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                FIP<span className="text-sky-500">.</span>
              </span>
            </div>
            <p className="text-xs md:text-sm leading-relaxed font-light uppercase tracking-wider text-slate-500">
              Bespoke capital structuring & strategic advisory for finance,
              investment & property ecosystems.
            </p>
          </div>

          {/* CORE SECTORS */}
          <div>
            <h3 className="text-[10px] font-extrabold text-sky-600 uppercase tracking-[0.3em] mb-8">
              Core Sectors
            </h3>
            <ul className="space-y-4 text-xs md:text-sm">
              <FooterLink label="Finance Solutions" to="/finance" />
              <FooterLink label="Investment Portfolios" to="/investments" />
              <FooterLink label="Property Advisory" to="/property" />
              <FooterLink label="About Institution" to="/about" />
            </ul>
          </div>

          {/* INSTRUMENTS */}
          <div>
            <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.3em] mb-8">
              Instruments
            </h3>
            <ul className="space-y-4 text-xs md:text-sm">
              {[
                "Corporate Equity",
                "Asset Liquidity",
                "Trade Finance",
                "Strategic Growth",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group cursor-default">
                  <span className="w-1 h-1 bg-slate-300 group-hover:bg-sky-500 transition-colors" />
                  <span className="group-hover:text-slate-900 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[10px] font-extrabold text-slate-900 uppercase tracking-[0.3em] mb-8">
              Inquiries
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 group">
                <MapPin size={14} className="text-sky-500 shrink-0" />
                <span className="group-hover:text-slate-900 transition-colors leading-relaxed uppercase tracking-tight">
                  Executive Suite 402,<br />
                  Financial District
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone size={14} className="text-sky-500 shrink-0" />
                <span className="group-hover:text-slate-900 transition-colors">
                  +91 00000 00000
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail size={14} className="text-sky-500 shrink-0" />
                <span className="group-hover:text-slate-900 transition-colors">
                  advisory@fipwealth.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-10" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.25em] font-bold">
          <p className="text-slate-500 text-center md:text-left">
            © {currentYear} FIP Institutional — Strategic Wealth Advisory
          </p>
          <div className="flex items-center gap-8">
            <span className="hover:text-sky-600 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-sky-600 cursor-pointer transition-colors">
              Terms & Governance
            </span>
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
        className="flex items-center justify-between group text-slate-500 hover:text-slate-900 transition-all duration-300"
      >
        <span className="group-hover:translate-x-1 transition-transform uppercase tracking-widest text-[10px] md:text-xs">
          {label}
        </span>
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 group-hover:text-sky-500 transition-all"
        />
      </Link>
    </li>
  );
}
