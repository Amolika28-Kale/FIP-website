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
  visible: { transition: { staggerChildren: 0.14 } },
};

/* ================= PAGE ================= */

export default function Property() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden pt-28">

      {/* ======================================================
        HERO
      ====================================================== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-white border-b border-slate-200">

        {/* Architectural Backdrop */}
        <motion.div
          animate={{ scale: [1.05, 1] }}
          transition={{ duration: 18, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
            alt="Property Advisory"
            className="w-full h-full object-cover opacity-[0.07]"
          />
        </motion.div>

        {/* Institutional Wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C6F]/10 via-transparent to-[#1E40AF]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">

            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-block px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-[#0B2C6F] bg-white border border-[#0B2C6F]/25">
                Property Advisory
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-light tracking-tight text-[#0F172A]"
            >
              Profitable{" "}
              <span className="font-bold text-[#0B2C6F]">
                Property Investments
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed"
            >
              End-to-end real estate advisory focused on profitability,
              regulatory compliance, asset security, and disciplined
              long-term value creation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        PROPERTY ADVISORY
      ====================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-24"
          >
            <h2 className="text-xs uppercase tracking-[0.45em] text-[#0B2C6F] font-semibold mb-4">
              Real Estate Advisory & Management
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0B2C6F]">
              Complete Property Lifecycle Support
            </h3>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-14"
          >
            <ServiceCard
              index="01"
              title="Buy & Sell Advisory"
              desc="Strategic guidance across residential and commercial transactions."
              items={[
                "Residential & commercial sales",
                "Price negotiation & closure",
                "Legal coordination",
              ]}
            />

            <ServiceCard
              index="02"
              title="Rental Income Management"
              desc="Optimized rental yield with complete asset oversight."
              items={[
                "Rental income planning",
                "Tenant sourcing",
                "Ongoing asset management",
              ]}
            />

            <ServiceCard
              index="03"
              title="Capital Appreciation Strategy"
              desc="Planned growth approach for long-term wealth creation."
              items={[
                "Location-driven selection",
                "Market cycle timing",
                "Exit strategy planning",
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        ASSURED EXIT MODEL
      ====================================================== */}
      <section className="py-32 bg-[#F1F5F9] border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-xs uppercase tracking-widest font-semibold text-[#0B2C6F]">
            Assured Exit Model
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2C6F] mt-6 mb-20">
            Structured Exit Returns
          </h2>

          <div className="grid md:grid-cols-3 gap-14">
            <ExitCard year="Year 1" roi="15–20%" desc="Early appreciation phase" />
            <ExitCard year="Year 2" roi="20–30%" desc="Growth acceleration phase" />
            <ExitCard year="Year 3" roi="30–40%" desc="Optimized exit window" />
          </div>

          <p className="mt-16 max-w-3xl mx-auto text-slate-600 text-sm leading-relaxed">
            Returns are structured above prevailing market benchmarks,
            achieved through disciplined acquisition, asset optimization,
            and strategically timed exits.
          </p>
        </div>
      </section>

      {/* ======================================================
        TRANSPARENCY & LEGAL
      ====================================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-4xl md:text-5xl font-bold text-[#0B2C6F] mb-20"
          >
            Transparency & Legal Assurance
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16"
          >
            <LegalCard
              title="Registered Ownership"
              desc="All assets are registered directly in the client’s name with full legal compliance."
            />
            <LegalCard
              title="Defined ROI Framework"
              desc="Clear return structures disclosed upfront with documented exit terms."
            />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
        WHY FIP
      ====================================================== */}
      <section className="py-32 bg-[#0B2C6F] text-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            Why the FIP Property Model
          </h2>

          <ul className="grid md:grid-cols-2 gap-8 text-left text-blue-50 text-sm mb-16">
            <li>✓ Integrated finance, investment & property ecosystem</li>
            <li>✓ Transparent, ROI-defined structures</li>
            <li>✓ Asset-backed & professionally managed</li>
            <li>✓ Client-first, legally compliant execution</li>
          </ul>

          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0B2C6F] px-16 py-5 font-semibold tracking-widest hover:bg-slate-100 transition shadow-xl"
          >
            SPEAK WITH A PROPERTY ADVISOR
          </button>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ index, title, desc, items }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-slate-200 p-12 hover:border-[#0B2C6F] transition shadow-sm hover:shadow-lg"
    >
      <div className="text-[#0B2C6F] font-bold text-2xl mb-6">
        {index}
      </div>
      <h3 className="text-xl font-bold text-[#0B2C6F] mb-4">
        {title}
      </h3>
      <p className="text-slate-600 text-sm mb-8 leading-relaxed">
        {desc}
      </p>
      <ul className="space-y-4 text-sm text-slate-600">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[#0B2C6F] font-bold">—</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ExitCard({ year, roi, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-slate-200 p-12 hover:border-[#0B2C6F] transition shadow-sm hover:shadow-lg"
    >
      <h4 className="text-xs uppercase tracking-widest font-semibold text-[#0B2C6F] mb-4">
        {year}
      </h4>
      <p className="text-4xl font-bold text-[#0F172A] mb-4">
        {roi}
      </p>
      <p className="text-slate-600 text-sm">
        {desc}
      </p>
    </motion.div>
  );
}

function LegalCard({ title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-[#F8FAFC] border border-slate-200 p-12"
    >
      <h3 className="text-xl font-bold text-[#0B2C6F] mb-4">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
