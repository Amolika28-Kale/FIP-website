"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, Wallet, ShieldCheck, PieChart } from "lucide-react";

/* ================= BRAND ================= */
const COLORS = {
  navy: "#0B2A5B",
  royal: "#1E3A8A",
  bg: "#F8FAFC",
  text: "#0F172A",
  muted: "#475569",
};

const bgImages = [
  "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=1200&auto=format&fit=crop&q=80",
  "https://media.istockphoto.com/id/1136089170/photo/co-working-business-team-consulting-meeting-planning-strategy-and-brainstorming-new-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=CTM3F3k45eQacOdsbpklonmW9Lw5BLlRTQphBYlWYe4=",
  "https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=1200&auto=format&fit=crop&q=80",
];

const blogImages = [
  "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
  "https://images.unsplash.com/photo-1565373677928-90e963765eac?q=80&w=2070",
];

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % bgImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-slate-800 overflow-x-hidden selection:bg-blue-100 selection:text-[#0B2A5B]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#061A3A]/80 backdrop-blur-[2px]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 text-white"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-12 bg-blue-400" />
              <span className="uppercase text-xs tracking-[0.4em] font-bold text-blue-300">
                FIP Consultancy 🏛️
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black mb-4 tracking-tighter">
              FIP <span className="text-blue-400"></span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-3xl font-light text-blue-100/90 mb-8 border-l-4 border-blue-500 pl-6 italic">
              Finance | Investment | Property
            </motion.p>

            <motion.p variants={fadeUp} className="max-w-xl text-lg text-slate-300 leading-relaxed mb-10">
              A comprehensive financial ecosystem designed to support individuals and businesses 
              through <span className="text-white font-semibold underline decoration-blue-500">structured solutions</span> and professionally managed services.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-5">
              <button
                onClick={() => navigate("/contact")}
                className="group relative bg-white text-[#0B2A5B] px-8 py-4 font-bold tracking-tighter flex items-center gap-3 hover:bg-blue-50 transition-all duration-300"
              >
                CONSULT WITH US 🚀
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="group border border-white/30 backdrop-blur-md text-white px-8 py-4 font-bold tracking-tighter hover:bg-white/10 transition-all"
              >
                OUR MODEL 📊
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { v: "₹10Cr+", l: "Capital Facilitated", i: <TrendingUp className="text-blue-400" /> },
              { v: "40%", l: "Target ROI", i: <PieChart className="text-blue-400" /> },
              { v: "7 Years", l: "Loan Tenure", i: <ShieldCheck className="text-blue-400" /> },
              { v: "100+", l: "Trust Partners", i: <Building2 className="text-blue-400" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all"
              >
                <div className="mb-4">{stat.i}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FINANCE SOLUTIONS ================= */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0B2A5B] tracking-tight">
                💼 Finance Solutions
              </h2>
              <p className="text-slate-500 mt-4 max-w-md">Precision-engineered funding for every stage of your growth.</p>
            </motion.div>
          </div>

          <div className="grid gap-4">
            {[
              { t: "Unsecured & Secured Loans up to ₹10 Lakhs", s: "Ideal for retail and individual needs." },
              { t: "Business & Project Finance up to ₹10 Crores", s: "Fueling corporate expansions and infrastructure." },
              { t: "Land & Property Based Funding", s: "Unlock the value of your immovable assets." },
              { t: "Gold, Trade & Export Finance", s: "Global solutions for local businesses." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 20 }}
                className="group bg-white p-8 border-l-4 border-slate-200 hover:border-[#0B2A5B] shadow-sm hover:shadow-xl transition-all flex items-center justify-between cursor-default"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0B2A5B] group-hover:text-blue-600 transition-colors">{item.t}</h3>
                  <p className="text-slate-500 text-sm mt-1">{item.s}</p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="text-[#0B2A5B]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT CARDS ================= */}
      <section className="py-32 bg-[#0B2A5B] relative overflow-hidden">
        {/* Animated Background Element */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl md:text-6xl font-bold text-white mb-6">
              Investment Tiers 📈
            </motion.h2>
            <div className="h-1 w-24 bg-blue-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["20–25%", "Short-Term Returns", "⏱️"],
              ["30–40%", "Land Investments", "🏔️"],
              ["10%", "Rental Yield", "🏠"],
              ["15–20%", "Shares-Backed", "📊"],
            ].map(([val, label, emoji], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl text-center hover:bg-white/20 transition-all"
              >
                <span className="text-4xl mb-4 block">{emoji}</span>
                <h3 className="text-4xl font-black text-white mb-2">{val}</h3>
                <p className="text-blue-200 uppercase tracking-widest text-xs font-bold">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPERTY ADVISORY ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0B2A5B] mb-8 leading-tight">
              Property <br /> Advisory 🏢
            </h2>
            <div className="space-y-4">
              {[
                "Sale & Purchase Advisory",
                "Rental Income & Asset Management",
                "Assured Exit Strategies",
                "Fully Registered Transactions",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-[#0B2A5B] group-hover:text-white transition-all">
                    <Building2 size={20} />
                  </div>
                  <span className="text-lg font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#0B2A5B] p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <ShieldCheck className="text-white/20 w-32 h-32" />
            </div>
            <h3 className="text-white/60 uppercase tracking-[0.3em] text-xs font-bold mb-8">Why FIP? ⭐</h3>
            <ul className="space-y-6">
              {[
                "Integrated Financial Ecosystem",
                "Asset-Backed & ROI-Defined",
                "Professionally Managed",
                "Transparent & Compliant",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-white text-xl font-semibold">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-[#0B2A5B]">🧠 Market Insights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
              >
                <div className="h-64 overflow-hidden">
                  <img src={img} alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Finance • Advisory</span>
                  <h3 className="text-xl font-bold text-[#0B2A5B] mt-3 group-hover:text-blue-700 transition-colors">Strategic Financial Planning for Long-Term Growth</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto bg-[#0B2A5B] rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Trusted by investors. <br /> Built for long-term wealth. 💎
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-white text-[#0B2A5B] px-12 py-5 rounded-full font-black tracking-tighter text-lg hover:bg-blue-50 transition-all shadow-xl shadow-black/20"
            >
              CONNECT WITH FIP NOW
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}