"use client";
import React from "react";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

export default function About() {
  return (
    <div className="w-full bg-[#f5f9ff] text-slate-800 overflow-x-hidden pt-20">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-50 to-white px-6 border-b border-blue-100">
        <div className="relative z-10 max-w-7xl mx-auto text-center py-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-6 py-1 text-[11px] uppercase tracking-widest font-semibold bg-blue-100 text-blue-700 rounded-full">
                About FIP
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900"
            >
              Our <span className="text-blue-600">Foundation</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto mt-6 text-slate-600 text-base md:text-lg"
            >
              Finance · Investments · Property
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-6">
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
              Building Financial Confidence
            </h3>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">FIP</strong> is a
                trusted financial advisory firm focused on helping individuals
                and businesses make informed decisions across finance,
                investments, and property.
              </p>

              <p>
                Our approach is guided by three principles:
                <span className="text-blue-600 font-semibold"> transparency</span>,
                <span className="text-blue-600 font-semibold"> security</span>, and
                <span className="text-blue-600 font-semibold"> sustainable growth</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
              alt="Our Team"
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-[#f5f9ff] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <StatCard value="1000+" label="Clients Served" />
            <StatCard value="500Cr+" label="Assets Managed" />
            <StatCard value="98%" label="Client Retention" />
            <StatCard value="15+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-4">
              Our Values
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
              What Drives Us
            </h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            <ValueCard
              index="01"
              title="Transparency"
              desc="Clear processes, honest advice, and client-first communication."
            />
            <ValueCard
              index="02"
              title="Expertise"
              desc="Backed by experience, research, and market understanding."
            />
            <ValueCard
              index="03"
              title="Trust"
              desc="Long-term relationships built on reliability and integrity."
            />
            <ValueCard
              index="04"
              title="Performance"
              desc="Focused on consistent growth and measurable outcomes."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-xl md:text-4xl font-light italic leading-snug">
              “Every financial decision we guide is made with responsibility,
              clarity, and long-term value in mind.”
            </p>
            <div className="mt-12 h-1 w-24 bg-white/70 mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ value, label }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-4">
      <p className="text-3xl md:text-5xl font-bold text-blue-600 mb-2">
        {value}
      </p>
      <p className="text-slate-500 uppercase tracking-widest text-[11px] font-semibold">
        {label}
      </p>
    </motion.div>
  );
}

function ValueCard({ index, title, desc }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-10 rounded-xl border border-blue-100 hover:shadow-lg transition"
    >
      <div className="text-blue-600 font-bold text-xl mb-4">{index}</div>
      <h3 className="text-lg font-semibold mb-3 text-slate-900 uppercase">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
