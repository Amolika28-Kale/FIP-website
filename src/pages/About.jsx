"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Users, 
  BarChart4, 
  Handshake, 
  Clock, 
  Search, 
  GraduationCap, 
  ShieldCheck, 
  Rocket,
  ArrowRight,
  Target
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ================= PAGE ================= */
export default function About() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="w-full bg-[#f6f8fc] text-slate-800 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-white border-b border-slate-200 overflow-hidden px-4">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0B2C6D 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto py-20 md:py-32 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-6 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black bg-[#eef2ff] text-[#1E4ED8] rounded-full mb-8 border border-blue-100 shadow-sm"
            >
              🏛️ ABOUT FIP CONSULTANCY 🏛️
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-8xl font-black tracking-tighter text-[#0B2C6D] leading-[0.95]"
            >
              Our <span className="text-[#1E4ED8] italic font-light">Foundation</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-3xl mx-auto mt-10 text-slate-400 text-sm md:text-lg font-bold uppercase tracking-[0.25em] flex flex-wrap justify-center gap-2 md:gap-4"
            >
              Finance <span className="text-blue-200">|</span> Investment <span className="text-blue-200">|</span> Property
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 md:py-32 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-6">
               <div className="h-[2px] w-10 bg-blue-600" />
               <p className="text-xs uppercase tracking-[0.35em] text-[#1E4ED8] font-black">WHO WE ARE 🤔</p>
            </div>

            <h2 className="text-3xl md:text-6xl font-black leading-[1.1] text-[#0B2C6D] mb-8 tracking-tighter">
              Building <br /> Financial Confidence
            </h2>

            <div className="space-y-8 text-slate-600 text-base md:text-xl leading-relaxed">
              <p className="font-medium">
                <strong className="text-[#0B2C6D]">FIP Consultancy</strong> is a
                professional advisory firm helping individuals and businesses
                navigate finance, investments, and property with discipline. 📈
              </p>

              <div className="grid grid-cols-1 gap-4">
                 {[
                   { t: "Transparency", i: <Search size={18}/> },
                   { t: "Security", i: <ShieldCheck size={18}/> },
                   { t: "Long-term Value", i: <Target size={18}/> }
                 ].map((pill, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-[#1E4ED8] font-bold text-sm md:text-base">
                      <span className="p-2 bg-blue-50 rounded-lg">{pill.i}</span>
                      {pill.t}
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: yParallax }} className="relative px-2">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#1E4ED8]/10 to-[#0B2C6D]/10 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
              alt="Team"
              className="relative rounded-[2rem] shadow-2xl w-full transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 md:py-28 bg-[#f6f8fc] px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          <Stat value="1000+" label="Clients Served" icon={<Users className="text-blue-500" />} />
          <Stat value="₹500Cr+" label="Assets Advised" icon={<BarChart4 className="text-blue-500" />} />
          <Stat value="98%" label="Retention" icon={<Handshake className="text-blue-500" />} />
          <Stat value="15+" label="Years Exp" icon={<Clock className="text-blue-500" />} />
        </motion.div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 md:py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs uppercase tracking-[0.5em] text-[#1E4ED8] font-black mb-6">OUR VALUES ✨</h2>
            <h3 className="text-3xl md:text-6xl font-black text-[#0B2C6D] tracking-tighter">What Drives Us</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            <Value index="01" title="Transparency" desc="Clear structures, honest advice, and complete disclosure." icon={<Search size={28}/>} />
            <Value index="02" title="Expertise" desc="Market knowledge backed by experience and research." icon={<GraduationCap size={28}/>} />
            <Value index="03" title="Trust" desc="Long-term partnerships built on integrity." icon={<ShieldCheck size={28}/>} />
            <Value index="04" title="Performance" desc="Focused on risk-managed and sustainable growth." icon={<Rocket size={28}/>} />
          </motion.div>
        </div>
      </section>

      {/* ================= INSIGHTS HORIZONTAL SLIDER ================= */}
      <section className="py-20 md:py-32 bg-[#f6f8fc] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-5xl font-black text-[#0B2C6D] tracking-tighter">Insights & Thinking 📰</h2>
            <div className="hidden md:flex gap-2">
               <div className="w-12 h-1 bg-blue-600 rounded-full" />
               <div className="w-4 h-1 bg-blue-200 rounded-full" />
            </div>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x touch-pan-x">
            {[
              { t: "Market Discipline", d: "Maintaining rigor in shifting economies." },
              { t: "Client-First Advisory", d: "Aligning interest with client goals." },
              { t: "Long-Term Wealth", d: "Building generational financial security." },
              { t: "Asset Security", d: "Protecting the core of every investment." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="min-w-[280px] md:min-w-[380px] snap-start bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-6 p-3 bg-blue-50 w-fit rounded-xl text-blue-600">
                   <Rocket size={24} />
                </div>
                <h4 className="font-black text-xl text-[#0B2C6D] mb-4">{item.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">{item.d}</p>
               
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-24 md:py-40 bg-[#0B2C6D] text-white relative overflow-hidden">
        {/* Animated background pulse */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px]" 
        />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-5xl font-light italic leading-tight tracking-tight"
          >
            “Every financial decision we guide is rooted in <span className="font-black text-blue-400">discipline</span>, 
            responsibility, and <span className="font-black text-blue-400 text-shadow-sm">long-term vision</span>.”
          </motion.p>
          <div className="mt-14 h-[2px] w-28 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label, icon }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <p className="text-3xl md:text-5xl font-black text-[#0B2C6D] mb-2 tracking-tighter">
        {value}
      </p>
      <p className="text-slate-400 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-black">
        {label}
      </p>
    </motion.div>
  );
}

function Value({ index, title, desc, icon }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:shadow-2xl transition-all group"
    >
      <div className="flex items-center justify-between mb-8">
        <span className="text-[#1E4ED8] font-black text-2xl tracking-tighter">{index}</span>
        <div className="text-blue-100 group-hover:text-blue-600 transition-colors duration-500">{icon}</div>
      </div>
      <h3 className="text-sm font-black mb-4 text-[#0B2C6D] uppercase tracking-[0.2em]">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}