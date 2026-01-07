"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function About() {
  return (
    <div className="w-full bg-[#0a0c10] text-slate-200 overflow-x-hidden pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[50vh] md:h-[65vh] flex items-center justify-center bg-slate-950 overflow-hidden px-6 border-b border-white/5">
        {/* Prestige Texture Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
               <span className="px-4 py-1 border border-amber-500/30 text-amber-500 text-[10px] uppercase tracking-[0.4em] font-bold bg-amber-500/5">
                 Established Excellence
               </span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-[10rem] font-light mb-6 tracking-tighter text-white leading-none"
            >
              Our <span className="text-amber-500 font-bold">Legacy.</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-sm md:text-xl font-light text-slate-400 leading-relaxed uppercase tracking-[0.1em]"
            >
              Model Finance <span className="text-amber-500 mx-2">/</span> 
              Investment <span className="text-amber-500 mx-2">/</span> Property
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 bg-[#0f1218] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-xs uppercase tracking-[0.4em] text-amber-500 font-black mb-6">The Institution</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tighter">Architects of Wealth</h3>
            <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed font-light">
              <p>
                <strong className="text-white font-bold">FIP</strong> is not merely a service provider; we are a strategic partner in capital preservation and growth. Leveraging decades of market intelligence, we specialize in bridging the gap between sophisticated financial instruments and tangible success.
              </p>
              <p>
                Our operational framework is built upon three non-negotiable pillars: <span className="text-amber-500">Absolute Transparency</span>, <span className="text-amber-500">Structural Security</span>, and <span className="text-amber-500">Compounded Profitability</span>.
              </p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative order-1 md:order-2"
          >
            <div className="absolute inset-0 border border-amber-500/20 translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
              alt="Executive Management" 
              className="grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl w-full h-auto border border-white/5"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION (Prestige Gold) ================= */}
      <section className="py-24 bg-amber-500 text-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 text-center">
            <StatCard value="1000" suffix="+" label="Elite Clients" />
            <StatCard value="500" suffix="Cr+" label="AuM Portfolio" />
            <StatCard value="98" suffix="%" label="Retention Rate" />
            <StatCard value="15" suffix="+" label="Years of Alpha" />
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES (Grid Border) ================= */}
      <section className="py-24 bg-[#0a0c10] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.4em] text-slate-500 font-black mb-4">Our DNA</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Guiding Principles</h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10"
          >
            <ValueCard index="01" title="Transparency" desc="Assets are registered directly in client names for absolute legal sovereignty." />
            <ValueCard index="02" title="Excellence" desc="Measured by high-performance data points and institutional-grade standards." />
            <ValueCard index="03" title="Fiduciary Duty" desc="We operate with a client-first mandate, aligning our success with your growth." />
            <ValueCard index="04" title="Performance" desc="Targeting market-beating ROI through proprietary strategic allocation." />
          </motion.div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden px-6 border-t border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-10 block">Executive Commitment</span>
            <p className="text-xl md:text-4xl leading-snug font-light italic text-slate-300">
              "We manage your wealth as if it were our own heritage. Every decision is a calculated step toward securing your financial sovereignty."
            </p>
            <div className="mt-12 h-px w-24 bg-amber-500 mx-auto" />
          </motion.div>
        </div>
      </section>

      <footer className="py-12 bg-[#0a0c10] text-center border-t border-white/5 px-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] leading-relaxed">
            Strictly Confidential <span className="mx-2">|</span> 
            Professional Representation Only <span className="mx-2">|</span> 
            FIP Governance 2026
          </p>
      </footer>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function StatCard({ value, suffix, label }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-4"
    >
      <p className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">{value}{suffix}</p>
      <p className="text-slate-900 uppercase tracking-widest text-[10px] md:text-xs font-black opacity-60">{label}</p>
    </motion.div>
  );
}

function ValueCard({ index, title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-[#0f1218] p-10 group hover:bg-slate-900 transition-all duration-500"
    >
      <div className="text-amber-500/20 font-mono text-4xl font-bold mb-6 group-hover:text-amber-500 transition-colors">{index}</div>
      <h3 className="text-xl font-bold mb-4 text-white tracking-tight uppercase">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}