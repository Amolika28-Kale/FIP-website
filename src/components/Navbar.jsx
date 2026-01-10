"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/FIP.png";

/* ================= BRAND ================= */
const BRAND = {
  navy: "#0B2A5B",
  navyDark: "#071C3F",
  text: "#0F172A",
  muted: "#475569",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const navItems = ["Home", "Finance", "Investments", "Property", "About"];

  const linkClass = ({ isActive }) =>
    `relative text-[11px] uppercase tracking-[0.28em] font-semibold transition-colors duration-300
     ${isActive ? "text-[#0B2A5B]" : "text-black-600 hover:text-black-900"}`;

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.18)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="relative z-[110] flex items-center"
        >
          <img
            src={logo}
            alt="FIP Consultancy"
            className={`transition-all duration-500 object-contain ${
              scrolled ? "h-8" : "h-10"
            }`}
          />
        </NavLink>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-14">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <NavLink key={item} to={path} className={linkClass}>
                {item}

                {/* underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#0B2A5B] transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </NavLink>
            );
          })}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="group relative flex items-center gap-3 px-10 py-3 rounded-full
                       text-[10px] uppercase tracking-[0.25em] font-semibold
                       bg-[#0B2A5B] text-white
                       transition-all duration-300 hover:bg-[#071C3F]
                       hover:shadow-[0_18px_45px_-15px_rgba(11,42,91,0.6)]
                       active:scale-95"
          >
            <span>Consultation</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </NavLink>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden p-2 text-slate-900 relative z-[110]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[105] bg-[#071C3F] md:hidden transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-12 gap-12">

          <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-semibold">
            Navigation
          </p>

          {navItems.map((item, i) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 70}ms` }}
              className={`text-4xl font-medium text-white flex justify-between items-center
                          transition-all duration-500 ${
                            open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
            >
              <span className="hover:text-slate-300 transition-colors">
                {item}
              </span>
              <ChevronRight className="text-slate-400" />
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={`mt-8 bg-white text-[#0B2A5B] py-5 rounded-xl text-center
                        font-semibold text-xs uppercase tracking-[0.25em]
                        transition-all duration-500 ${
                          open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
          >
            Start Consultation
          </NavLink>
        </div>
      </div>
    </header>
  );
}
