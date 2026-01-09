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

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

/* ================= PAGE ================= */

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F6F8FC] text-slate-800 overflow-x-hidden pt-20">

      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-white border-b px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-6 px-6 py-2 text-[11px] uppercase tracking-[0.35em] font-bold bg-[#E9EEF9] text-[#0B2C6D] rounded-full">
              Professional Consultation
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0B2C6D] mb-6">
              Speak With a <span className="text-[#1E4ED8]">Financial Principal</span>
            </h1>

            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
              Expert guidance across finance, investment, and property —
              confidential, structured, and compliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-slate-200"
          >
            <h2 className="text-xs font-bold text-[#1E4ED8] uppercase tracking-[0.3em] mb-12">
              Consultation Request
            </h2>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8] text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => navigate("/payment")}
                className="w-full bg-[#0B2C6D] hover:bg-[#1E4ED8] text-white py-4 rounded-lg font-bold uppercase tracking-wider shadow-lg transition"
              >
                Proceed to Payment — ₹499
              </motion.button>

              <p className="text-center text-xs text-slate-500 uppercase tracking-wider">
                Secure & Confidential Consultation
              </p>
            </form>
          </motion.div>

          {/* ================= INFO ================= */}
          <div className="space-y-16">

            {/* Contact Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-10"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                Contact Channels
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
              variants={staggerContainer}
              className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200"
            >
              <h3 className="text-2xl font-extrabold mb-10 text-[#0B2C6D]">
                Why Choose FIP Consultancy
              </h3>

              <ul className="space-y-6">
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
      <footer className="py-10 bg-white border-t text-center px-6">
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
        className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8] text-sm"
      />
    </div>
  );
}

function ContactIconCard({ icon, title, info, sub }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition"
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
      variants={fadeInUp}
      className="flex items-center gap-4 text-sm text-slate-700 font-medium"
    >
      <div className="text-[#1E4ED8] shrink-0">{icon}</div>
      <span>{text}</span>
    </motion.li>
  );
}
