"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Building2, 
  Search, 
  Key, 
  TrendingUp, 
  ArrowUpRight, 
  ShieldCheck, 
  UserCheck, 
  GanttChartSquare,
  ChevronRight
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Property() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden pt-20 md:pt-28 selection:bg-blue-100">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden bg-white border-b border-slate-200 px-4">
        
        {/* Parallax Architectural Backdrop */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
            alt="Property Advisory"
            className="w-full h-full object-cover opacity-[0.08] scale-110"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            
            <motion.div variants={fadeUp} className="mb-6 md:mb-10 flex justify-center">
              <span className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#0B2C6F] bg-white border-2 border-[#0B2C6F]/10 rounded-full shadow-sm">
                <Building2 size={12} className="animate-bounce" /> Property Advisory 🏠
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl md:text-9xl font-light tracking-tighter text-[#0F172A] leading-none"
            >
              Profitable <br />
              <span className="font-black text-[#0B2C6F] italic relative inline-block">
                Investments
                <motion.span 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  className="absolute bottom-1 md:bottom-2 left-0 h-1 md:h-2 bg-blue-100 -z-10" 
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-12 max-w-3xl mx-auto text-base md:text-2xl text-slate-500 leading-relaxed font-medium px-2"
            >
              End-to-end real estate advisory focused on <span className="text-[#0B2C6F] font-bold">profitability</span>,
              regulatory compliance, and asset security. 🏛️
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 md:mt-12 flex justify-center">
               <button 
                onClick={() => navigate("/contact")} 
                className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-[#0B2C6F] text-white px-8 md:px-10 py-4 md:py-5 font-bold tracking-widest hover:bg-[#1E40AF] transition-all shadow-xl"
               >
                 CONSULT AN EXPERT <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 md:py-32 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-4"
          >
            <div className="text-left">
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#0B2C6F] font-black mb-2">
                Real Estate Lifecycle 🔄
              </h2>
              <h3 className="text-3xl md:text-6xl font-black text-[#0B2C6F] tracking-tighter">
                Advisory & Management
              </h3>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10 mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              index="01"
              icon={<Search size={24} />}
              emoji="📑"
              title="Buy & Sell Advisory"
              desc="Strategic guidance across residential and commercial transactions. 🤝"
              items={["Residential & commercial sales", "Price negotiation", "Legal coordination"]}
            />
            <ServiceCard
              index="02"
              icon={<UserCheck size={24} />}
              emoji="💰"
              title="Rental Income"
              desc="Optimized rental yield with complete asset oversight. 💳"
              items={["Rental planning", "Tenant sourcing", "Asset management"]}
            />
            <ServiceCard
              index="03"
              icon={<TrendingUp size={24} />}
              emoji="📈"
              title="Capital Strategy"
              desc="Planned growth approach for long-term wealth creation. 💎"
              items={["Location selection", "Market timing", "Exit strategy planning"]}
            />
          </div>
        </div>
      </section>

      {/* ================= RETURNS MODEL ================= */}
      <section className="py-16 md:py-36 bg-[#F1F5F9] border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#0B2C6F] bg-blue-50 px-4 py-2 rounded-full border border-blue-100 inline-block">
            🔒 Assured Exit Model
          </motion.span>

          <h2 className="text-3xl md:text-7xl font-black text-[#0B2C6F] mt-6 md:mt-8 mb-12 md:mb-20 tracking-tighter italic">
            Structured Returns
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <ExitCard year="YEAR 01" roi="15–20%" desc="Early appreciation phase 🚀" />
            <ExitCard year="YEAR 02" roi="20–30%" desc="Growth acceleration phase ⚡" />
            <ExitCard year="YEAR 03" roi="30–40%" desc="Optimized exit window 🏁" />
          </div>

          <div className="mt-12 md:mt-20 p-6 md:p-8 bg-white border border-slate-200 inline-block shadow-sm w-full md:w-auto">
             <p className="text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-widest leading-relaxed flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center">
               <ShieldCheck size={20} className="text-[#0B2C6F] shrink-0" />
               Acquisition Optimization & Strategically Timed Exits
             </p>
          </div>
        </div>
      </section>

      {/* ================= INSIGHTS TICKER ================= */}
      <section className="py-16 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-16 flex items-center justify-between">
          <h2 className="text-2xl md:text-5xl font-black text-[#0B2C6F] tracking-tighter">
            Insights 📰
          </h2>
          <div className="flex gap-1 md:gap-2">
             <div className="w-8 md:w-12 h-1 bg-[#0B2C6F]" />
             <div className="w-3 md:w-4 h-1 bg-slate-200" />
          </div>
        </div>

        {/* This container scrolls on touch devices and animates on desktop */}
        <div className="flex overflow-x-auto md:overflow-hidden pb-8 px-4 md:px-6 scrollbar-hide">
          <div className="flex md:animate-infinite-scroll gap-4 md:gap-8 w-max">
            {["Market Trends", "Rental Strategy", "Exit Timing", "Compliance", "Outlook"].map(
              (item, i) => (
                <div key={i} className="bg-[#F8FAFC] border-2 border-slate-100 p-8 md:p-12 w-[280px] md:w-[350px] shrink-0 group hover:border-[#0B2C6F] transition-all">
                  <GanttChartSquare className="mb-4 md:mb-6 text-slate-300 group-hover:text-[#0B2C6F]" size={28} />
                  <h4 className="font-black text-xl md:text-2xl text-[#0B2C6F] mb-3 md:mb-4">{item}</h4>
                  <p className="text-xs md:text-sm text-slate-500 font-medium">Data-driven property decisions in a volatile market.</p>
                  <div className="mt-4 md:mt-6 flex items-center gap-2 text-[9px] font-bold text-blue-600 uppercase tracking-widest">
                    Read Analysis <ArrowUpRight size={12} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= WHY FIP ================= */}
      <section className="py-20 md:py-40 bg-[#0B2C6F] text-white relative overflow-hidden px-4">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-black mb-10 md:mb-16 tracking-tighter leading-tight">
            Why FIP <br /><span className="text-blue-400 italic font-light text-3xl md:text-6xl">Property Model</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left mb-12 md:mb-20">
            {[
              "Finance & property ecosystem",
              "Transparent ROI structures",
              "Asset-backed & managed",
              "Legally compliant execution"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="bg-blue-500 p-1.5 rounded-lg"><Key size={16} /></div>
                <span className="font-bold text-base md:text-lg tracking-tight">{text}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto bg-white text-[#0B2C6F] px-10 md:px-16 py-4 md:py-6 font-black tracking-widest hover:bg-slate-100 transition shadow-2xl text-base md:text-lg"
          >
            CONSULT ADVISOR 📞
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ index, icon, title, desc, items }) {
  return (
    <div className="group bg-white border-2 border-slate-100 p-8 md:p-12 hover:border-[#0B2C6F] transition-all shadow-sm relative overflow-hidden">
      <div className="absolute -top-2 -right-2 p-4 text-[#0B2C6F]/5 font-black text-6xl md:text-8xl">{index}</div>
      <div className="p-3 md:p-4 bg-slate-50 rounded-xl w-fit mb-6 group-hover:bg-[#0B2C6F] group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-black text-[#0B2C6F] mb-3 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-xs md:text-sm mb-6 leading-relaxed font-medium">{desc}</p>
      <div className="space-y-2 md:space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-700">
            <div className="w-1 h-1 bg-blue-600 rounded-full" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExitCard({ year, roi, desc }) {
  return (
    <div className="bg-white border-2 border-slate-100 p-8 md:p-12 hover:shadow-xl transition-all text-left md:text-center relative group">
      <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-slate-400 mb-4 group-hover:text-[#0B2C6F]">{year}</h4>
      <p className="text-4xl md:text-6xl font-black text-[#0F172A] mb-2 tracking-tighter">{roi}</p>
      <p className="text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">{desc}</p>
    </div>
  );
}