"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp, Building2, Wallet, ShieldCheck, PieChart, Rocket, BarChart3,Landmark, Briefcase, Newspaper, Clock, HomeIcon, LineChart, LucideTrendingUp   } from "lucide-react";

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
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
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
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-[3px]" />
    </motion.div>
  </AnimatePresence>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center pt-24">
    
    {/* ================= LEFT CONTENT ================= */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="lg:col-span-7 text-[#0B2C6F]"
    >
<motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
  <span className="h-[2px] w-12 bg-blue-600" />

  <span className="flex items-center gap-2 uppercase text-xs tracking-[0.4em] font-bold text-blue-700">
    <Landmark className="w-4 h-4" />
    FIP Consultancy
  </span>
</motion.div>


      <motion.h1
        variants={fadeUp}
        className="text-5xl md:text-7xl font-black mb-4 tracking-tighter"
      >
        FIP <span className="text-blue-700">Consultancy</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-lg md:text-2xl font-medium text-slate-600 mb-8 border-l-4 border-blue-600 pl-6"
      >
        Finance | Investment | Property
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="max-w-xl text-base md:text-lg text-slate-600 leading-relaxed mb-10"
      >
        A comprehensive financial ecosystem designed to support individuals and businesses
        through <span className="text-[#0B2C6F] font-semibold underline decoration-blue-600">
          structured solutions
        </span> and professionally managed services.
      </motion.p>

<motion.div variants={fadeUp} className="flex flex-wrap gap-5">
  <button
    onClick={() => navigate("/contact")}
    className="group bg-[#0B2C6F] text-white px-8 py-4 font-bold tracking-tight flex items-center gap-3 hover:bg-blue-700 transition-all"
  >
    <Rocket className="w-4 h-4" />
    CONSULT WITH US
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </button>

  <button
    onClick={() => navigate("/about")}
    className="group border border-[#0B2C6F]/30 text-[#0B2C6F] px-8 py-4 font-bold tracking-tight flex items-center gap-3 hover:bg-[#0B2C6F] hover:text-white transition-all"
  >
    <BarChart3 className="w-4 h-4" />
    OUR MODEL
  </button>
</motion.div>

    </motion.div>

    {/* ================= RIGHT STATS ================= */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4"
    >
      {[
        { v: "₹10Cr+", l: "Capital Facilitated", i: <TrendingUp className="text-blue-600" /> },
        { v: "40%", l: "Target ROI", i: <PieChart className="text-blue-600" /> },
        { v: "7 Years", l: "Loan Tenure", i: <ShieldCheck className="text-blue-600" /> },
        { v: "100+", l: "Trust Partners", i: <Building2 className="text-blue-600" /> },
      ].map((stat, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8 }}
          className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all"
        >
          <div className="mb-4">{stat.i}</div>
          <div className="text-3xl font-bold text-[#0B2C6F] mb-1">{stat.v}</div>
          <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            {stat.l}
          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

      {/* ================= FINANCE SOLUTIONS ================= */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <h2 className="flex items-center gap-3 text-4xl md:text-6xl font-bold text-[#0B2A5B] tracking-tight">
    <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-[#0B2A5B]" />
    Finance Solutions
  </h2>

  <p className="text-slate-500 mt-4 max-w-md">
    Precision-engineered funding for every stage of your growth.
  </p>
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
      <section className="py-32 bg-[#0B2A5B]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-20">
            Investment Tiers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { v: "20–25%", l: "Short-Term Returns", i: Clock },
              { v: "30–40%", l: "Land Investments", i: Landmark },
              { v: "10%", l: "Rental Yield", i: HomeIcon },
              { v: "15–20%", l: "Shares-Backed", i: LineChart },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/10 border border-white/20 p-10 text-center rounded-3xl"
              >
                <item.i className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-4xl font-black text-white">{item.v}</h3>
                <p className="text-blue-200 text-xs uppercase tracking-widest font-bold mt-2">
                  {item.l}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPERTY ADVISORY ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="flex items-center gap-4 text-4xl md:text-6xl font-bold text-[#0B2A5B] mb-8 leading-tight">
  <Building2 className="w-8 h-8 md:w-10 md:h-10 text-[#0B2A5B]" />
  <span>
    Property <br /> Advisory
  </span>
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
<h3 className="flex items-center gap-3 text-white/60 uppercase tracking-[0.3em] text-xs font-bold mb-8">
  <ShieldCheck className="w-4 h-4 text-white/40" />
  Why FIP?
</h3>
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
            <h2 className="text-4xl font-bold text-[#0B2A5B] flex items-center gap-3">
              <Newspaper className="w-8 h-8" />
               Market Insights
               </h2>
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
           <h2 className="flex flex-col items-center gap-4 text-4xl md:text-6xl font-bold text-white mb-8">
  <LucideTrendingUp className="w-10 h-10 text-blue-300" />
  <span>
    Trusted by investors. <br /> Built for long-term wealth.
  </span>
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