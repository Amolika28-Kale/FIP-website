"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/fip.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f6f9fc] text-slate-600 border-t border-slate-200 pt-24 pb-12 px-6 overflow-hidden">
      {/* subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15]" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-20 mb-24">

          {/* BRAND */}
          <div className="space-y-7">
            <img
              src={logo}
              alt="FIP Consultancy"
              className="h-10 object-contain"
            />

            <p className="text-[11px] md:text-xs leading-relaxed font-light uppercase tracking-[0.18em] text-slate-500">
              Your trusted partner for hassle-free finance, smart investments,
              and secure property solutions designed for sustainable growth.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[10px] font-extrabold text-[#0B2A5B] uppercase tracking-[0.35em] mb-9">
              Services
            </h3>
            <ul className="space-y-5 text-xs md:text-sm">
              <FooterLink label="Finance Options" to="/finance" />
              <FooterLink label="Investment Advisory" to="/investments" />
              <FooterLink label="Property Solutions" to="/property" />
              <FooterLink label="About FIP" to="/about" />
            </ul>
          </div>

          {/* FINANCE OPTIONS */}
          <div>
            <h3 className="text-[10px] font-extrabold text-slate-700 uppercase tracking-[0.35em] mb-9">
              Finance
            </h3>
            <ul className="space-y-4 text-xs md:text-sm">
              {[
                "Personal Loans",
                "Business Finance",
                "Land Finance",
                "Gold Loans",
                "Export Finance",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0B2A5B] transition-colors" />
                  <span className="group-hover:text-slate-900 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[10px] font-extrabold text-slate-900 uppercase tracking-[0.35em] mb-9">
              Contact
            </h3>
            <div className="space-y-5 text-xs md:text-sm">
              <div className="flex items-start gap-4 group">
                <MapPin size={14} className="text-[#0B2A5B] shrink-0 mt-0.5" />
                <span className="group-hover:text-slate-900 transition-colors leading-relaxed uppercase tracking-tight">
                  Financial District<br />
                  Executive Office
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Phone size={14} className="text-[#0B2A5B] shrink-0" />
                <span className="group-hover:text-slate-900 transition-colors">
                  +91 00000 00000
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Mail size={14} className="text-[#0B2A5B] shrink-0" />
                <span className="group-hover:text-slate-900 transition-colors">
                  advisory@fipwealth.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-12" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.28em] font-semibold">
          <p className="text-slate-500 text-center md:text-left">
            © {currentYear} FIP — Finance | Investment | Property
          </p>

          <div className="flex items-center gap-10">
            <span className="hover:text-[#0B2A5B] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[#0B2A5B] cursor-pointer transition-colors">
              Disclaimer
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
        <span className="group-hover:translate-x-1 transition-transform uppercase tracking-[0.2em] text-[10px] md:text-xs">
          {label}
        </span>
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 group-hover:text-[#0B2A5B] transition-all"
        />
      </Link>
    </li>
  );
}
