"use client";
import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  return (
    <div className="w-full bg-[#f6f8fc] text-[#0f172a] overflow-x-hidden pt-20">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-white px-6 border-b border-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto text-center py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-6 py-2 text-[11px] uppercase tracking-[0.35em] font-bold bg-[#e9eef9] text-[#0B2C6D] rounded-full">
                About FIP Consultancy
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#0B2C6D]"
            >
              Our <span className="text-[#1E4ED8]">Foundation</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto mt-8 text-slate-700 text-base md:text-lg font-medium"
            >
              Finance&nbsp;&nbsp;|&nbsp;&nbsp;Investment&nbsp;&nbsp;|&nbsp;&nbsp;Property
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#1E4ED8] font-bold mb-6">
              Who We Are
            </h2>

            <h3 className="text-3xl md:text-5xl font-extrabold mb-10 leading-tight text-[#0B2C6D]">
              Building Financial Confidence
            </h3>

            <div className="space-y-7 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="text-[#0B2C6D] font-bold">FIP Consultancy</strong> is a
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
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="FIP Consultancy Team"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-28 bg-[#f6f8fc] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <StatCard value="1000+" label="Clients Served" />
          <StatCard value="₹500Cr+" label="Assets Advised" />
          <StatCard value="98%" label="Client Retention" />
          <StatCard value="15+" label="Years Experience" />
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-xs uppercase tracking-[0.3em] text-[#1E4ED8] font-bold mb-4">
              Our Values
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#0B2C6D]">
              What Drives Us
            </h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
          >
            <ValueCard
              index="01"
              title="Transparency"
              desc="Clear structures, honest advice, and complete disclosure."
            />
            <ValueCard
              index="02"
              title="Expertise"
              desc="Market knowledge backed by experience and research."
            />
            <ValueCard
              index="03"
              title="Trust"
              desc="Long-term partnerships built on integrity."
            />
            <ValueCard
              index="04"
              title="Performance"
              desc="Focused on risk-managed and sustainable growth."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-32 bg-[#0B2C6D] text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-4xl font-light italic leading-snug">
              “Every financial decision we guide is rooted in discipline,
              responsibility, and long-term vision.”
            </p>

            <div className="mt-14 h-1 w-28 bg-white/70 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ value, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition"
    >
      <p className="text-3xl md:text-5xl font-extrabold text-[#0B2C6D] mb-3">
        {value}
      </p>
      <p className="text-slate-600 uppercase tracking-[0.25em] text-[11px] font-bold">
        {label}
      </p>
    </motion.div>
  );
}

function ValueCard({ index, title, desc }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-10 rounded-2xl border border-slate-200 hover:shadow-2xl transition"
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
