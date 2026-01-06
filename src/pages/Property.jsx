"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Property() {
    const navigate = useNavigate();

  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      {/* Reduced height on mobile for better focus */}
      <section className="relative h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="bg-indigo-500 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 inline-block">
              Premium Real Estate
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
              Property <span className="text-indigo-400">Excellence.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-sm md:text-xl opacity-90 font-light italic px-4">
              "Building wealth through brick and mortar with guaranteed exit strategies."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Masterclass Services</h2>
            <div className="h-1 w-16 md:w-20 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <ServiceCard 
              icon="🏠"
              title="Consultation" 
              desc="Expert guidance for high-stakes residential and commercial property transactions."
              items={["Market Analysis", "Valuation", "Legal Docs"]}
            />
            <ServiceCard 
              icon="📊"
              title="Advisory" 
              desc="Data-driven strategic property planning to maximize your portfolio growth."
              items={["ROI Projections", "Trend Analysis", "Risk Assessment"]}
            />
            <ServiceCard 
              icon="⚖️"
              title="Legal" 
              desc="Bulletproof transparency and legal security for every square foot."
              items={["Title Verification", "RERA Compliance", "Registration"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= EXIT RETURNS ================= */}
      <section className="py-16 md:py-24 bg-indigo-950 text-white relative overflow-hidden px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-5xl font-bold mb-12 md:mb-16 italic underline decoration-indigo-500 underline-offset-8">
            Guaranteed Exit Returns
          </h2>

          {/* Flowchart Diagram showing ROI growth over years */}
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <ExitCard year="1st Year" roi="15-20%" color="bg-indigo-500" />
            <ExitCard year="2nd Year" roi="20-30%" color="bg-indigo-600" />
            <ExitCard year="3rd Year" roi="30-40%" color="bg-indigo-700" />
          </div>

          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 text-emerald-950 block md:inline-block px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl shadow-2xl font-black text-lg md:text-xl tracking-tight"
          >
            ROI OVER & ABOVE MARKET OFFER
          </motion.div>
        </div>
      </section>

      {/* ================= CURATED PORTFOLIO ================= */}
      <section className="py-16 md:py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Curated Portfolio</h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <PropertyCard 
              img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              title="Luxury Apartments" 
              tags={["Residential", "Prime"]} 
              bhk="2-4 BHK" 
              price="₹50L - 2Cr" 
            />
            <PropertyCard 
              img="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
              title="Elite Villas" 
              tags={["Signature", "Gated"]} 
              bhk="3-5 BHK" 
              price="₹1Cr - 5Cr" 
            />
            <PropertyCard 
              img="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
              title="Executive Flats" 
              tags={["Modern", "Urban"]} 
              bhk="1-3 BHK" 
              price="₹25L - 1Cr" 
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-12 md:py-24 bg-white px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            className="p-8 md:p-12 rounded-2xl md:rounded-[3rem] bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">Found Your Future Home?</h2>
            <p className="text-sm md:text-lg mb-8 md:mb-10 opacity-80 px-2">Schedule a private viewing with our senior property consultants today.</p>
            <button onClick={() => navigate("/contact")}
             className="w-full sm:w-auto bg-white text-indigo-600 px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg active:scale-95 transition-transform shadow-lg">
              Book a Site Visit
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ icon, title, desc, items }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col h-full"
    >
      <div className="text-3xl md:text-4xl mb-4 md:mb-6">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900">{title}</h3>
      <p className="text-sm md:text-base text-slate-500 mb-6 leading-relaxed flex-grow">{desc}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0" /> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ExitCard({ year, roi, color }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      className={`${color} p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-xl text-center border border-white/10`}
    >
      <h4 className="text-indigo-200 uppercase tracking-widest text-[10px] md:text-sm font-bold mb-2">{year}</h4>
      <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2">{roi}</p>
      <p className="text-indigo-100/60 text-[10px] md:text-xs">Projected Liquidity</p>
    </motion.div>
  );
}

function PropertyCard({ img, title, tags, bhk, price }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span key={i} className="bg-white/90 backdrop-blur-md text-indigo-700 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 md:p-8 text-center flex flex-col flex-grow">
        <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-xs md:text-base text-slate-500 font-medium mb-4">{bhk}</p>
        <div className="bg-slate-50 py-2 md:py-3 rounded-xl md:rounded-2xl mt-auto">
          <p className="text-emerald-600 font-black text-base md:text-xl">{price}</p>
        </div>
      </div>
    </motion.div>
  );
}