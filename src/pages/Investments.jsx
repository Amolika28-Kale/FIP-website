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

export default function Investments() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#0a0c10] text-slate-200 overflow-hidden pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden px-4 border-b border-white/5">
        {/* Prestige Background Element */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white py-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6 inline-block border border-amber-500/30 px-6 py-2 bg-amber-500/5 text-amber-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
              Portfolio Management Alpha
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-9xl font-light mb-6 tracking-tighter leading-tight">
              Wealth <span className="text-amber-500 font-bold">Appreciation.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-slate-400 text-sm md:text-xl font-light leading-relaxed px-4">
              Strategic capital allocation targeting market-leading returns 
              between 10% and 40% Per Annum.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="py-24 bg-[#0f1218] relative px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5"
          >
            <WhyCard icon="01" title="Alpha Yields" desc="Proprietary strategies targeting up to 40% PA growth through diversified asset classes." />
            <WhyCard icon="02" title="Asset Backed" desc="All investments are secured against physical real estate with rigorous legal verification." />
            <WhyCard icon="03" title="Tiered Liquidity" desc="Bespoke investment horizons tailored to your specific cash-flow and capital requirements." />
          </motion.div>
        </div>
      </section>

      {/* ================= INVESTMENT TIERS ================= */}
      <section className="py-24 bg-white text-slate-950 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-slate-100 pb-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Investment Tiers</h2>
              <p className="text-slate-500 font-light mt-2 italic">Institutional Grade Portfolios</p>
            </div>
            <div className="text-amber-600 font-mono text-sm font-bold mt-4 md:mt-0">SECURED ASSET CLASS</div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <InvestmentCard
              rate="20-25% PA"
              title="Tactical Growth"
              subtitle="Optimized for rapid capital appreciation within a 12-month cycle."
              data={{ period: "6-12 Mo", min: "₹5L", risk: "Balanced" }}
              features={["Land Value Arbitrage", "Residential Flip Strategies", "High Exit Liquidity"]}
            />
            <InvestmentCard
              rate="30-40% PA"
              title="Legacy Capital"
              subtitle="Deep-value compounding designed for significant 3-year wealth creation."
              data={{ period: "36 Mo", min: "₹10L", risk: "Strategic" }}
              features={["Prime Land Acquisition", "Commercial Development", "Maximum Compound Yield"]}
            />
            <InvestmentCard
              rate="10% PA"
              title="Yield Income"
              subtitle="Consistent, low-volatility returns through commercial rental yields."
              data={{ period: "Monthly", min: "₹25L", risk: "Preservation" }}
              features={["Rental Guarantee Protocol", "Premium Commercial Hubs", "Passive Management"]}
            />
            <InvestmentCard
              rate="15-20% PA"
              title="Equity Alpha"
              subtitle="Collaborative profit-sharing with professional fund management."
              data={{ period: "Variable", min: "₹2L", risk: "Active" }}
              features={["1/3rd Profit Allocation", "Diversified Risk Balancing", "Market-Linked Growth"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= COMPOUNDING PROJECTIONS ================= */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest">Mathematical Projection</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-2">The Architecture of Growth</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectionCard investment="₹10L" period="1 Year" rate="25% PA" returns="₹12.50L" delay={0.1} />
            <ProjectionCard investment="₹10L" period="2 Years" rate="30% PA" returns="₹16.90L" delay={0.2} />
            <ProjectionCard investment="₹10L" period="3 Years" rate="40% PA" returns="₹27.44L" delay={0.3} highlight={true} />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-slate-950 text-white text-center relative overflow-hidden px-4 border-t border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px]" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">Institutional Wealth Starts Here.</h2>
          <button onClick={() => navigate("/contact")}
           className="bg-amber-500 hover:bg-white text-slate-950 px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all shadow-2xl">
            Request Prospectus
          </button>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function WhyCard({ icon, title, desc }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-12 bg-[#0f1218] text-center group hover:bg-slate-900 transition-colors"
    >
      <div className="text-amber-500/20 font-mono text-5xl font-black mb-6 group-hover:text-amber-500 transition-colors">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, features }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-10 border border-slate-100 bg-white hover:border-amber-500/30 transition-all flex flex-col group"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="bg-slate-950 text-white px-4 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">
          {rate}
        </div>
        <div className="text-slate-300 font-mono text-xs">TIER-{title.charAt(0)}</div>
      </div>
      
      <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tighter">{title}</h3>
      <p className="text-slate-500 text-sm mb-10 font-light leading-relaxed">{subtitle}</p>

      <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-slate-50">
        <Info label="Horizon" value={data.period} />
        <Info label="Minimum" value={data.min} />
        <Info label="Risk Profile" value={data.risk} />
      </div>

      <ul className="space-y-4 mb-12 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
            <span className="h-[1px] w-4 bg-amber-500" /> {f}
          </li>
        ))}
      </ul>

      <button className="w-full bg-slate-50 text-slate-950 border border-slate-200 py-4 rounded-sm text-xs font-bold uppercase tracking-widest group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-500 transition-all">
        Inquire Allocation
      </button>
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">{label}</p>
      <p className="text-sm font-bold text-slate-800">{value}</p>
    </div>
  );
}

function ProjectionCard({ investment, period, rate, returns, delay, highlight }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`p-10 border transition-all ${highlight ? 'bg-slate-950 text-white border-amber-500/50 scale-105 shadow-2xl z-10' : 'bg-white text-slate-900 border-slate-100'}`}
    >
      <p className={`${highlight ? 'text-amber-500' : 'text-slate-400'} text-[10px] font-black uppercase tracking-widest mb-6`}>Scenario: {period}</p>
      
      <div className="space-y-6 mb-10">
        <div className="flex justify-between border-b border-slate-100 pb-2">
          <span className="text-xs text-slate-500 uppercase">Capital</span>
          <span className="font-bold">{investment}</span>
        </div>
        <div className="flex justify-between border-b border-slate-100 pb-2">
          <span className="text-xs text-slate-500 uppercase">Yield Rate</span>
          <span className="font-bold text-amber-500">{rate}</span>
        </div>
      </div>

      <div className={`p-6 ${highlight ? 'bg-white/5' : 'bg-slate-50'}`}>
        <p className="text-[10px] font-bold mb-1 text-slate-400 uppercase tracking-widest">Target Valuation</p>
        <p className={`text-3xl font-bold tracking-tighter ${highlight ? 'text-amber-500' : 'text-slate-900'}`}>{returns}</p>
      </div>
    </motion.div>
  );
}