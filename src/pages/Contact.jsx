"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ShieldCheck,
  Zap,
  BarChart3,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } }
};

/* ================= PAGE ================= */

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F6F8FC] text-slate-800 overflow-x-hidden pt-20">

      {/* ================= HERO ================= */}
      <section className="relative bg-white border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E4ED8]/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block mb-8 px-6 py-2 text-[11px] uppercase tracking-[0.35em] font-bold bg-[#EEF2FF] text-[#1E4ED8] rounded-full"
            >
              Professional Consultation
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0B2C6D] mb-8"
            >
              Speak With a{" "}
              <span className="text-[#1E4ED8]">Financial Principal</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg font-medium"
            >
              Expert guidance across finance, investment, and property —
              confidential, structured, and compliant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">

          {/* ================= FORM ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeScale}
            className="relative bg-white rounded-3xl border border-slate-200 shadow-xl p-12 md:p-16"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#1E4ED8]/10 to-transparent blur-2xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#1E4ED8] mb-12">
                Consultation Request
              </p>

              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormInput label="Full Name" placeholder="Your Name" />
                  <FormInput label="Email Address" placeholder="you@email.com" />
                </div>

                <FormInput label="Mobile Number" placeholder="+91 XXXXX XXXXX" />

                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Inquiry Details
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Briefly describe your requirement..."
                    className="w-full border border-slate-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8] text-sm resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => navigate("/payment")}
                  className="w-full bg-[#0B2C6D] hover:bg-[#1E4ED8] text-white py-5 rounded-xl font-bold uppercase tracking-widest shadow-lg transition"
                >
                  Submit & Proceed to Payment — ₹499
                </motion.button>

                <p className="text-center text-xs text-slate-500 uppercase tracking-wider">
                  Secure • Confidential • Principal-Led Consultation
                </p>
              </form>
            </div>
          </motion.div>

          {/* ================= INFO ================= */}
          <div className="space-y-20">

            {/* Contact Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-500 mb-10">
                Contact Channels
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <ContactIconCard
                  icon={<Phone size={20} />}
                  title="Phone Support"
                  info="+91 XXXXX XXXXX"
                  sub="Mon–Sat • 9 AM – 6 PM"
                />
                <ContactIconCard
                  icon={<Mail size={20} />}
                  title="Email Support"
                  info="support@fipconsultancy.com"
                  sub="24×7 Response"
                />
              </div>
            </motion.div>

            {/* Why FIP */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-12 rounded-3xl border border-slate-200 shadow-lg"
            >
              <h3 className="text-2xl font-extrabold mb-12 text-[#0B2C6D]">
                Why Choose FIP Consultancy
              </h3>

              <ul className="space-y-7">
                <WhyItem icon={<ShieldCheck size={16} />} text="Verified & compliant advisory process" />
                <WhyItem icon={<BarChart3 size={16} />} text="Data-backed financial recommendations" />
                <WhyItem icon={<Zap size={16} />} text="Fast execution & clear timelines" />
                <WhyItem icon={<Users size={16} />} text="Experienced finance & property advisors" />
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 bg-white border-t text-center px-6">
        <p className="text-xs text-slate-500 uppercase tracking-widest">
          ₹499 Consultation Fee • Secure • Confidential • FIP Consultancy
        </p>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function FormInput({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full border border-slate-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8] text-sm"
      />
    </div>
  );
}

function ContactIconCard({ icon, title, info, sub }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition"
    >
      <div className="text-[#1E4ED8] mb-4">{icon}</div>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">
        {title}
      </p>
      <p className="text-lg font-extrabold text-[#0B2C6D] mb-1">
        {info}
      </p>
      <p className="text-xs text-slate-500">
        {sub}
      </p>
    </motion.div>
  );
}

function WhyItem({ icon, text }) {
  return (
    <motion.li
      variants={fadeUp}
      className="flex items-center gap-4 text-sm text-slate-700 font-medium"
    >
      <div className="text-[#1E4ED8] shrink-0">{icon}</div>
      <span>{text}</span>
    </motion.li>
  );
}
