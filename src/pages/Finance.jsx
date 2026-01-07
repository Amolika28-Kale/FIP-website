"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#0a0c10] text-slate-200 overflow-x-hidden pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden border-b border-white/5">
        {/* Subtle Luxury Overlays */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
               <span className="px-4 py-1 border border-amber-500/30 text-amber-500 text-[10px] uppercase tracking-[0.4em] font-bold bg-amber-500/5">
                 Capital Engineering
               </span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-light mb-6 tracking-tighter text-white"
            >
              Finance <span className="text-amber-500 font-bold">Solutions.</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-slate-400 text-sm md:text-xl leading-relaxed font-light px-4"
            >
              Precision-engineered liquidity for high-net-worth individuals and 
              strategic enterprises.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-24 bg-[#0f1218]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Financial Instruments</h2>
              <p className="text-slate-500 font-light">Bespoke credit facilities designed for rapid execution and structural stability.</p>
            </div>
            <div className="h-[1px] flex-grow bg-white/10 hidden md:block mb-6 mx-8" />
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5"
          >
            <FinanceCard
              icon="01"
              title="Personal Credit"
              desc="Elite unsecured liquidity lines for high-profile clients."
              points={["No collateral required", "Up to Rs.10 Lakhs", "7-Year flexible tenure", "Priority processing"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="02"
              title="Business Capital"
              desc="Scale your enterprise with strategic equity and PMC support."
              points={["Rs.10 L to Rs.10 Cr", "Strategic Stake options", "Equity structural engineering", "Project Management"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="03"
              title="Land Finance"
              desc="Asset-backed funding against registered land documents."
              points={["Agricultural - 50% LTV", "Residential - 60% LTV", "Commercial - 70% LTV", "Bridge funding solutions"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="04"
              title="Precious Assets"
              desc="Immediate liquidity leveraged against bullion and gems."
              points={["Gold & Silver Bullion", "Certified Diamond loans", "Precious stone valuation", "Bank-grade security"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="05"
              title="Trade Finance"
              desc="International trade billing and global supply chain support."
              points={["Export billing support", "Bank-approved instruments", "Trade risk mitigation", "Working capital optimization"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="06"
              title="Project Funding"
              desc="End-to-end capital for large scale infrastructure."
              points={["Infrastructure Focus", "Debt-Equity Mix", "Government Liaison", "Custom Repayment"]}
              navigate={navigate}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (Institutional Flow) ================= */}
      <section className="py-24 bg-white text-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.4em] font-black text-amber-600 mb-4">The Protocol</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Execution Pipeline</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
             {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-slate-200" />
            
            {[
              { step: "Discovery", desc: "Financial audit & intent" },
              { step: "Verification", desc: "Rigorous due diligence" },
              { step: "Structuring", desc: "Custom terms agreement" },
              { step: "Disbursement", desc: "Direct capital injection" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 bg-white border border-slate-200 rounded-sm flex items-center justify-center mx-auto mb-6 shadow-xl group hover:border-amber-500 transition-all">
                  <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-amber-600">0{i+1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            className="bg-slate-900 border border-white/10 rounded-sm p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px]" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to secure your capital?</h2>
            <button 
              onClick={() => navigate("/contact")}
              className="bg-amber-500 text-slate-950 px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
            >
              Speak with a Principal
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function FinanceCard({ icon, title, desc, points, navigate }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-[#0f1218] p-10 flex flex-col h-full border border-transparent hover:border-amber-500/30 transition-all group"
    >
      <div className="text-amber-500/20 font-mono text-5xl font-black mb-8 group-hover:text-amber-500/40 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed font-light">{desc}</p>

      <ul className="space-y-4 mb-10">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3 text-xs text-slate-400">
            <span className="text-amber-500 mt-0.5">/</span>
            {p}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => navigate("/contact")}
        className="w-full border border-white/10 group-hover:border-amber-500/50 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all group-hover:bg-amber-500 group-hover:text-black"
      >
        Inquire
      </button>
    </motion.div>
  );
}