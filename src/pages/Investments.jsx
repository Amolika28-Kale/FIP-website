"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  TrendingUp, 
  ShieldCheck, 
  GanttChartSquare, 
  ArrowUpRight, 
  BarChart3, 
  Building2, 
  PieChart, 
  Timer,
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
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/* ================= PAGE ================= */

export default function Investments() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden pt-20 md:pt-28">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden bg-white border-b border-slate-200 px-4 md:px-0">
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#0B2C6F]/10 blur-[80px] md:blur-[140px] rounded-full" 
        />
        <div className="absolute bottom-[-100px] right-[-100px] md:bottom-[-220px] md:right-[-140px] w-[300px] h-[300px] md:w-[520px] md:h-[520px] bg-[#1E40AF]/10 blur-[80px] md:blur-[160px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <motion.div variants={stagger} initial="hidden" animate="visible">

            <motion.div variants={fadeUp} className="mb-6 md:mb-10 flex justify-center">
              <span className="flex items-center gap-2 px-4 md:px-6 py-2 border border-[#0B2C6F]/20 text-[#0B2C6F] text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold bg-slate-50 rounded-full shadow-sm">
                <ShieldCheck size={12} className="animate-pulse" /> Asset Backed 💼
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-7xl md:text-9xl font-light tracking-tighter text-[#0F172A] mb-4 leading-tight"
            >
              Smart <br className="md:hidden" />
              <span className="font-bold text-[#0B2C6F] relative inline-block">
                Investments
                {/* <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none"><path d="M5 15C50 5 150 5 295 15" stroke="#0B2C6F" strokeWidth="4" strokeLinecap="round"/></svg> */}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 md:mt-12 max-w-3xl mx-auto text-base md:text-2xl text-slate-500 leading-relaxed font-medium px-4 md:px-0"
            >
              Strategic opportunities for <span className="text-[#0B2C6F] font-bold underline decoration-blue-200 underline-offset-4">short-term gains</span> and
              wealth creation — structured with absolute transparency. 📈
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-8 md:mt-12 flex justify-center px-4 md:px-0">
               <button onClick={() => navigate("/contact")} className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#0B2C6F] text-white px-8 md:px-10 py-4 md:py-5 font-bold tracking-widest hover:bg-[#1E40AF] transition-all shadow-xl">
                 START INVESTING <ArrowUpRight size={20} />
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY INVEST ================= */}
      <section className="py-16 md:py-32 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <WhyCard
              icon={<ShieldCheck size={28} />}
              index="01"
              title="Asset Backed"
              desc="Every investment is secured against registered property or tangible assets. 🏛️"
            />
            <WhyCard
              icon={<TrendingUp size={28} />}
              index="02"
              title="High Yield Focus"
              desc="Structured opportunities delivering 10%–40% annualized returns. 💰"
            />
            <WhyCard
              icon={<GanttChartSquare size={28} />}
              index="03"
              title="Professional Governance"
              desc="Transparent, compliant, and professionally managed execution. ⚖️"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SLIDING CREDIBILITY STRIP ================= */}
      <section className="py-12 md:py-24 bg-[#F1F5F9] border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
            <h3 className="text-center text-slate-400 uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold">Institutional Portfolio Exposure 🌏</h3>
        </div>
        {/* Container allows for touch-swipe on mobile */}
        <div className="flex overflow-x-auto md:overflow-hidden pb-4 md:pb-0 scrollbar-hide">
          <div className="flex w-max animate-infinite-scroll space-x-4 md:space-x-0">
            {[
              "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=600&auto=format&fit=crop&q=80",
              "https://media.istockphoto.com/id/2198966747/photo/couple-closing-real-estate-contract-with-real-estate-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=MRupwwS_sR21cACmOIEPxd5ykbXbZsxLoc_oKUsaNhc=",
              "https://media.istockphoto.com/id/2208070069/photo/budget-and-financial-planning-concept-calculate-company-income-and-expenses-corporate-finance.webp?a=1&b=1&s=612x612&w=0&k=20&c=uisutdTPwvBk8QQuib-7a4uoukoQcRdokI9HXDZ4hxU=",
              "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1200",
              "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=600&auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1200",
            ].map((img, i) => (
              <div key={i} className="px-2 md:px-4 w-64 md:w-80 h-40 md:h-48 shrink-0">
                <img src={img} className="h-full w-full object-cover rounded-xl  transition-all duration-500 shadow-md" alt="Asset Example" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT OPTIONS ================= */}
      <section className="py-16 md:py-32 bg-[#F1F5F9] px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-black mb-4 text-[#0B2C6F] tracking-tighter">
              Opportunities 📈
            </h2>
            <div className="h-1.5 md:h-2 w-20 md:w-32 bg-[#0B2C6F] rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <InvestmentCard
              icon={<Timer className="text-blue-600" size={20} />}
              rate="20–25% PA"
              title="Short-Term Investments"
              subtitle="Capital-efficient opportunities for faster exits. ⏱️"
              data={{ period: "6–12 Months", asset: "Asset Backed", risk: "Moderate" }}
              features={["Land-based investments", "Residential assets", "Defined timelines", "High liquidity"]}
            />

            <InvestmentCard
              icon={<Building2 className="text-blue-600" size={20} />}
              rate="30–40% PA"
              title="Long-Term Investments"
              subtitle="Appreciation-focused land strategies. 🏔️"
              data={{ period: "3 Years", asset: "Land Assets", risk: "Strategic" }}
              features={["Land acquisition", "Appreciation cycles", "Secure ownership", "Capital growth focus"]}
            />

            <InvestmentCard
              icon={<BarChart3 className="text-blue-600" size={20} />}
              rate="Up to 10% PA"
              title="Monthly Rental Income"
              subtitle="Stable monthly cash flow with appreciation. 🏠"
              data={{ period: "Monthly", asset: "Property", risk: "Low" }}
              features={["Residential rentals", "Predictable income", "Long-term value", "Low volatility"]}
            />

            <InvestmentCard
              icon={<PieChart className="text-blue-600" size={20} />}
              rate="15–20% PA"
              title="Investment Against Shares"
              subtitle="Downside-protected equity participation. 📊"
              data={{ period: "Variable", asset: "Equity", risk: "Balanced" }}
              features={["Assured returns", "Profit participation", "Capital protection", "Aligned interests"]}
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 md:py-40 bg-[#0B2C6F] text-center overflow-hidden px-4 md:px-6">
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-7xl font-bold text-white mb-8 md:mb-12 leading-tight"
          >
            Invest with <span className="italic">confidence</span>. <br className="hidden md:block" /> Grow with <span className="text-blue-400 underline underline-offset-8">discipline.</span> 💎
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="w-full md:w-auto bg-white text-[#0B2C6F] px-10 md:px-16 py-4 md:py-6 font-black tracking-widest text-base md:text-lg shadow-2xl transition-all"
          >
            SPEAK WITH ADVISORS 📞
          </motion.button>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function WhyCard({ index, title, desc, icon }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="bg-white border border-slate-200 p-8 md:p-12 text-center group transition-all duration-500 shadow-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-2 md:p-4 text-[#0B2C6F]/5 font-black text-6xl md:text-7xl transition-colors">
        {index}
      </div>
      <div className="mb-4 md:mb-6 flex justify-center text-[#0B2C6F] transition-colors">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase tracking-tighter">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, features, icon }) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-slate-200 p-6 md:p-10 group hover:border-[#0B2C6F] transition-all flex flex-col shadow-sm hover:shadow-2xl rounded-2xl relative"
    >
      <div className="flex justify-between items-start mb-6 md:mb-8">
        <span className="bg-[#0B2C6F] text-white px-3 md:px-4 py-1.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-md">
          {rate}
        </span>
        <div className="p-2 bg-slate-50 rounded-lg">
          {icon}
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-[#0B2C6F] mb-3 tracking-tight">
        {title}
      </h3>

      <p className="text-slate-500 text-xs md:text-sm mb-6 md:mb-10 font-medium">
        {subtitle}
      </p>

      <div className="grid grid-cols-3 gap-2 md:gap-4 py-4 md:py-6 mb-6 md:mb-10 border-y border-slate-100">
        <Info label="Tenure" value={data.period} />
        <Info label="Asset" value={data.asset} />
        <Info label="Risk" value={data.risk} />
      </div>

      <ul className="space-y-3 md:space-y-4 flex-grow mb-8 md:mb-12">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-slate-600 font-bold">
            <ChevronRight size={14} className="text-[#0B2C6F] shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="w-full group/btn flex items-center justify-center gap-2 border-2 border-[#0B2C6F] text-[#0B2C6F] py-3 md:py-4 font-black tracking-widest hover:bg-[#0B2C6F] hover:text-white transition-all rounded-xl"
      >
        ENQUIRE <ArrowUpRight size={18} />
      </button>
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div className="text-center md:text-left">
      <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-slate-400 mb-1 font-black">
        {label}
      </p>
      <p className="text-[10px] md:text-[13px] font-black text-[#0F172A] truncate">
        {value}
      </p>
    </div>
  );
}