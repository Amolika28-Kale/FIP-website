"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ================= BRAND ================= */
const COLORS = {
  navy: "#0B2A5B",
  royal: "#1E3A8A",
  bg: "#F8FAFC",
  text: "#0F172A",
  muted: "#475569",
};

const bgImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973",
];

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const floatSlow = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % bgImages.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-slate-800 overflow-x-hidden">

      {/* ======================================================
        HERO – BOARDROOM STYLE
      ====================================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A5B]/95 via-[#0B2A5B]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />

        {/* floating brand aura */}
        <motion.div
          variants={floatSlow}
          animate="animate"
          className="absolute -right-48 top-1/3 w-[520px] h-[520px] bg-[#1E3A8A]/10 blur-3xl rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 py-32">

          {/* LEFT */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <span className="h-px w-16 bg-[#1E3A8A]" />
              <span className="uppercase text-xs tracking-[0.45em] font-semibold text-[#1E3A8A]">
                FIP Consultancy
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-7xl md:text-9xl font-light leading-none text-[#0F172A]"
            >
              FIP
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xl font-medium text-slate-900"
            >
              Finance | Investment | Property
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg text-slate-900 leading-relaxed"
            >
             The FIP Model is a comprehensive financial ecosystem designed to support individuals, businesses, and investors through structured finance solutions, high-yield investments, and professionally managed property services.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-14 flex gap-6">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#0B2A5B] text-white px-14 py-4 font-semibold tracking-widest hover:bg-[#1E3A8A] transition"
              >
                CONSULT WITH US
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border border-[#0B2A5B] px-14 py-4 font-semibold tracking-widest text-[#0B2A5B] hover:bg-[#F1F5F9] transition"
              >
                OUR MODEL
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT – TRUST METRICS */}
          <motion.div
            variants={floatSlow}
            animate="animate"
            className="hidden lg:grid grid-cols-2 gap-8 self-center"
          >
            {[
              ["₹10Cr+", "Capital Facilitated"],
              ["40%", "Target ROI"],
              ["7 Years", "Loan Tenure"],
              ["100+", "Clients & Investors"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-white/90 backdrop-blur border border-slate-200 p-8"
              >
                <h3 className="text-4xl font-bold text-[#0B2A5B]">{value}</h3>
                <p className="uppercase tracking-widest text-xs mt-2 text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        FINANCE
      ====================================================== */}
      <section className="py-32 bg-white border-y">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-5xl font-bold mb-20 text-[#0B2A5B]"
          >
            Finance Solutions
          </motion.h2>

          <div className="relative border-l border-slate-300 pl-12 space-y-14">
            {[
              "Unsecured & Secured Loans up to ₹10 Lakhs",
              "Business & Project Finance up to ₹10 Crores",
              "Land & Property Based Funding",
              "Gold, Trade & Export Finance",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible">
                <span className="absolute -left-[7px] mt-2 w-3 h-3 bg-[#0B2A5B] rounded-full" />
                <div className="bg-[#F8FAFC] border border-slate-200 p-8">
                  <p className="font-medium text-slate-800">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
        INVESTMENTS
      ====================================================== */}
      <section className="py-32 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-5xl font-bold mb-20 text-[#0B2A5B]">
            Investment Opportunities
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              ["20–25%", "Short-Term Returns"],
              ["30–40%", "Land Investments"],
              ["10%", "Rental Yield"],
              ["15–20%", "Shares-Backed"],
            ].map(([val, label]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200 p-10"
              >
                <h3 className="text-5xl font-bold text-[#0B2A5B]">{val}</h3>
                <p className="mt-4 text-slate-600 font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
        PROPERTY
      ====================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold mb-10 text-[#0B2A5B]">
              Property Advisory
            </h2>
            <ul className="space-y-6 text-lg text-slate-700">
              <li>✔ Sale & Purchase Advisory</li>
              <li>✔ Rental Income & Asset Management</li>
              <li>✔ Assured Exit Strategies</li>
              <li>✔ Fully Registered Transactions</li>
            </ul>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="bg-[#0B2A5B] text-white p-14"
          >
            <h4 className="uppercase tracking-widest text-xs mb-8">
              Why FIP
            </h4>
            <ul className="space-y-6 text-lg font-medium">
              <li>Integrated Financial Ecosystem</li>
              <li>Asset-Backed & ROI-Defined</li>
              <li>Professionally Managed</li>
              <li>Transparent & Compliant</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        CTA
      ====================================================== */}
      <section className="relative py-28 bg-[#0B2A5B] text-center overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <h2 className="relative z-10 text-5xl font-bold text-white mb-10">
          Trusted by investors. Built for long-term wealth.
        </h2>

        <motion.button
          whileHover={{ scale: 1.06 }}
          onClick={() => navigate("/contact")}
          className="relative z-10 bg-white text-[#0B2A5B] px-16 py-5 font-semibold tracking-widest"
        >
          CONNECT WITH FIP
        </motion.button>
      </section>

    </div>
  );
}
