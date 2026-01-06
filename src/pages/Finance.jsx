"use client";
import React from "react";
import { motion } from "framer-motion";

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

export default function Finance() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      {/* Mobile: min-h-[50vh], Desktop: h-[60vh] */}
      <section className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center bg-indigo-950 overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 blur-[80px] md:blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 blur-[80px] md:blur-[100px] rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white py-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tight"
            >
              Finance <span className="text-indigo-400">Solutions</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-base md:text-xl opacity-80 leading-relaxed font-light px-4"
            >
              From personal aspirations to global trade—we provide the capital 
              architecture to power your next move.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Precision Financial Products</h2>
            <div className="h-1 w-16 md:w-20 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <FinanceCard
              icon="👤"
              title="Personal Loans"
              desc="Hassle-free loan of up to Rs.10 lakhs without collateral"
              points={["No collateral", "Up to Rs.10 lakhs", "Up to 7 years", "Quick approval"]}
            />
            <FinanceCard
              icon="💼"
              title="Business Finance"
              desc="Comprehensive funding for your business growth"
              points={["Rs.10 L to Rs.10 Cr", "Against Security/Stake", "Equity financing", "PMC Services"]}
            />
            <FinanceCard
              icon="🏞️"
              title="Land Finance"
              desc="Easy finance against land with registered documents"
              points={["Agri Land - 50%", "Residential - 60%", "Commercial - 70%", "6 to 12 months"]}
            />
            <FinanceCard
              icon="✨"
              title="Gold & Gems"
              desc="Glittering finance opportunity on high-value assets"
              points={["Gold/Silver", "Diamond loans", "Precious stones", "Secure valuation"]}
            />
            <FinanceCard
              icon="🛳️"
              title="Export Billing"
              desc="Approved financing for international trade"
              points={["Billing support", "Bank approved", "Trade solutions", "Working capital"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 md:py-24 bg-white overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">Seamless Application Process</h2>
          
          {/* Visualizing the flow for better understanding */}
          

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mt-12">
            {/* Connecting Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-indigo-100 z-0" />
            
            {[
              { step: "01", title: "Apply", desc: "Digital form" },
              { step: "02", title: "Verify", desc: "Authentication" },
              { step: "03", title: "Approve", desc: "Fast decision" },
              { step: "04", title: "Receive", desc: "Direct transfer" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 text-center group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-indigo-600 transition-colors shadow-lg">
                  <span className="text-xl md:text-2xl font-black text-indigo-600">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Common Inquiries</h2>
          <div className="space-y-4">
            <FaqItem q="What is the maximum loan amount?" a="Up to Rs.10 lakhs without collateral for up to 7 years." />
            <FaqItem q="Do I need collateral?" a="No, our personal loans are completely collateral-free." />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-12 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="bg-indigo-600 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Start Your Application</h2>
            <p className="text-sm md:text-lg opacity-80 mb-8 md:mb-10 max-w-xl mx-auto font-light">
              Our experts are ready to build a financial roadmap that fits your life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
              <button onClick={() => navigate("/contact")}
              className="w-full sm:w-auto bg-indigo-500 text-white border border-indigo-400 px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-indigo-400 transition-all">
                Talk to Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function FinanceCard({ icon, title, desc, points }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col h-full transition-shadow hover:shadow-md"
    >
      <div className="text-3xl md:text-4xl mb-4 md:mb-6">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">{title}</h3>
      <p className="text-sm md:text-base text-slate-500 mb-6 flex-grow leading-relaxed">{desc}</p>

      <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
            <span className="text-indigo-600 font-bold shrink-0">✓</span>
            {p}
          </li>
        ))}
      </ul>

      <button onClick={() => navigate("/about")}
       className="w-full bg-slate-50 hover:bg-indigo-600 hover:text-white text-indigo-600 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold transition-all">
        Learn More
      </button>
    </motion.div>
  );
}

function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div 
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100 cursor-pointer"
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="font-bold text-sm md:text-base text-slate-900">{q}</h4>
        <span className={`text-xl md:text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mt-3 md:mt-4 text-xs md:text-sm text-slate-500 leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </motion.div>
  );
}