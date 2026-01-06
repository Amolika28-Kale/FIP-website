"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const bgImages = [
  "https://media.istockphoto.com/id/2208070069/photo/budget-and-financial-planning-concept-calculate-company-income-and-expenses-corporate-finance.webp",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="w-full bg-white text-gray-900 overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-black/50 to-indigo-950/90" />
        
        {/* Animated Background Blobs - Hidden on very small screens for performance */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-48 md:w-72 h-48 md:h-72 bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mb-6"
            >
              The Pinnacle of Financial Growth
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-9xl font-black tracking-tighter mb-4 leading-none"
            >
              FIP<span className="text-indigo-400"></span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-lg md:text-4xl font-light mb-8 text-blue-100 italic"
            >
              Model <span className="font-bold text-white not-italic">Finance</span> | Investment | Property
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-sm md:text-xl opacity-90 mb-10 leading-relaxed font-light px-4"
            >
              Strategizing your <span className="text-indigo-300 font-medium">Finance</span>, 
              optimizing <span className="text-blue-300 font-medium">Investments</span>, and 
              securing <span className="text-purple-300 font-medium">Property</span>.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="bg-white text-indigo-950 px-10 py-4 rounded-full font-bold shadow-xl text-sm md:text-base"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="border border-white/40 backdrop-blur-sm px-10 py-4 rounded-full font-semibold hover:bg-white/10 text-sm md:text-base transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] md:text-xs tracking-widest uppercase flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/60 to-transparent" />
          Scroll
        </motion.div>
      </section>

      {/* ================= FINANCE SECTION ================= */}
      <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={staggerContainer}
             className="text-center mb-16 md:mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-6xl font-bold mb-4 tracking-tight">Financial Mastery</motion.h2>
            <motion.div variants={fadeInUp} className="h-1 w-16 md:w-24 bg-indigo-600 mx-auto rounded-full mb-6" />
            <motion.p variants={fadeInUp} className="text-gray-500 text-sm md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Custom-built credit architectures and liquidity solutions for individuals and enterprises.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { title: "Personal Loans", desc: "Unsecured credit up to ₹10 Lakhs with elite 7-year tenures.", icon: "💰" },
              { title: "Business Finance", desc: "Growth capital from ₹10 Lakhs to ₹10 Cr via Equity or PMC.", icon: "📈" },
              { title: "Land Finance", desc: "Short-term bridge funding against registered asset documents.", icon: "🏗️" },
              { title: "Gold & Gems", desc: "Immediate liquidity against your most precious physical assets.", icon: "💎" },
              { title: "Export Billing", desc: "International trade finance to keep your operations moving.", icon: "🌍" },
              { title: "Project Funding", desc: "Capital structural engineering for large scale infrastructure.", icon: "🏢" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all group"
              >
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-indigo-950">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= INVESTMENTS SECTION ================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight">Portfolio Tiers</h2>
              <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed">Diversified wealth creation with returns that outperform traditional markets.</p>
            </div>
            <div className="bg-indigo-50 px-6 py-2 rounded-full text-indigo-600 text-xs md:text-sm font-bold tracking-wider">
              MAX ROI UP TO 40%
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { roi: "20-25%", title: "Short Term", dur: "6-12 Mo", color: "bg-blue-600" },
              { roi: "30-40%", title: "Long Term", dur: "3 Year Legacy", color: "bg-indigo-700" },
              { roi: "10%", title: "Monthly Rental", dur: "Passive Yield", color: "bg-slate-900" },
              { roi: "15-20%", title: "Equity Shares", dur: "Variable Growth", color: "bg-emerald-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.5rem] p-8 text-white h-64 flex flex-col justify-end shadow-lg"
              >
                <div className={`absolute inset-0 ${item.color} transition-transform group-hover:scale-110 duration-500`} />
                <div className="relative z-10">
                  <div className="text-4xl font-black mb-1">{item.roi} <span className="text-xs font-normal opacity-70">PA</span></div>
                  <div className="text-lg font-bold">{item.title}</div>
                  <div className="text-white/60 text-xs uppercase tracking-widest mt-1">{item.dur}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPERTY SECTION ================= */}
      <section className="py-20 md:py-32 bg-indigo-950 text-white overflow-hidden px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">Property <br className="hidden md:block" />Architects.</h2>
            <div className="space-y-6">
              {[
                "Strategic Buy & Sell Consultation",
                "Full Legal Verification & Docs",
                "Guaranteed High-Yield Exit Strategies",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="h-2 w-2 rounded-full bg-indigo-500 group-hover:w-8 transition-all duration-300" />
                  <span className="text-base md:text-xl font-light text-indigo-100">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {[
              { year: "Year 1", return: "15-20%" },
              { year: "Year 2", return: "20-30%" },
              { year: "Year 3", return: "30-40%" },
            ].map((box, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] flex justify-between items-center group hover:bg-indigo-600 transition-all duration-500">
                <span className="font-bold text-lg md:text-xl text-indigo-200 group-hover:text-white">{box.year}</span>
                <span className="text-3xl md:text-5xl font-black text-indigo-400 group-hover:text-white">{box.return}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [40, 0] }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl" />
          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Scale Your Wealth with Precision.</h2>
          <button  className="bg-white text-indigo-600 px-12 py-5 rounded-full text-lg md:text-xl font-bold hover:shadow-2xl active:scale-95 transition-all"
          onClick={() => navigate("/contact")}>
            Consult Our Experts
          </button>
        </motion.div>
      </section>

      <footer className="py-10 border-t border-slate-100 text-center text-slate-400 text-[10px] md:text-xs px-6">
        © 2024 FIP Model Finance Investment Property. Strategic wealth management platform.
      </footer>
    </div>
  );
}