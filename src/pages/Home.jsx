"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const bgImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Modern Skyscraper
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", // Executive Professional
  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop", // Luxury Interior
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="w-full bg-[#0a0c10] text-slate-200 overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30 z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-sm mb-8"
            >
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-amber-500">
                Institutional Wealth Management
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-7xl md:text-[10rem] font-light tracking-tighter mb-4 leading-none text-white"
            >
              FIP<span className="text-amber-500 font-bold">.</span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-xl md:text-4xl font-light mb-8 text-slate-300"
            >
              Finance <span className="text-white/30 px-2">|</span> Investment <span className="text-white/30 px-2">|</span> Property
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-slate-400 text-sm md:text-lg mb-12 leading-relaxed font-light"
            >
              Sophisticated capital structures and high-yield asset acquisition for the modern investor. We turn market volatility into strategic growth.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ backgroundColor: "#f59e0b", color: "#000" }}
                onClick={() => navigate("/contact")}
                className="bg-white text-slate-950 px-8 py-4 rounded-sm font-bold transition-colors text-sm uppercase tracking-widest"
              >
                Inquire Now
              </motion.button>
              <motion.button
                onClick={() => navigate("/about")}
                className="border border-white/20 backdrop-blur-md px-8 py-4 rounded-sm font-bold hover:bg-white/5 text-sm uppercase tracking-widest transition-all"
              >
                Our Philosophy
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Geometric Decor */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-amber-500/5 blur-[120px] rounded-full" />
      </section>

      {/* ================= FINANCE SECTION (Dark) ================= */}
      <section className="py-24 md:py-40 bg-[#0f1218] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="grid grid-cols-1 lg:grid-cols-3 gap-16"
          >
            <div className="lg:col-span-1">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Capital <br/>Solutions</motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                We provide the liquidity and credit frameworks required to scale in today's competitive landscape.
              </motion.p>
              <motion.div variants={fadeInUp} className="h-1 w-20 bg-amber-500" />
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Personal Credit", desc: "Elite unsecured lending up to ₹10 Lakhs.", code: "PC-01" },
                { title: "Corporate Equity", desc: "Growth capital for ventures up to ₹10 Cr.", code: "CE-09" },
                { title: "Asset Liquidity", desc: "Bridge funding against registered physical assets.", code: "AL-04" },
                { title: "Trade Finance", desc: "International export billing and credit lines.", code: "TF-07" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white/5 p-8 border border-white/5 hover:border-amber-500/30 transition-all group relative overflow-hidden"
                >
                  <span className="text-[10px] text-amber-500/50 font-mono absolute top-4 right-6">{item.code}</span>
                  <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= INVESTMENTS SECTION (Minimalist) ================= */}
      <section className="py-24 md:py-40 bg-white text-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-slate-200 pb-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Yield Portfolio</h2>
            <p className="text-slate-500 uppercase tracking-[0.2em] text-sm font-bold mt-4 md:mt-0">Performance benchmarks 2024</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { roi: "20-25%", title: "Tactical Growth", dur: "6-12 Months" },
              { roi: "30-40%", title: "Legacy Wealth", dur: "3 Year Term" },
              { roi: "10%", title: "Yield Income", dur: "Monthly Distribution" },
              { roi: "15-20%", title: "Equity Alpha", dur: "Variable Growth" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col border-l border-slate-200 pl-8 py-4"
              >
                <div className="text-5xl font-black text-slate-900 mb-2">{item.roi}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-1">{item.title}</div>
                <div className="text-slate-400 text-xs">{item.dur}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPERTY SECTION (Dark/Gold) ================= */}
      <section className="py-24 md:py-40 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter">Real Estate <br/><span className="text-amber-500">Advisory.</span></h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                { t: "Legal Due Diligence", d: "Rigorous verification of title deeds and encumbrances." },
                { t: "Strategic Acquisition", d: "Off-market opportunities with high appreciation potential." },
                { t: "Managed Exits", d: "Structured liquidation strategies for maximum ROI." },
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <h4 className="text-lg font-bold mb-1 group-hover:text-amber-500 transition-colors">{item.t}</h4>
                  <p className="text-slate-500 text-sm font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-10 border border-white/5 rounded-sm"
          >
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-slate-500 mb-8">Appreciation Projections</h3>
            <div className="space-y-8">
              {[
                { year: "Year 01", val: 20 },
                { year: "Year 02", val: 45 },
                { year: "Year 03", val: 80 },
              ].map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span>{bar.year}</span>
                    <span className="text-amber-500">+{bar.val}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-slate-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.val}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-amber-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6 bg-amber-500">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-10 text-slate-950 leading-none">Ready to restructure your portfolio?</h2>
          <button 
            className="bg-slate-950 text-white px-12 py-6 rounded-sm text-sm font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-2xl"
            onClick={() => navigate("/contact")}
          >
            Private Consultation
          </button>
        </motion.div>
      </section>

      <footer className="py-12 bg-slate-950 border-t border-white/5 text-center px-6">
        <div className="text-white font-bold tracking-tighter text-xl mb-4">FIP<span className="text-amber-500">.</span></div>
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em]">
          © 2026 Model Finance Investment Property. All rights reserved. 
          <br/> Private & Confidential Wealth Advisory.
        </p>
      </footer>
    </div>
  );
}