"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Zap, BarChart3, Users } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Contact() {
  return (
    <div className="w-full bg-[#0a0c10] text-slate-200 overflow-x-hidden pt-20">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative py-20 md:py-32 bg-slate-950 overflow-hidden border-b border-white/5 px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f59e0b10_0%,transparent_50%)]" 
        />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block">Communication Protocol</span>
            <h1 className="text-5xl md:text-8xl font-light mb-6 tracking-tighter text-white leading-none">
              Consult a <span className="text-amber-500 font-bold">Principal.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Initiate a confidential discussion regarding your capital requirements, 
              investment portfolio, or property acquisition strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-24 bg-[#0f1218] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* LUXURY CONTACT FORM */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 p-8 md:p-16 border border-white/5 rounded-sm shadow-2xl order-2 lg:order-1"
            >
              <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] mb-10">Private Inquiry</h2>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormInput label="Full Name" type="text" placeholder="Individual / Entity Name" />
                  <FormInput label="Corporate Email" type="email" placeholder="name@entity.com" />
                </div>
                <FormInput label="Direct Line" type="tel" placeholder="+91 XXX XXX XXXX" />
                
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Nature of Inquiry</label>
                  <textarea
                    rows="5"
                    placeholder="Brief summary of capital objectives..."
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-white text-sm font-light resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-amber-500 text-slate-950 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.3em] transition-all"
                >
                  Initiate Consultation
                </motion.button>
              </form>
            </motion.div>

            {/* INSTITUTIONAL INFO */}
            <div className="space-y-16 order-1 lg:order-2">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-10"
              >
                <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold">Direct Channels</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <ContactIconCard icon={<Phone size={20}/>} title="Voice Protocol" info="+91 XXX XXX XXXX" sub="9 AM - 6 PM IST" />
                  <ContactIconCard icon={<Mail size={20}/>} title="Secure Mail" info="advisory@fipwealth.com" sub="24/7 Monitoring" />
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-slate-950 p-10 md:p-14 border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl" />
                <h3 className="text-xl font-bold mb-10 text-white tracking-tight">The FIP Advantage</h3>
                <ul className="space-y-6">
                  <WhyItem icon={<ShieldCheck size={16}/>} text="Sovereign asset registration in client name." />
                  <WhyItem icon={<BarChart3 size={16}/>} text="Institutional grade ROI benchmarks." />
                  <WhyItem icon={<Zap size={16}/>} text="Accelerated 48-hour capital disbursement." />
                  <WhyItem icon={<Users size={16}/>} text="Dedicated multi-disciplinary advisory team." />
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW DIAGRAM ================= */}
      <section className="py-24 bg-white text-slate-950 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <h4 className="text-[10px] font-black text-amber-600 mb-6 uppercase tracking-[0.4em]">Operational Pipeline</h4>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">Data-Driven Communication</h3>
            
            [Image of professional financial communication workflow diagram showing steps: Inquiry, Principal Assignment, Compliance Audit, Structured Proposal]

            <p className="mt-16 text-xs text-slate-400 font-mono tracking-widest uppercase italic">Optimized for privacy and execution velocity.</p>
        </div>
      </section>

      <footer className="py-12 bg-[#0a0c10] text-center border-t border-white/5 px-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em]">
            Authorized Personnel Only — Confidential Channel
          </p>
      </footer>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function FormInput({ label, type, placeholder }) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-white text-sm font-light"
      />
    </div>
  );
}

function ContactIconCard({ icon, title, info, sub }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group p-6 border-l border-white/5 hover:border-amber-500 transition-all duration-500"
    >
      <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-lg font-bold text-white mb-1 break-words tracking-tight">{info}</p>
      <p className="text-[10px] text-slate-600 font-mono">{sub}</p>
    </motion.div>
  );
}

function WhyItem({ icon, text }) {
  return (
    <motion.li variants={fadeInUp} className="flex items-center gap-4 text-xs font-light text-slate-400 group">
      <div className="text-amber-500 group-hover:scale-125 transition-transform duration-300 shrink-0">{icon}</div>
      <span className="group-hover:text-white transition-colors">{text}</span>
    </motion.li>
  );
}