"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

/* ================= PAGE ================= */

export default function Investments() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden pt-28">

      {/* ======================================================
        HERO
      ====================================================== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-white border-b border-slate-200">

        {/* Institutional Ambient Wash */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#0B2C6F]/10 blur-[140px]" />
        <div className="absolute bottom-[-220px] right-[-140px] w-[520px] h-[520px] bg-[#1E40AF]/10 blur-[160px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">

            <motion.div variants={fadeUp} className="mb-8 flex justify-center">
              <span className="px-6 py-2 border border-[#0B2C6F]/30 text-[#0B2C6F] text-[10px] uppercase tracking-[0.45em] font-semibold bg-white">
                Asset Backed Investments
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl font-light tracking-tight text-[#0F172A]"
            >
              Smart{" "}
              <span className="font-bold text-[#0B2C6F]">Investments</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              Strategic investment opportunities for short-term gains and
              long-term wealth creation — structured with asset security,
              professional governance, and transparent execution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        WHY INVEST
      ====================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            <WhyCard
              index="01"
              title="Asset Backed"
              desc="Every investment is secured against registered land, property, or tangible assets."
            />
            <WhyCard
              index="02"
              title="High Yield Focus"
              desc="Structured opportunities delivering 10%–40% annualized returns."
            />
            <WhyCard
              index="03"
              title="Professional Governance"
              desc="Transparent, compliant, and professionally managed investment execution."
            />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        INVESTMENT OPTIONS
      ====================================================== */}
      <section className="py-32 bg-[#F1F5F9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-5xl font-bold mb-20 text-[#0B2C6F]"
          >
            Investment Opportunities
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-14"
          >
            <InvestmentCard
              rate="20–25% PA"
              title="Short-Term Investments"
              subtitle="Capital-efficient opportunities for faster exits."
              data={{ period: "6–12 Months", asset: "Asset Backed", risk: "Moderate" }}
              features={[
                "Land-based investments",
                "Residential & commercial assets",
                "Defined exit timelines",
                "High liquidity focus",
              ]}
            />

            <InvestmentCard
              rate="30–40% PA"
              title="Long-Term Investments"
              subtitle="Appreciation-focused land investment strategies."
              data={{ period: "3 Years", asset: "Land Assets", risk: "Strategic" }}
              features={[
                "Land acquisition projects",
                "Planned appreciation cycles",
                "Secure ownership structures",
                "Capital growth focus",
              ]}
            />

            <InvestmentCard
              rate="Up to 10% PA"
              title="Monthly Rental Income"
              subtitle="Stable monthly cash flow with asset appreciation."
              data={{ period: "Monthly", asset: "Property", risk: "Low" }}
              features={[
                "Residential & commercial rentals",
                "Predictable income stream",
                "Long-term value creation",
                "Low volatility",
              ]}
            />

            <InvestmentCard
              rate="15–20% PA"
              title="Investment Against Shares"
              subtitle="Downside-protected equity participation."
              data={{ period: "Variable", asset: "Equity", risk: "Balanced" }}
              features={[
                "Minimum assured returns",
                "Profit participation model",
                "Capital protection structure",
                "Aligned investor interests",
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        CTA
      ====================================================== */}
      <section className="relative py-28 bg-[#0B2C6F] text-center overflow-hidden">

        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <h2 className="relative z-10 text-5xl font-bold text-white mb-10">
          Invest with confidence. Grow with discipline.
        </h2>

        <motion.button
          whileHover={{ scale: 1.06 }}
          onClick={() => navigate("/contact")}
          className="relative z-10 bg-white text-[#0B2C6F] px-16 py-5 font-semibold tracking-widest"
        >
          SPEAK WITH OUR ADVISORS
        </motion.button>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function WhyCard({ index, title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-slate-200 p-12 text-center hover:border-[#0B2C6F] transition shadow-sm hover:shadow-lg"
    >
      <div className="text-[#0B2C6F]/20 font-mono text-5xl font-black mb-6">
        {index}
      </div>
      <h3 className="text-lg font-bold text-[#0B2C6F] mb-4 uppercase">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, features }) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-slate-200 p-12 hover:border-[#0B2C6F] transition flex flex-col shadow-sm hover:shadow-xl"
    >
      <span className="bg-[#0B2C6F] text-white px-5 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
        {rate}
      </span>

      <h3 className="text-3xl font-bold text-[#0B2C6F] mb-2">
        {title}
      </h3>

      <p className="text-slate-600 text-sm mb-10">
        {subtitle}
      </p>

      <div className="grid grid-cols-3 gap-6 py-6 mb-10 border-y border-slate-100">
        <Info label="Tenure" value={data.period} />
        <Info label="Asset" value={data.asset} />
        <Info label="Risk" value={data.risk} />
      </div>

      <ul className="space-y-4 flex-grow mb-12">
        {features.map((f, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-600">
            <span className="text-[#0B2C6F] font-bold">—</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="border border-[#0B2C6F] text-[#0B2C6F] py-4 font-semibold tracking-widest hover:bg-[#0B2C6F] hover:text-white transition"
      >
        ENQUIRE NOW
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
