"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] text-slate-800 overflow-x-hidden pt-24">

      {/* ======================================================
        HERO – BOARDROOM FINANCE
      ====================================================== */}
      <section className="relative min-h-[65vh] flex items-center bg-white border-b border-slate-200 overflow-hidden">

        {/* ambient glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#1E3A8A]/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-[#0B2A5B]/10 blur-[160px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="h-px w-14 bg-[#1E3A8A]" />
              <span className="uppercase text-xs tracking-[0.45em] font-semibold text-[#1E3A8A]">
                Finance Advisory
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight text-[#0F172A]"
            >
              Structured <br />
              <span className="font-bold text-[#0B2A5B]">
                Finance Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base sm:text-lg text-slate-700 leading-relaxed"
            >
              Capital solutions designed with discipline, compliance, and
              asset-backed security — serving individuals, enterprises,
              and institutional investors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        FINANCE SOLUTIONS
      ====================================================== */}
      <section className="py-20 sm:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-3xl sm:text-5xl font-bold mb-16 text-[#0B2A5B]"
          >
            Our Finance Capabilities
          </motion.h2>

          <div className="relative border-l border-slate-300 pl-6 sm:pl-12 space-y-16">
            {[
              {
                title: "Personal & Secured Loans",
                desc: "Flexible financing solutions with simplified approvals.",
                items: [
                  "Loans up to ₹10 Lakhs",
                  "Unsecured & secured structures",
                  "Tenure up to 7 years",
                  "Fast sanction & disbursal",
                ],
              },
              {
                title: "Business & Project Finance",
                desc: "Growth capital structured for execution and scale.",
                items: [
                  "₹10 Lakhs to ₹10 Crores",
                  "Security & equity participation",
                  "PMC-based funding models",
                  "Institutional documentation",
                ],
              },
              {
                title: "Land & Property Finance",
                desc: "Short-term liquidity against registered assets.",
                items: [
                  "Tenure: 6–12 months",
                  "Land funding up to 50%",
                  "Residential up to 60%",
                  "Commercial up to 70%",
                ],
              },
              {
                title: "Trade & Asset Finance",
                desc: "Working capital and asset-backed liquidity solutions.",
                items: [
                  "Export & trade finance",
                  "Gold & precious asset funding",
                  "Invoice-based structuring",
                  "Bank-aligned processes",
                ],
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="relative"
              >
                <span className="absolute -left-[7px] top-4 w-3 h-3 bg-[#0B2A5B] rounded-full" />

                <div className="bg-[#F8FAFC] border border-slate-200 p-8 sm:p-10 shadow-sm">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
                    {block.title}
                  </h3>
                  <p className="text-slate-600 mb-6 max-w-2xl">
                    {block.desc}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    {block.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-[#0B2A5B] font-bold">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
        EXECUTION MODEL
      ====================================================== */}
      <section className="py-20 sm:py-32 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-3xl sm:text-5xl font-bold mb-16 text-[#0B2A5B]"
          >
            Execution Framework
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["Requirement Analysis", "Understanding funding objectives"],
              ["Documentation", "Compliance & verification"],
              ["Structuring", "Risk-aligned finance model"],
              ["Disbursement", "Timely capital release"],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                className="bg-white border border-slate-200 p-8 shadow-sm"
              >
                <h3 className="text-3xl font-bold text-[#0B2A5B] mb-3">
                  0{i + 1}
                </h3>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {title}
                </h4>
                <p className="text-slate-600 text-sm">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
        CTA
      ====================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#0B2A5B] text-center overflow-hidden">
        <motion.div
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-10">
            Capital structured with confidence.
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0B2A5B] px-10 sm:px-16 py-4 sm:py-5 font-semibold tracking-widest shadow-xl"
          >
            SPEAK WITH AN ADVISOR
          </motion.button>
        </div>
      </section>

    </div>
  );
}
