"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ShieldCheck, 
  Briefcase, 
  Landmark, 
  BadgePercent, 
  ArrowRight, 
  FileCheck, 
  Coins, 
  BarChart3,
  ChevronRight,
  Settings
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
  visible: { transition: { staggerChildren: 0.15 } },
};

const iconHover = {
  initial: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 5, color: "#1E3A8A" }
};

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] text-slate-800 overflow-x-hidden pt-24">

      {/* ================= HERO – BOARDROOM FINANCE ================= */}
      <section className="relative min-h-[75vh] flex items-center bg-white border-b border-slate-200 overflow-hidden">
        {/* Animated ambient glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#1E3A8A]/10 blur-[140px]" 
        />
        <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-[#0B2A5B]/10 blur-[160px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="h-px w-14 bg-[#1E3A8A]" />
              <span className="uppercase text-[10px] sm:text-xs tracking-[0.5em] font-bold text-[#1E3A8A] flex items-center gap-2">
                <ShieldCheck size={14} /> FIP FINANCE ADVISORY 
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-7xl md:text-8xl font-light leading-[1.1] text-[#0F172A] tracking-tight"
            >
              Structured <br />
              <span className="font-bold text-[#0B2A5B] italic">
                Finance Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed font-medium"
            >
              Capital solutions designed with discipline, compliance, and
              asset-backed security — serving individuals, enterprises,
              and institutional investors. 
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-10">
               <button 
                onClick={() => navigate("/contact")}
                className="group flex items-center gap-3 bg-[#0B2A5B] text-white px-8 py-4 font-bold tracking-widest hover:bg-[#1E3A8A] transition-all"
               >
                 EXPLORE CAPITAL SOLUTIONS <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= FINANCE CAPABILITIES ================= */}
      <section className="py-20 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-16"
          >
            <h2 className="text-4xl sm:text-6xl font-black text-[#0B2A5B] tracking-tighter">
              Capabilities
            </h2>
            <div className="h-px flex-1 bg-slate-200 hidden md:block" />
          </motion.div>

          <div className="grid gap-12">
            {[
              {
                title: "Personal & Secured Loans",
                icon: <Coins className="text-[#0B2A5B]" size={32} />,
                desc: "Flexible financing solutions with simplified approvals for immediate liquidity.",
                items: ["Up to ₹10 Lakhs", "Unsecured & secured", "7 Year Tenure", "Fast Sanction"],
              },
              {
                title: "Business & Project Finance",
                icon: <Briefcase className="text-[#0B2A5B]" size={32} />,
                desc: "Growth capital structured for execution and global scale.",
                items: ["₹10L to ₹10Cr", "Equity Participation", "PMC-based models", "Institutional docs"],
              },
              {
                title: "Land & Property Finance",
                icon: <Landmark className="text-[#0B2A5B]" size={32} />,
                desc: "Short-term liquidity against registered immovable assets.",
                items: ["6–12 Month Tenure", "Land funding: 50%", "Residential: 60%", "Commercial: 70%"],
              },
              {
                title: "Trade & Asset Finance",
                icon: <BarChart3 className="text-[#0B2A5B]" size={32} />,
                desc: "Working capital and asset-backed liquidity for global trade.",
                items: ["Export Finance", "Gold funding", "Invoice Structuring", "Bank Aligned"],
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="group relative grid md:grid-cols-12 gap-8 items-start p-8 rounded-2xl hover:bg-[#F8FAFC] transition-all border border-transparent hover:border-slate-200"
              >
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <motion.div 
                    variants={iconHover}
                    whileHover="hover"
                    className="p-4 bg-slate-100 rounded-xl"
                  >
                    {block.icon}
                  </motion.div>
                </div>

                <div className="md:col-span-11">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0B2A5B] transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg max-w-3xl">
                    {block.desc}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {block.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                        <div className="w-1.5 h-1.5 bg-[#1E3A8A] rounded-full" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 hidden lg:block transition-opacity">
                  <ChevronRight size={40} className="text-slate-200" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXECUTION MODEL (Horizontal Slider feel) ================= */}
      <section className="py-24 sm:py-32 bg-[#F1F5F9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20 text-center"
          >
           <h2 className="flex items-center gap-4 text-4xl sm:text-6xl font-bold text-[#0B2A5B] mb-4">
  <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-[#0B2A5B]" />
  Execution Framework
</h2>

            <p className="text-slate-500 font-medium">A standardized 4-step process for capital delivery.</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6">
            {[
              { t: "Requirement Analysis", d: "Deep dive into funding objectives & cash flow.", i: <BarChart3 /> },
              { t: "Documentation", d: "KYC, compliance & asset verification.", i: <FileCheck /> },
              { t: "Structuring", d: "Risk-aligned financial engineering.", i: <BadgePercent /> },
              { t: "Disbursement", d: "Fast-track capital release & monitoring.", i: <Coins /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.02, backgroundColor: "#0B2A5B", color: "#fff" }}
                className="flex-1 bg-white p-10 shadow-xl border-t-4 border-[#0B2A5B] transition-all group"
              >
                <div className="text-5xl font-black opacity-10 mb-6 group-hover:opacity-20">0{i + 1}</div>
                <div className="mb-6 p-3 bg-slate-50 rounded-lg w-fit text-[#0B2A5B] group-hover:bg-white/10 group-hover:text-white">
                  {step.i}
                </div>
                <h4 className="text-xl font-bold mb-3">
                  {step.t}
                </h4>
                <p className="text-slate-500 group-hover:text-blue-100 text-sm leading-relaxed">
                  {step.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-24 sm:py-36 bg-[#0B2A5B] text-center overflow-hidden">
        {/* Animated Light Sweep */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-12 leading-tight"
          >
            Capital structured <br /> with <span className="text-blue-400">absolute confidence.</span>
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0B2A5B] px-12 py-5 font-black tracking-[0.2em] shadow-2xl hover:bg-slate-50 transition-all text-sm sm:text-base"
          >
            SPEAK WITH AN ADVISOR 📞
          </motion.button>
        </div>
      </section>

    </div>
  );
}