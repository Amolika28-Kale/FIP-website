"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Investments() {
    const navigate = useNavigate();

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      {/* Mobile: min-h-[60vh], Desktop: h-[70vh] */}
      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center bg-emerald-950 overflow-hidden px-4">
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#065f46_0%,transparent_50%)] opacity-50"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white py-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-4 md:mb-6 inline-block bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 md:px-6 py-2 rounded-full text-emerald-400 font-bold tracking-wider uppercase text-[10px] md:text-sm">
              Wealth Creation Portal
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-8xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
              Grow Your <span className="text-emerald-400">Capital.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-sm md:text-xl opacity-80 font-light leading-relaxed px-2">
              Unlock market-beating returns with our strategically managed 
              investment portfolios ranging from 10% to 40% PA.
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Icons (Hidden on small mobile for clarity) */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute right-[5%] top-[15%] text-4xl md:text-6xl opacity-20 hidden sm:block"
        >📈</motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[5%] bottom-[15%] text-4xl md:text-6xl opacity-20 hidden sm:block"
        >💎</motion.div>
      </section>

      {/* ================= WHY INVEST ================= */}
      <section className="py-16 md:py-24 bg-white relative px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            <WhyCard icon="🚀" title="High Returns" desc="Performance targeting up to 40% Per Annum growth." />
            <WhyCard icon="🛡️" title="Secure" desc="Asset-backed security with all legal documents in your name." />
            <WhyCard icon="🧩" title="Flexible" desc="Bespoke tiers designed for your specific liquidity needs." />
          </motion.div>
        </div>
      </section>

      {/* ================= INVESTMENT PORTFOLIOS ================= */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">Investment Portfolios</h2>
            <p className="text-xs md:text-lg text-slate-500 max-w-xl mx-auto px-4 font-light">Select a strategy that matches your risk appetite and time horizon.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <InvestmentCard
              rate="20-25% PA"
              title="Short Term Growth"
              subtitle="Rapid appreciation within 6 to 12 months."
              data={{ period: "6mo-1yr", min: "₹5L", risk: "Medium" }}
              features={["Land Arbitrage", "Residential Flipping", "High Liquidity"]}
              color="emerald"
            />
            <InvestmentCard
              rate="30-40% PA"
              title="Long Term Legacy"
              subtitle="Compounded growth over a 3-year horizon."
              data={{ period: "3 Years", min: "₹10L", risk: "Low-Med" }}
              features={["Prime Land Holding", "Commercial Development", "Max Returns"]}
              color="indigo"
            />
            <InvestmentCard
              rate="10% PA"
              title="Passive Income"
              subtitle="Consistent monthly rental returns."
              data={{ period: "Monthly", min: "₹25L", risk: "Low" }}
              features={["Rental Guarantee", "Commercial Shops", "Zero Management"]}
              color="blue"
            />
            <InvestmentCard
              rate="15-20% PA"
              title="Equity Sharing"
              subtitle="Profit sharing with professional management."
              data={{ period: "Variable", min: "₹2L", risk: "Market" }}
              features={["Profit Sharing (1/3rd)", "Portfolio Balancing", "Expert Trading"]}
              color="purple"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= POWER OF COMPOUNDING ================= */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 md:mb-16 italic">The Power of Compounding</h2>
          
          {/* Compound Interest Diagram */}
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            <ProjectionCard investment="₹10L" period="1 Year" rate="25% PA" returns="₹12.50L" delay={0.1} />
            <ProjectionCard investment="₹10L" period="2 Years" rate="30% PA" returns="₹16.90L" delay={0.2} />
            <ProjectionCard investment="₹10L" period="3 Years" rate="40% PA" returns="₹27.44L" delay={0.3} highlight={true} />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 md:py-24 bg-emerald-900 text-white text-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8">Secure Your Future Today</h2>
          <p className="text-sm md:text-xl mb-8 md:mb-10 opacity-80 font-light">Available for private wealth-building strategy sessions.</p>
          <button onClick={() => navigate("/contact")}
           className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-emerald-950 px-10 py-4 rounded-xl font-black text-lg transition-all active:scale-95 shadow-xl">
            Book a Consultation
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
      whileHover={{ y: -5 }}
      className="p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all"
    >
      <div className="text-4xl md:text-5xl mb-4 md:mb-6">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-4">{title}</h3>
      <p className="text-xs md:text-base text-slate-500 leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, features, color }) {
  const colorMap = {
    emerald: "text-emerald-600 border-emerald-100 bg-emerald-50/30",
    indigo: "text-indigo-600 border-indigo-100 bg-indigo-50/30",
    blue: "text-blue-600 border-blue-100 bg-blue-50/30",
    purple: "text-purple-600 border-purple-100 bg-purple-50/30",
  };

  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ scale: 1.01 }}
      className="p-6 md:p-8 rounded-2xl md:rounded-[2rem] border bg-white shadow-sm hover:shadow-md transition-all h-full flex flex-col"
    >
      <div className={`inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-4 w-fit ${colorMap[color]}`}>
        {rate} Returns
      </div>
      <h3 className="text-xl md:text-3xl font-black text-slate-900 mb-2">{title}</h3>
      <p className="text-xs md:text-base text-slate-500 mb-6 md:mb-8 font-light leading-snug">{subtitle}</p>

      <div className="grid grid-cols-3 gap-2 mb-6 md:mb-8 py-4 md:py-6 border-y border-slate-100">
        <Info label="Period" value={data.period} />
        <Info label="Entry" value={data.min} />
        <Info label="Risk" value={data.risk} />
      </div>

      <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-600 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" /> {f}
          </li>
        ))}
      </ul>

      <button className="w-full bg-slate-950 text-white py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200">
        Invest Now
      </button>
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <p className="text-[10px] md:text-sm font-bold text-slate-800 break-words">{value}</p>
    </div>
  );
}

function ProjectionCard({ investment, period, rate, returns, delay, highlight }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`relative p-6 md:p-8 rounded-2xl md:rounded-3xl border transition-transform ${highlight ? 'bg-emerald-950 text-white border-emerald-800 scale-100 md:scale-105 shadow-2xl z-10 my-4 md:my-0' : 'bg-white text-slate-900 border-slate-100 shadow-sm'}`}
    >
      {highlight && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 text-emerald-950 text-[10px] font-black px-3 py-1 rounded-full uppercase whitespace-nowrap">Top Choice</div>}
      
      <div className="mb-4 md:mb-6">
        <p className={`${highlight ? 'text-emerald-400' : 'text-slate-400'} text-[10px] md:text-xs font-bold uppercase mb-1`}>Initial Capital</p>
        <p className="text-xl md:text-2xl font-black">{investment}</p>
      </div>

      <div className="flex justify-between mb-6 md:mb-8">
        <div>
          <p className={`${highlight ? 'text-emerald-400' : 'text-slate-400'} text-[10px] md:text-xs font-bold mb-1`}>Duration</p>
          <p className="text-xs md:text-base font-bold">{period}</p>
        </div>
        <div className="text-right">
          <p className={`${highlight ? 'text-emerald-400' : 'text-slate-400'} text-[10px] md:text-xs font-bold mb-1`}>Rate</p>
          <p className="text-xs md:text-base font-bold text-emerald-500">{rate}</p>
        </div>
      </div>

      <div className={`p-4 rounded-xl ${highlight ? 'bg-white/10' : 'bg-slate-50'}`}>
        <p className={`${highlight ? 'text-emerald-200' : 'text-slate-400'} text-[10px] font-bold mb-1 text-center uppercase tracking-tighter`}>Final Projected Value</p>
        <p className={`text-2xl md:text-3xl font-black text-center ${highlight ? 'text-white' : 'text-emerald-600'}`}>{returns}</p>
      </div>
    </motion.div>
  );
}