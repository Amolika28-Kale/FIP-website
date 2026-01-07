"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const bgImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop",
];

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % bgImages.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#f5f9ff] text-slate-700 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/50" />

        {/* floating glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 bg-blue-100 border border-blue-200 px-4 py-2 mb-10"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-[0.35em] uppercase text-blue-700">
                Trusted Financial Advisory
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-7xl md:text-[9rem] font-light tracking-tighter text-slate-900"
            >
              FIP<span className="text-blue-600 font-bold">.</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="text-xl md:text-4xl font-medium mb-10 text-slate-900"
            >
              Finance <span className="px-2 text-slate-900">|</span>
              Investment <span className="px-2 text-slate-900">|</span>
              Property
            </motion.h2>

            <motion.p
              variants={fadeUp}
             className="text-slate-900 text-lg leading-relaxed mb-12 font-medium"
      >
              Structured capital solutions, high-yield investment strategies,
              and secure property advisory built for sustainable growth.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-blue-700 transition"
              >
                Inquire Now
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border border-blue-300 px-10 py-4 font-bold uppercase tracking-widest text-blue-700 hover:bg-blue-50 transition"
              >
                Our Philosophy
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ================= FINANCE ================= */}
      <section className="py-32 bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-5xl font-bold text-slate-900 mb-6">
              Capital Solutions
            </h2>
            <p className="text-slate-600 mb-8">
              Flexible financing and structured credit designed for scale.
            </p>
            <div className="h-1 w-24 bg-blue-600" />
          </motion.div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {[
              "Personal Loans",
              "Business Finance",
              "Asset-Based Lending",
              "Export & Trade Finance",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-blue-50 p-8 border border-blue-100 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  {item}
                </h3>
                <p className="text-sm text-slate-600">
                  Transparent documentation with fast approvals.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INVESTMENTS ================= */}
      <section className="py-32 bg-[#f0f6ff]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-6xl font-bold mb-20 text-slate-900"
          >
            Investment Performance
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              "Short Term Growth",
              "Wealth Creation",
              "Monthly Income",
              "Equity Expansion",
            ].map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-l-4 border-blue-600 pl-6"
              >
                <div className="text-4xl font-black text-blue-600 mb-2">
                  Up to 40%
                </div>
                <p className="font-bold text-slate-800">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPERTY ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-bold mb-10 text-slate-900">
              Property <span className="text-blue-600">Advisory</span>
            </h2>

            <ul className="space-y-6 text-slate-600">
              <li>✔ Legal Due Diligence</li>
              <li>✔ Strategic Property Investment</li>
              <li>✔ High ROI Buy & Sell Advisory</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-10 border border-blue-100">
            <h4 className="uppercase tracking-widest text-xs text-blue-600 mb-8">
              Growth Projection
            </h4>

            {[20, 45, 80].map((v, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Year {i + 1}</span>
                  <span className="font-bold text-blue-600">+{v}%</span>
                </div>
                <div className="h-1 bg-blue-100">
                  <div className="h-full bg-blue-600" style={{ width: `${v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 bg-blue-600 text-center"
      >
        <h2 className="text-6xl font-black text-white mb-12">
          Let’s build your financial future
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-14 py-6 font-bold uppercase tracking-widest hover:bg-blue-50 transition"
          onClick={() => navigate("/contact")}
        >
          Get Consultation
        </motion.button>
      </motion.section>


    </div>
  );
}
