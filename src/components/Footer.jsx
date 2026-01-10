"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/FIP.png";

/* ================= BRAND ================= */
const BRAND = {
  navy: "#0B2A5B",
  navyDark: "#071C3F",
  text: "#0F172A",
  muted: "#475569",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-slate-200 px-6 pt-24 pb-14 overflow-hidden">

      {/* subtle luxury background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2A5B]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20 mb-24">

          {/* BRAND */}
          <div className="space-y-7">
            <img src={logo} alt="FIP Consultancy" className="h-9 object-contain" />

            <p className="text-[10px] leading-relaxed uppercase tracking-[0.22em] font-medium text-slate-500">
              Trusted advisory for finance, investment & property — built on
              transparency, discipline, and long-term value creation.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#0B2A5B] mb-9">
              Services
            </h3>
            <ul className="space-y-5">
              <FooterLink label="Finance Advisory" to="/finance" />
              <FooterLink label="Investment Planning" to="/investments" />
              <FooterLink label="Property Solutions" to="/property" />
              <FooterLink label="About FIP" to="/about" />
            </ul>
          </div>

          {/* FINANCE */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-slate-700 mb-9">
              Finance Options
            </h3>
            <ul className="space-y-4 text-[11px] text-slate-500">
              {[
                "Personal Loans",
                "Business Finance",
                "Land & Property Finance",
                "Gold Loans",
                "Export & Trade Finance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0B2A5B] transition" />
                  <span className="group-hover:text-slate-900 transition">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-slate-900 mb-9">
              Contact
            </h3>

            <div className="space-y-5 text-[11px] text-slate-500">
              <div className="flex gap-4">
                <MapPin size={14} className="text-[#0B2A5B] mt-0.5" />
                <span className="leading-relaxed uppercase tracking-wide">
                  Financial District<br />Executive Office
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={14} className="text-[#0B2A5B]" />
                <span>+91 00000 00000</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={14} className="text-[#0B2A5B]" />
                <span>advisory@fipwealth.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-12" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.28em] font-semibold text-slate-500">

          <p className="text-center md:text-left">
            © {year} FIP Consultancy — Finance | Investment | Property
          </p>

          <div className="flex items-center gap-10">
            <span className="cursor-pointer hover:text-[#0B2A5B] transition">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-[#0B2A5B] transition">
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
        className="flex items-center justify-between group text-slate-500 hover:text-slate-900 transition"
      >
        <span className="uppercase tracking-[0.22em] text-[10px] font-semibold group-hover:translate-x-1 transition">
          {label}
        </span>
        <ArrowUpRight
          size={14}
          className="opacity-0 group-hover:opacity-100 text-[#0B2A5B] transition"
        />
      </Link>
    </li>
  );
}
