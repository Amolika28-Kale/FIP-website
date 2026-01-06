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

  const linkClass = ({ isActive }) =>
    `relative py-2 transition-all duration-300 font-medium group ${
      isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* ✅ LOGO → HOME */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
            <span className="text-lg font-bold">F</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            FIP
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "Finance", "Investments", "Property", "About"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={linkClass}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
          >
            Contact Us
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-50 text-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-20 bg-white transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {["Home", "Finance", "Investments", "Property", "About"].map((item) => (
            <NavLink
              key={item}
              onClick={() => setOpen(false)}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-4"
            >
              {item}
            </NavLink>
          ))}

          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className="mt-4 bg-blue-600 text-white py-4 rounded-2xl text-center font-bold text-lg shadow-xl shadow-blue-100"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </header>
  );
}
