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

export default function Property() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#0a0c10] text-slate-200 overflow-x-hidden pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Property"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-slate-900/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
               <span className="px-4 py-1 border border-amber-500/30 text-amber-500 text-[10px] uppercase tracking-[0.4em] font-bold bg-amber-500/5">
                 Prime Asset Acquisition
               </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-9xl font-light mb-6 tracking-tighter leading-tight text-white">
              Property <span className="text-amber-500 font-bold">Architects.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-slate-300 text-sm md:text-xl font-light italic px-4">
              "Building intergenerational wealth through strategic brick and mortar acquisition with guaranteed exit protocols."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID (Institutional) ================= */}
      <section className="py-24 bg-[#0f1218]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.4em] text-amber-500 font-black mb-4">The Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Masterclass Advisory</h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5"
          >
            <ServiceCard 
              index="01"
              title="Consultation" 
              desc="High-stakes guidance for residential and commercial acquisitions, backed by real-time market data."
              items={["Macro-Market Analysis", "Valuation Modeling", "Asset Identification"]}
            />
            <ServiceCard 
              index="02"
              title="Strategic Advisory" 
              desc="Bespoke planning to optimize your real estate portfolio for maximum tax efficiency and growth."
              items={["ROI Forecasting", "Portfolio Diversification", "Risk Mitigation"]}
            />
            <ServiceCard 
              index="03"
              title="Legal Structure" 
              desc="Absolute transparency and security through rigorous title verification and RERA compliance."
              items={["Title Forensics", "Registration Management", "Legal Due Diligence"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= EXIT RETURNS (Data Focus) ================= */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest">Guaranteed Exit Strategy</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-20 tracking-tighter">Liquidity Projections</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ExitCard year="YEAR 01" roi="15-20%" desc="Target Liquidity" />
            <ExitCard year="YEAR 02" roi="20-30%" desc="Strategic Hold" />
            <ExitCard year="YEAR 03" roi="30-40%" desc="Maximum Exit Alpha" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block border border-amber-500/50 bg-amber-500/10 px-10 py-6 rounded-sm"
          >
            <p className="text-amber-500 font-black text-xl md:text-2xl tracking-[0.2em] uppercase">
              Returns above market benchmark
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PORTFOLIO (Curated Style) ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-950 tracking-tighter">Curated Portfolio</h2>
              <p className="text-slate-500 mt-4 font-light">A selection of Tier-1 assets currently available for institutional and private acquisition.</p>
            </div>
            <div className="text-slate-300 font-mono text-xs hidden md:block">Q1 2026 LISTINGS</div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <PropertyCard 
              img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              title="Metropolitan Collection" 
              tags={["Residential", "Tier 1"]} 
              bhk="2-4 BHK" 
              price="₹50L - 2Cr" 
            />
            <PropertyCard 
              img="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
              title="The Signature Estate" 
              tags={["Ultra-Luxury", "Gated"]} 
              bhk="4-6 BHK" 
              price="₹2Cr - 8Cr" 
            />
            <PropertyCard 
              img="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
              title="Commercial Plaza" 
              tags={["High-Yield", "Retail"]} 
              bhk="Grade A Space" 
              price="₹1Cr - 5Cr" 
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-[#0a0c10] text-center px-6 border-t border-white/5">
        <motion.div 
          whileInView={{ opacity: [0, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter">Secure Your Site Visit.</h2>
          <p className="text-slate-500 text-lg mb-12 font-light">Privileged viewings for qualified investors and families.</p>
          <button onClick={() => navigate("/contact")}
           className="bg-amber-500 text-slate-950 px-16 py-6 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
            Book Site Inventory
          </button>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ index, title, desc, items }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-[#0f1218] p-12 border border-transparent hover:border-amber-500/30 transition-all flex flex-col group"
    >
      <div className="text-amber-500/20 font-mono text-5xl font-black mb-8 group-hover:text-amber-500 transition-colors">{index}</div>
      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">{title}</h3>
      <p className="text-slate-500 text-sm mb-10 leading-relaxed font-light flex-grow">{desc}</p>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-xs font-medium text-slate-400">
            <span className="h-[1px] w-4 bg-amber-500 shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ExitCard({ year, roi, desc }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-slate-900/50 p-12 rounded-sm border border-white/5 hover:border-amber-500/40 transition-all"
    >
      <h4 className="text-amber-500 font-mono text-xs font-bold mb-4 tracking-[0.2em]">{year}</h4>
      <p className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">{roi}</p>
      <p className="text-slate-500 text-[10px] uppercase tracking-widest">{desc}</p>
    </motion.div>
  );
}

function PropertyCard({ img, title, tags, bhk, price }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group bg-white flex flex-col h-full border border-slate-100 hover:border-amber-500/20 transition-all"
    >
      <div className="relative h-72 overflow-hidden bg-slate-200">
        <img src={img} alt={title} className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="bg-slate-950/80 backdrop-blur-md text-amber-500 text-[9px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-10 flex flex-col flex-grow border-x border-b border-slate-50">
        <h3 className="text-2xl font-bold text-slate-950 mb-2 tracking-tighter uppercase">{title}</h3>
        <p className="text-xs text-slate-400 font-mono mb-8">{bhk}</p>
        <div className="mt-auto pt-6 border-t border-slate-50">
          <p className="text-slate-950 font-black text-2xl tracking-tighter">{price}</p>
          <button className="mt-6 w-full py-4 border border-slate-200 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-950 hover:text-white transition-all">
            View Specification
          </button>
        </div>
      </div>
    </motion.div>
  );
}