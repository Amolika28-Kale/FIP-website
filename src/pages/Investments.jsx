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
    <div className="w-full bg-[#F8FAFC] text-[#0F172A] overflow-hidden pt-24">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#F1F5F9] to-white px-6">

        {/* Ambient Corporate Wash */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-[#0B2C6F]/20 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute bottom-[-220px] right-[-140px] w-[520px] h-[520px] bg-[#1E4DB7]/20 blur-[160px] rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="px-6 py-2 border border-[#0B2C6F]/30 text-[#0B2C6F] text-[10px] uppercase tracking-[0.4em] font-bold bg-white">
                Asset Backed Investments
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-8xl font-light mb-6 tracking-tight text-[#0B2C6F]"
            >
              Smart <span className="font-bold">Investments</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-[#475569] text-base md:text-xl font-light leading-relaxed"
            >
              Strategic investment opportunities for short-term gains and
              long-term wealth creation — backed by tangible assets and
              professional management.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY INVEST ================= */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <WhyCard icon="01" title="Asset Backed" desc="All investments are secured against land, property, or tangible assets." />
            <WhyCard icon="02" title="High Returns" desc="Carefully structured opportunities offering 10%–40% annual ROI." />
            <WhyCard icon="03" title="Expert Management" desc="Transparent, compliant, and professionally managed portfolios." />
          </motion.div>
        </div>
      </section>

      {/* ================= INVESTMENT TYPES ================= */}
      <section className="py-28 bg-[#F1F5F9] px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0B2C6F] mb-4">
              Investment Options
            </h2>
            <p className="text-[#475569] font-light">
              Structured portfolios aligned with your financial goals and risk appetite.
            </p>
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
              title="Short-Term Investments"
              subtitle="Secure opportunities for quick capital growth."
              data={{ period: "6–12 Months", asset: "Asset Based", risk: "Moderate" }}
              features={[
                "Land investments",
                "Residential properties",
                "Commercial assets",
                "High liquidity exits",
              ]}
            />

            <InvestmentCard
              rate="30–40% PA"
              title="Long-Term Investments"
              subtitle="Land-focused strategies with higher appreciation."
              data={{ period: "3 Years", asset: "Land Assets", risk: "Strategic" }}
              features={[
                "Land acquisition",
                "Capital appreciation",
                "Planned tenure exits",
                "Secure ownership",
              ]}
            />

            <InvestmentCard
              rate="Up to 10% PA"
              title="Monthly Rental Income"
              subtitle="Stable monthly income with asset appreciation."
              data={{ period: "Monthly", asset: "Property Based", risk: "Low" }}
              features={[
                "Flats & shops",
                "Commercial rentals",
                "Consistent cash flow",
                "Long-term value",
              ]}
            />

            <InvestmentCard
              rate="15–20% PA"
              title="Investment Against Shares"
              subtitle="Profit participation with downside protection."
              data={{ period: "Variable", asset: "Shares / Equity", risk: "Balanced" }}
              features={[
                "Minimum assured ROI",
                "Profit sharing model",
                "Client-aligned returns",
                "Upside participation",
              ]}
            />

          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-[#0B2C6F] text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">
            Invest with Confidence
          </h2>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0B2C6F] px-14 py-5 font-bold text-xs uppercase tracking-[0.3em] hover:bg-slate-100 transition shadow-xl"
          >
            Speak With Our Advisors
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
      className="bg-white p-12 text-center border border-slate-200 hover:border-[#0B2C6F] transition shadow-sm hover:shadow-lg"
    >
      <div className="text-[#0B2C6F]/20 font-mono text-5xl font-black mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#0B2C6F] mb-4 uppercase">
        {title}
      </h3>
      <p className="text-[#475569] text-sm font-light">
        {desc}
      </p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, features }) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeInUp}
      className="p-10 bg-white border border-slate-200 hover:border-[#0B2C6F] transition flex flex-col shadow-sm hover:shadow-xl"
    >
      <span className="bg-[#0B2C6F] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
        {rate}
      </span>

      <h3 className="text-3xl font-bold text-[#0B2C6F] mb-2">
        {title}
      </h3>
      <p className="text-[#475569] text-sm mb-10 font-light">
        {subtitle}
      </p>

      <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-slate-100">
        <Info label="Tenure" value={data.period} />
        <Info label="Assets" value={data.asset} />
        <Info label="Risk" value={data.risk} />
      </div>

      <ul className="space-y-4 mb-12 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-xs text-[#475569]">
            <span className="w-3 h-[1px] bg-[#0B2C6F]" /> {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="w-full border border-[#0B2C6F] text-[#0B2C6F] py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#0B2C6F] hover:text-white transition"
      >
        Enquire Now
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
      <p className="text-sm font-bold text-[#0F172A]">
        {value}
      </p>
    </div>
  );
}
