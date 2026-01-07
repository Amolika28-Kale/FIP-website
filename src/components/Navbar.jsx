"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 group ${
      isActive ? "text-amber-500" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <div className="relative">
            <div className="w-8 h-8 flex items-center justify-center border border-amber-500/50 text-amber-500 transition-transform duration-500 group-hover:rotate-90">
              <span className="text-sm font-bold">F</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-amber-500" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white ml-1">
            FIP<span className="text-amber-500">.</span>
          </span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "Finance", "Investments", "Property", "About"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={linkClass}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="group flex items-center gap-3 bg-amber-500 text-slate-950 px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white transition-all active:scale-95"
          >
            Consultation
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 text-white relative z-[110]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔥 MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 z-[105] bg-slate-950 md:hidden transition-all duration-500 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-10 pt-safe gap-10">
          {["Home", "Finance", "Investments", "Property", "About"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-3xl font-light text-white tracking-tight border-b border-white/10 pb-4 flex justify-between items-center group"
            >
              {item}
              <ChevronRight className="text-amber-500 opacity-0 group-hover:opacity-100 transition-all" />
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-10 bg-amber-500 text-slate-950 py-5 rounded-sm text-center font-bold text-sm uppercase tracking-[0.25em]"
          >
            Start Your Journey
          </NavLink>
        </div>
      </div>
    </header>
  );
}
