"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

/* ================= PAGE ================= */

export default function Investments() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 overflow-hidden pt-24">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6">

        {/* Ambient Blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-300/30 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-indigo-300/30 blur-[120px] rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="px-5 py-1 border border-blue-200 text-blue-600 text-[10px] uppercase tracking-[0.4em] font-bold bg-blue-50">
                Portfolio Management
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-light mb-6 tracking-tight text-slate-900"
            >
              Wealth <span className="text-blue-600 font-bold">Appreciation</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-slate-600 text-base md:text-xl font-light leading-relaxed"
            >
              Strategic capital allocation delivering consistent,
              market-leading returns.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE PILLARS ================= */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <WhyCard
              icon="01"
              title="Alpha Yields"
              desc="Proprietary strategies targeting superior annualized returns."
            />
            <WhyCard
              icon="02"
              title="Asset Backed"
              desc="Every investment secured against verified physical assets."
            />
            <WhyCard
              icon="03"
              title="Tiered Liquidity"
              desc="Flexible exit horizons aligned with your capital needs."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= INVESTMENT TIERS ================= */}
      <section className="py-28 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-200 pb-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                Investment Tiers
              </h2>
              <p className="text-slate-500 font-light mt-2">
                Institutional-grade portfolios
              </p>
            </div>
            <div className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest mt-4 md:mt-0">
              Secured Asset Class
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <InvestmentCard
              rate="20–25% PA"
              title="Tactical Growth"
              subtitle="Optimized for rapid capital appreciation."
              data={{ period: "6–12 Mo", min: "₹5L", risk: "Balanced" }}
              features={["Land arbitrage", "Residential flips", "High liquidity exits"]}
            />
            <InvestmentCard
              rate="30–40% PA"
              title="Legacy Capital"
              subtitle="Deep-value compounding for long-term growth."
              data={{ period: "36 Mo", min: "₹10L", risk: "Strategic" }}
              features={["Prime land", "Commercial development", "Maximum compounding"]}
            />
            <InvestmentCard
              rate="10% PA"
              title="Yield Income"
              subtitle="Stable monthly income portfolios."
              data={{ period: "Monthly", min: "₹25L", risk: "Preservation" }}
              features={["Rental assurance", "Commercial hubs", "Passive income"]}
            />
            <InvestmentCard
              rate="15–20% PA"
              title="Equity Alpha"
              subtitle="Profit-sharing with managed diversification."
              data={{ period: "Variable", min: "₹2L", risk: "Active" }}
              features={["Profit participation", "Risk balancing", "Market exposure"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTIONS ================= */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">
              Growth Projection
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3">
              Compounding Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProjectionCard investment="₹10L" period="1 Year" rate="25% PA" returns="₹12.5L" />
            <ProjectionCard investment="₹10L" period="2 Years" rate="30% PA" returns="₹16.9L" />
            <ProjectionCard investment="₹10L" period="3 Years" rate="40% PA" returns="₹27.44L" highlight />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-blue-600 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">
            Institutional Wealth Starts Here
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-blue-600 px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition shadow-xl"
          >
            Request Prospectus
          </button>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function WhyCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-12 text-center border border-slate-200 hover:border-blue-500 transition shadow-sm hover:shadow-lg"
    >
      <div className="text-blue-100 font-mono text-5xl font-black mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">
        {title}
      </h3>
      <p className="text-slate-500 text-sm font-light">
        {desc}
      </p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, features }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-10 bg-white border border-slate-200 hover:border-blue-500 transition flex flex-col shadow-sm hover:shadow-xl"
    >
      <div className="flex justify-between items-start mb-8">
        <span className="bg-blue-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm">
          {rate}
        </span>
      </div>

      <h3 className="text-3xl font-bold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-slate-500 text-sm mb-10 font-light">
        {subtitle}
      </p>

      <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-slate-100">
        <Info label="Horizon" value={data.period} />
        <Info label="Minimum" value={data.min} />
        <Info label="Risk" value={data.risk} />
      </div>

      <ul className="space-y-4 mb-12 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-xs text-slate-600">
            <span className="w-3 h-[1px] bg-blue-500" /> {f}
          </li>
        ))}
      </ul>

      <button className="w-full border border-blue-500 text-blue-600 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition">
        Inquire Allocation
      </button>
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1 font-bold">
        {label}
      </p>
      <p className="text-sm font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function ProjectionCard({ investment, period, rate, returns, highlight }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`p-10 border transition ${
        highlight
          ? "bg-blue-600 text-white border-blue-600 scale-105 shadow-2xl"
          : "bg-white border-slate-200"
      }`}
    >
      <p className={`text-[10px] uppercase tracking-widest font-bold mb-6 ${
        highlight ? "text-white/80" : "text-slate-400"
      }`}>
        Scenario: {period}
      </p>

      <div className="space-y-6 mb-10">
        <div className="flex justify-between">
          <span className="text-xs uppercase">Capital</span>
          <span className="font-bold">{investment}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs uppercase">Yield</span>
          <span className="font-bold">{rate}</span>
        </div>
      </div>

      <div className={`p-6 ${highlight ? "bg-white/10" : "bg-slate-50"}`}>
        <p className="text-[10px] uppercase tracking-widest mb-2 font-bold text-slate-400">
          Target Value
        </p>
        <p className={`text-3xl font-bold ${
          highlight ? "text-white" : "text-slate-900"
        }`}>
          {returns}
        </p>
      </div>
    </motion.div>
  );
}
