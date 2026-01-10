"use client";
import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

/* ================= PAGE ================= */

export default function About() {
  return (
    <div className="w-full bg-[#f6f8fc] text-slate-800 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-6 py-2 text-[11px] uppercase tracking-[0.35em] font-bold bg-[#eef2ff] text-[#1E4ED8] rounded-full mb-8"
            >
              About FIP Consultancy
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#0B2C6D]"
            >
              Our <span className="text-[#1E4ED8]">Foundation</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-3xl mx-auto mt-10 text-slate-600 text-base md:text-lg font-medium"
            >
              Finance &nbsp;|&nbsp; Investment &nbsp;|&nbsp; Property
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#1E4ED8] font-bold mb-6">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#0B2C6D] mb-10">
              Building Financial Confidence
            </h2>

            <div className="space-y-8 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="text-[#0B2C6D]">FIP Consultancy</strong> is a
                professional advisory firm helping individuals and businesses
                navigate finance, investments, and property with confidence and clarity.
              </p>

              <p>
                Our advisory philosophy is built on
                <span className="text-[#1E4ED8] font-semibold"> transparency</span>,
                <span className="text-[#1E4ED8] font-semibold"> security</span>, and
                <span className="text-[#1E4ED8] font-semibold"> long-term value creation</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeScale}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#1E4ED8]/20 to-transparent blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
              alt="FIP Consultancy Team"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-28 bg-[#f6f8fc]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          <Stat value="1000+" label="Clients Served" />
          <Stat value="₹500Cr+" label="Assets Advised" />
          <Stat value="98%" label="Client Retention" />
          <Stat value="15+" label="Years Experience" />
        </motion.div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">
            <p className="text-xs uppercase tracking-[0.35em] text-[#1E4ED8] font-bold mb-6">
              Our Values
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B2C6D]">
              What Drives Us
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-10"
          >
            <Value index="01" title="Transparency" desc="Clear structures, honest advice, and complete disclosure." />
            <Value index="02" title="Expertise" desc="Market knowledge backed by experience and research." />
            <Value index="03" title="Trust" desc="Long-term partnerships built on integrity." />
            <Value index="04" title="Performance" desc="Focused on risk-managed and sustainable growth." />
          </motion.div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-32 bg-[#0B2C6D] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl md:text-4xl font-light italic leading-snug"
          >
            “Every financial decision we guide is rooted in discipline,
            responsibility, and long-term vision.”
          </motion.p>

          <div className="mt-14 h-[2px] w-28 bg-white/60 mx-auto rounded-full" />
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition"
    >
      <p className="text-3xl md:text-5xl font-extrabold text-[#0B2C6D] mb-4">
        {value}
      </p>
      <p className="text-slate-500 uppercase tracking-[0.25em] text-[11px] font-bold">
        {label}
      </p>
    </motion.div>
  );
}

function Value({ index, title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-2xl transition"
    >
      <div className="text-[#1E4ED8] font-extrabold text-2xl mb-6">
        {index}
      </div>
      <h3 className="text-sm font-bold mb-4 text-[#0B2C6D] uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-slate-700 text-sm leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}
