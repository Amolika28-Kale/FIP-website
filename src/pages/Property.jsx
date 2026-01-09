"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function Property() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden pt-24">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-[#F1F5F9] to-white">

        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 18, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
            alt="Property"
            className="w-full h-full object-cover opacity-[0.08]"
          />
        </motion.div>

        {/* Corporate Wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C6F]/10 via-transparent to-[#1E4DB7]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-6 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#0B2C6F] bg-white border border-[#0B2C6F]/20">
                Property Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-light tracking-tight text-[#0B2C6F]"
            >
              Profitable <span className="font-bold">Property Investments</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-3xl mx-auto mt-6 text-[#475569] text-base md:text-lg font-light"
            >
              End-to-end real estate solutions focused on profitability,
              compliance, and long-term value creation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= PROPERTY ADVISORY ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-[11px] uppercase tracking-[0.35em] text-[#0B2C6F] font-bold mb-4">
              Real Estate Advisory & Management
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0B2C6F]">
              Complete Property Lifecycle Support
            </h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ServiceCard
              index="01"
              title="Buy & Sell Advisory"
              desc="Professional guidance for residential and commercial transactions."
              items={[
                "Residential sales",
                "Commercial sales",
                "Negotiation & closure support",
              ]}
            />
            <ServiceCard
              index="02"
              title="Rental Income Solutions"
              desc="Optimized rental strategies with complete asset management."
              items={[
                "Rental income planning",
                "Property management",
                "Tenant sourcing",
              ]}
            />
            <ServiceCard
              index="03"
              title="Long-Term Appreciation"
              desc="Strategic planning to maximize asset value over time."
              items={[
                "Location-based growth",
                "Exit timing strategy",
                "Capital appreciation",
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ASSURED EXIT ================= */}
      <section className="py-28 bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-[#0B2C6F] text-[11px] uppercase tracking-widest font-bold">
            Assured Exit Model
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0B2C6F] mt-4 mb-16">
            Attractive Exit Returns
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExitCard year="1st Year" roi="15–20%" desc="Early appreciation phase" />
            <ExitCard year="2nd Year" roi="20–30%" desc="Growth acceleration phase" />
            <ExitCard year="3rd Year" roi="30–40%" desc="Optimized exit opportunity" />
          </div>

          <p className="mt-12 text-[#475569] max-w-3xl mx-auto text-sm">
            Returns are <strong>above prevailing market offers</strong>,
            structured through disciplined acquisition and exit strategies.
          </p>
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-[#0B2C6F] mb-16">
            Transparency & Legal Assurance
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <LegalCard
              title="Registered Ownership"
              desc="All property documents are registered in the client’s name with full legal compliance."
            />
            <LegalCard
              title="Defined ROI Structure"
              desc="Clear and transparent ROI terms communicated upfront."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY FIP ================= */}
      <section className="py-28 bg-[#0B2C6F] text-center text-white">
        <motion.div
          whileInView={{ opacity: 1, y: [20, 0] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-12">
            Why Choose the FIP Model
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-blue-50 mb-14 text-sm">
            <li>✓ Integrated Finance, Investment & Property ecosystem</li>
            <li>✓ Transparent structures with defined ROI</li>
            <li>✓ Asset-backed, professionally managed opportunities</li>
            <li>✓ Client-first, legally compliant processes</li>
          </ul>

          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0B2C6F] px-14 py-5 font-bold uppercase tracking-[0.25em] hover:bg-slate-100 transition shadow-xl"
          >
            Speak With a Property Advisor
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
      variants={fadeInUp}
      className="bg-white border border-slate-200 p-10 hover:border-[#0B2C6F] transition shadow-sm hover:shadow-lg"
    >
      <div className="text-[#0B2C6F] font-bold text-2xl mb-4">{index}</div>
      <h3 className="text-xl font-bold mb-3 text-[#0B2C6F]">{title}</h3>
      <p className="text-[#475569] text-sm mb-6">{desc}</p>
      <ul className="space-y-3 text-sm text-[#475569]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0B2C6F]" /> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ExitCard({ year, roi, desc }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-10 border border-slate-200 hover:border-[#0B2C6F] transition shadow-sm hover:shadow-lg"
    >
      <h4 className="text-[#0B2C6F] text-xs uppercase font-bold mb-3">{year}</h4>
      <p className="text-4xl font-bold text-[#0F172A] mb-2">{roi}</p>
      <p className="text-[#475569] text-sm">{desc}</p>
    </motion.div>
  );
}

function LegalCard({ title, desc }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-[#F1F5F9] border border-slate-200 p-10"
    >
      <h3 className="text-xl font-bold text-[#0B2C6F] mb-4">{title}</h3>
      <p className="text-[#475569] text-sm">{desc}</p>
    </motion.div>
  );
}
