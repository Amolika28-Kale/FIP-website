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

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 overflow-x-hidden pt-24">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        
        {/* Decorative blobs */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
              <span className="px-5 py-1 border border-blue-200 text-blue-600 text-[10px] uppercase tracking-[0.4em] font-bold bg-blue-50">
                Capital Engineering
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-slate-900"
            >
              Finance <span className="text-blue-600 font-bold">Solutions</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-slate-600 text-base md:text-xl leading-relaxed font-light"
            >
              Precision-structured capital for individuals and enterprises
              seeking speed, stability, and scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Financial Instruments
              </h2>
              <p className="text-slate-500 font-light">
                Custom-engineered funding structures with institutional discipline.
              </p>
            </div>
            <div className="hidden md:block flex-grow h-[1px] bg-slate-200 mb-6 mx-8" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FinanceCard
              icon="01"
              title="Personal Credit"
              desc="High-trust unsecured capital for individuals."
              points={["No collateral", "Up to ₹10 Lakhs", "Flexible tenure", "Fast approvals"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="02"
              title="Business Capital"
              desc="Growth capital with advisory and structuring."
              points={["₹10L – ₹10Cr", "Equity / Debt mix", "Strategic guidance", "Scale-ready"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="03"
              title="Land Finance"
              desc="Asset-backed lending against registered land."
              points={["Agri / Resi / Commercial", "Up to 70% LTV", "Bridge finance", "Clear terms"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="04"
              title="Precious Assets"
              desc="Immediate liquidity on certified valuables."
              points={["Gold & Silver", "Diamonds", "Secure custody", "Quick release"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="05"
              title="Trade Finance"
              desc="Structured support for domestic & global trade."
              points={["Export billing", "Risk mitigation", "Working capital", "Bank-aligned"]}
              navigate={navigate}
            />
            <FinanceCard
              icon="06"
              title="Project Funding"
              desc="Capital deployment for large developments."
              points={["Infrastructure", "Debt-Equity mix", "Custom repayment", "Govt liaison"]}
              navigate={navigate}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.4em] font-black text-blue-600 mb-4">
              The Process
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Execution Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-slate-200" />

            {[
              { step: "Discovery", desc: "Understanding objectives" },
              { step: "Verification", desc: "Compliance & diligence" },
              { step: "Structuring", desc: "Custom financial model" },
              { step: "Disbursement", desc: "Capital deployment" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 bg-white border border-slate-200 rounded-sm flex items-center justify-center mx-auto mb-6 shadow-lg hover:border-blue-500 transition">
                  <span className="text-sm font-mono font-bold text-slate-400">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-slate-500 text-sm font-light px-4">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="bg-blue-600 rounded-sm p-14 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[120px]" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">
              Ready to secure your capital?
            </h2>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition shadow-xl"
            >
              Speak with an Advisor
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ================= CARD ================= */

function FinanceCard({ icon, title, desc, points, navigate }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white border border-slate-200 p-10 flex flex-col h-full hover:border-blue-500 transition-all group shadow-sm hover:shadow-xl"
    >
      <div className="text-blue-100 font-mono text-5xl font-black mb-8 group-hover:text-blue-300 transition">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-500 text-sm mb-8 flex-grow font-light">
        {desc}
      </p>

      <ul className="space-y-4 mb-10">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3 text-xs text-slate-500">
            <span className="text-blue-500 mt-0.5">—</span>
            {p}
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="w-full border border-blue-500 text-blue-600 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition hover:bg-blue-600 hover:text-white"
      >
        Inquire
      </button>
    </motion.div>
  );
}
