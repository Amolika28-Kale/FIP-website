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
    transition: { staggerChildren: 0.2 },
  },
};

export default function About() {
  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      {/* Mobile: 50vh, Desktop: 60vh */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center bg-indigo-950 overflow-hidden px-4">
        {/* Background Overlay Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-black mb-4 md:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-300 leading-tight"
            >
              Our Legacy.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-lg md:text-2xl font-light opacity-80 leading-relaxed px-2"
            >
              Model <span className="text-indigo-400 font-medium">Finance</span> | 
              Investment | <span className="text-indigo-400 font-medium">Property</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-16 md:py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-indigo-600/10 rounded-full blur-2xl" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-slate-900 italic underline decoration-indigo-500 underline-offset-8">Who We Are</h2>
            <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-light">
              <p>
                <strong className="text-indigo-600 font-bold">FIP</strong> is more than a financial services firm; we are architects of wealth. Based on years of market leadership, we bridge the gap between complex financial instruments and individual success.
              </p>
              <p>
                Our mission is to empower the next generation of investors through <span className="text-slate-900 font-medium">Transparency</span>, <span className="text-slate-900 font-medium">Security</span>, and <span className="text-slate-900 font-medium">Profitability</span>.
              </p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-slate-100 rounded-3xl md:rounded-[3rem] p-3 md:p-4 rotate-0 md:rotate-2 hover:rotate-0 transition-transform duration-500 order-1 md:order-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
              alt="Team Meeting" 
              className="rounded-2xl md:rounded-[2.5rem] shadow-xl md:shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="py-16 md:py-24 bg-indigo-600 text-white px-6">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: 2x2 grid, Desktop: 1x4 grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <StatCard value="1000" suffix="+" label="Happy Clients" />
            <StatCard value="500" suffix="Cr+" label="Funds Managed" />
            <StatCard value="98" suffix="%" label="Client Satisfaction" />
            <StatCard value="15" suffix="+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-16 md:py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-sm md:text-base text-slate-500">The pillars of our business philosophy.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            <ValueCard icon="💎" title="Transparency" desc="Registration in client names for complete legal security." />
            <ValueCard icon="🎯" title="Excellence" desc="Driven by high-performance results and elite standards." />
            <ValueCard icon="🤝" title="Client First" desc="We measure our success solely by your financial growth." />
            <ValueCard icon="⚡" title="Results Driven" desc="Consistently beating market offers with our ROI strategies." />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE FIP ================= */}
      <section className="py-16 md:py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20">The FIP Advantage</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <WhyCard title="Legal Integrity" desc="Duly registered documentation ensuring you own your assets completely." />
            <WhyCard title="Market Beating ROI" desc="Returns that outperform traditional banks and standard market offers." />
            <WhyCard title="24-Hour Velocity" desc="Streamlined approval processes for personal and business liquidity." />
            <WhyCard title="Bespoke Advice" desc="Tailored guidance from consultants with decades of combined experience." />
            <WhyCard title="Unified Ecosystem" desc="Finance, Property, and Investment—all perfectly integrated." />
            <WhyCard title="Custom Risk Profiles" desc="Strategies matched exactly to your personal risk appetite." />
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-16 md:py-24 bg-indigo-950 text-white relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 italic">Our Promise</h2>
            <p className="text-base md:text-lg opacity-80 leading-relaxed md:leading-loose font-light mb-8 px-2 md:px-0">
              "We take the responsibility of your financial decisions personally. Our team works tirelessly to ensure that every transaction is not just a deal, but a step toward your legacy."
            </p>
            <div className="w-16 md:w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      <footer className="py-8 md:py-12 bg-white text-center text-slate-400 text-[10px] md:text-xs px-6">
         Note: This platform is designed for professional financial representation. 
         All transactions should be conducted via our verified secure channels.
      </footer>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function StatCard({ value, suffix, label }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-2 md:p-6"
    >
      <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2">{value}{suffix}</p>
      <p className="text-indigo-200 uppercase tracking-widest text-[10px] md:text-xs font-bold">{label}</p>
    </motion.div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 text-center transition-all hover:shadow-lg"
    >
      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900">{title}</h3>
      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function WhyCard({ title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2rem] border border-transparent hover:border-indigo-100 hover:bg-white transition-all duration-300"
    >
      <div className="h-1.5 w-10 bg-indigo-500 rounded-full mb-4 md:mb-6 group-hover:w-16 transition-all" />
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900">{title}</h3>
      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}