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
    <div className="w-full bg-[#f5f9ff] text-slate-800 overflow-x-hidden pt-20">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-white border-b border-blue-100">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 18, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
            alt="Property"
            className="w-full h-full object-cover opacity-15"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-5 py-1 text-[11px] font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 rounded-full">
                Property Advisory
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900"
            >
              Smart Property
              <span className="text-blue-600"> Investments</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto mt-6 text-slate-600 text-base md:text-lg"
            >
              Acquire verified residential & commercial assets with structured
              exits and long-term value creation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-4">
              Our Process
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900">
              End-to-End Property Advisory
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
              title="Consultation"
              desc="Understand your investment goals and match them with market-ready opportunities."
              items={["Market Analysis", "Budget Planning", "Asset Shortlisting"]}
            />
            <ServiceCard
              index="02"
              title="Investment Strategy"
              desc="Optimized planning to balance returns, risk, and liquidity."
              items={["ROI Planning", "Risk Assessment", "Portfolio Mix"]}
            />
            <ServiceCard
              index="03"
              title="Legal & Closure"
              desc="Complete legal verification with transparent documentation."
              items={["Title Check", "RERA Compliance", "Registration Support"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= RETURNS ================= */}
      <section className="py-24 bg-[#f5f9ff]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-blue-600 text-xs uppercase tracking-widest font-semibold">
            Expected Returns
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-16">
            Growth & Exit Outlook
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExitCard year="Year 1" roi="12–18%" desc="Stabilization Phase" />
            <ExitCard year="Year 2" roi="18–25%" desc="Growth Phase" />
            <ExitCard year="Year 3" roi="25–35%" desc="Exit Window" />
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                Available Properties
              </h2>
              <p className="text-slate-500 mt-4 max-w-xl">
                Hand-picked assets from trusted developers across Tier-1 cities.
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden md:block">
              Updated Q1 2026
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <PropertyCard
              img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              title="Urban Residences"
              tags={["Residential", "Metro"]}
              bhk="2–4 BHK"
              price="₹50L – 2Cr"
            />
            <PropertyCard
              img="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
              title="Signature Villas"
              tags={["Luxury", "Gated"]}
              bhk="4–6 BHK"
              price="₹2Cr – 8Cr"
            />
            <PropertyCard
              img="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
              title="Commercial Spaces"
              tags={["Retail", "Office"]}
              bhk="Grade-A"
              price="₹1Cr – 5Cr"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-sky-500 text-center text-white">
        <motion.div whileInView={{ opacity: [0, 1] }} className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-bold mb-8">
            Schedule a Property Consultation
          </h2>
          <p className="text-blue-100 mb-10">
            Speak with our advisors to shortlist properties aligned with your goals.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-blue-700 px-14 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-blue-50 transition"
          >
            Book Consultation
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
      className="bg-white border border-blue-100 p-10 rounded-xl hover:shadow-lg transition"
    >
      <div className="text-blue-600 font-bold text-xl mb-4">{index}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-500 text-sm mb-6">{desc}</p>
      <ul className="space-y-3 text-sm text-slate-600">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full" /> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ExitCard({ year, roi, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white p-10 rounded-xl border border-blue-100"
    >
      <h4 className="text-blue-600 text-xs uppercase font-semibold mb-3">
        {year}
      </h4>
      <p className="text-4xl font-bold text-slate-900 mb-2">{roi}</p>
      <p className="text-slate-500 text-sm">{desc}</p>
    </motion.div>
  );
}

function PropertyCard({ img, title, tags, bhk, price }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-xl border border-blue-100 overflow-hidden hover:shadow-lg transition"
    >
      <div className="h-64 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition duration-700" />
      </div>

      <div className="p-8">
        <div className="flex gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-widest bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{bhk}</p>

        <div className="mt-6 pt-6 border-t">
          <p className="text-2xl font-bold text-blue-600">{price}</p>
          <button className="mt-4 w-full py-3 text-sm font-bold border border-blue-200 rounded-lg hover:bg-blue-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
