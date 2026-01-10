"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ================= BRAND ================= */
const COLORS = {
  navy: "#0B2A5B",
  royal: "#1E3A8A",
  bg: "#F8FAFC",
  text: "#0F172A",
  muted: "#475569",
};

const bgImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973",
];

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const floatSlow = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % bgImages.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F8FAFC] text-slate-800 overflow-x-hidden">

{/* ======================================================
  HERO – BOARDROOM STYLE (RESPONSIVE)
====================================================== */}
<section className="relative min-h-screen flex items-center overflow-hidden">

  {/* BACKGROUND SLIDER */}
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${bgImages[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "saturate(0.9) brightness(0.78)",
      }}
    />
  </AnimatePresence>

  {/* DARK FINANCE OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#061A3A]/95 via-[#061A3A]/85 to-[#061A3A]/40" />

  {/* SOFT TOP LIGHT */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/20" />

  {/* BRAND AURA */}
  <motion.div
    variants={floatSlow}
    animate="animate"
    className="absolute -right-48 top-1/3 w-[520px] h-[520px] bg-[#1E3A8A]/20 blur-3xl rounded-full hidden md:block"
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 py-24 md:py-32">

    {/* LEFT – GLASS CONTENT PANEL */}
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="
        bg-white/90 backdrop-blur-xl
        p-8 sm:p-10 md:p-14
        border border-white/60
        shadow-2xl
        max-w-xl
      "
    >

      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 sm:mb-10">
        <span className="h-px w-10 sm:w-16 bg-[#0B2A5B]" />
        <span className="uppercase text-[10px] sm:text-xs tracking-[0.35em] font-semibold text-[#0B2A5B]">
          FIP Consultancy
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-none text-[#0B2A5B]"
      >
        FIP
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-semibold text-slate-800"
      >
        Finance | Investment | Property
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed"
      >
        The FIP Model is a comprehensive financial ecosystem designed to support
        individuals, businesses, and investors through structured finance
        solutions, high-yield investments, and professionally managed property services.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6"
      >
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#0B2A5B] text-white px-10 sm:px-14 py-3 sm:py-4 font-semibold tracking-widest hover:bg-[#1E3A8A] transition"
        >
          CONSULT WITH US
        </button>

        <button
          onClick={() => navigate("/about")}
          className="border border-[#0B2A5B] px-10 sm:px-14 py-3 sm:py-4 font-semibold tracking-widest text-[#0B2A5B] hover:bg-[#F1F5F9] transition"
        >
          OUR MODEL
        </button>
      </motion.div>
    </motion.div>

    {/* RIGHT – TRUST METRICS (DESKTOP ONLY) */}
    <motion.div
      variants={floatSlow}
      animate="animate"
      className="hidden lg:grid grid-cols-2 gap-8 self-center"
    >
      {[
        ["₹10Cr+", "Capital Facilitated"],
        ["40%", "Target ROI"],
        ["7 Years", "Loan Tenure"],
        ["100+", "Clients & Investors"],
      ].map(([value, label]) => (
        <div
          key={label}
          className="bg-white/90 backdrop-blur border border-white/60 p-8 shadow-xl"
        >
          <h3 className="text-4xl font-bold text-[#0B2A5B]">{value}</h3>
          <p className="uppercase tracking-widest text-xs mt-2 text-slate-500">
            {label}
          </p>
        </div>
      ))}
    </motion.div>

  </div>
</section>


{/* ======================================================
  FINANCE – RESPONSIVE & PREMIUM
====================================================== */}
<section className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* SECTION TITLE */}
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      className="
        text-3xl sm:text-4xl md:text-5xl
        font-bold
        mb-12 sm:mb-20
        text-[#0B2A5B]
      "
    >
      Finance Solutions
    </motion.h2>

    {/* TIMELINE WRAPPER */}
    <div className="relative">

      {/* Vertical Line – Desktop Only */}
      <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-slate-300" />

      <div className="space-y-8 sm:space-y-12">
        {[
          "Unsecured & Secured Loans up to ₹10 Lakhs",
          "Business & Project Finance up to ₹10 Crores",
          "Land & Property Based Funding",
          "Gold, Trade & Export Finance",
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="relative flex gap-6"
          >
            {/* DOT */}
            <div className="relative z-10">
              <span className="
                hidden md:block
                w-3 h-3 mt-6
                bg-gradient-to-br from-[#0B2A5B] to-[#1E3A8A]
                rounded-full
              " />
            </div>

            {/* CARD */}
            <div className="
              w-full
              bg-white
              border border-slate-200
              p-6 sm:p-8
              shadow-sm
              hover:shadow-lg
              transition
            ">
              <p className="
                text-sm sm:text-base md:text-lg
                font-medium
                text-slate-800
                leading-relaxed
              ">
                {item}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>


{/* ======================================================
  INVESTMENTS – RESPONSIVE & PREMIUM
====================================================== */}
<section className="py-20 sm:py-28 bg-[#F1F5F9] border-y border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    {/* SECTION TITLE */}
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      className="
        text-3xl sm:text-4xl md:text-5xl
        font-bold
        mb-12 sm:mb-20
        text-[#0B2A5B]
      "
    >
      Investment Opportunities
    </motion.h2>

    {/* INVESTMENT CARDS */}
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-6 sm:gap-10
    ">
      {[
        ["20–25%", "Short-Term Returns"],
        ["30–40%", "Land Investments"],
        ["10%", "Rental Yield"],
        ["15–20%", "Shares-Backed"],
      ].map(([val, label]) => (
        <motion.div
          key={label}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -6 }}
          className="
            bg-white
            border border-slate-200
            p-8 sm:p-10
            shadow-sm
            hover:shadow-xl
            transition
          "
        >
          {/* VALUE */}
          <h3 className="
            text-4xl sm:text-5xl
            font-bold
            text-[#0B2A5B]
          ">
            {val}
          </h3>

          {/* ACCENT LINE */}
          <div className="w-12 h-px bg-[#0B2A5B]/40 my-4" />

          {/* LABEL */}
          <p className="
            text-sm sm:text-base
            text-slate-600
            font-medium
          ">
            {label}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


{/* ======================================================
  PROPERTY – RESPONSIVE & PREMIUM
====================================================== */}
<section className="py-20 sm:py-28 bg-white border-y border-slate-200">
  <div className="
    max-w-7xl mx-auto px-4 sm:px-6
    grid grid-cols-1 lg:grid-cols-2
    gap-12 lg:gap-20
  ">

    {/* LEFT – PROPERTY SERVICES */}
    <div>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold
          mb-8 sm:mb-10
          text-[#0B2A5B]
        "
      >
        Property Advisory
      </motion.h2>

      <ul className="space-y-5 sm:space-y-6">
        {[
          "Sale & Purchase Advisory",
          "Rental Income & Asset Management",
          "Assured Exit Strategies",
          "Fully Registered Transactions",
        ].map((item) => (
          <motion.li
            key={item}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="flex items-start gap-4 text-slate-700 text-base sm:text-lg"
          >
            <span className="
              mt-1
              w-2.5 h-2.5
              bg-[#0B2A5B]
              rounded-full
              shrink-0
            " />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>

    {/* RIGHT – WHY FIP */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      className="
        bg-[#0B2A5B]
        text-white
        p-10 sm:p-14
        shadow-xl
        relative
        overflow-hidden
      "
    >
      {/* subtle brand glow */}
      <div className="
        absolute -top-20 -right-20
        w-64 h-64
        bg-white/10
        blur-3xl
        rounded-full
      " />

      <h4 className="
        uppercase tracking-[0.3em]
        text-xs
        mb-8
        text-white/80
        relative
      ">
        Why FIP
      </h4>

      <ul className="space-y-5 sm:space-y-6 relative">
        {[
          "Integrated Financial Ecosystem",
          "Asset-Backed & ROI-Defined",
          "Professionally Managed",
          "Transparent & Compliant",
        ].map((item) => (
          <li
            key={item}
            className="flex items-start gap-4 text-base sm:text-lg font-medium"
          >
            <span className="
              mt-1.5
              w-2.5 h-2.5
              bg-white
              rounded-full
              shrink-0
            " />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>

  </div>
</section>


{/* ======================================================
  CTA – PREMIUM & RESPONSIVE
====================================================== */}
<section className="
  relative
  py-20 sm:py-28
  bg-[#0B2A5B]
  text-center
  overflow-hidden
">

  {/* subtle moving light */}
  <motion.div
    animate={{ x: ["-120%", "120%"] }}
    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
    className="
      absolute inset-0
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
    "
  />

  {/* brand glow */}
  <div className="
    absolute -top-24 left-1/2 -translate-x-1/2
    w-[500px] h-[500px]
    bg-[#1E3A8A]/30
    blur-3xl
    rounded-full
  " />

  <div className="relative z-10 max-w-4xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        text-3xl sm:text-4xl md:text-5xl
        font-bold
        text-white
        mb-10
        leading-tight
      "
    >
      Trusted by investors. <br className="hidden sm:block" />
      Built for long-term wealth.
    </motion.h2>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate("/contact")}
      className="
        bg-white
        text-[#0B2A5B]
        px-10 sm:px-16
        py-4 sm:py-5
        font-semibold
        tracking-widest
        text-sm sm:text-base
        shadow-xl
        hover:bg-[#F8FAFC]
        transition
      "
    >
      CONNECT WITH FIP
    </motion.button>

  </div>
</section>


    </div>
  );
}
