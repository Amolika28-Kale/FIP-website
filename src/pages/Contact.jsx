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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

/* ================= PAGE ================= */

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-50 text-slate-700 overflow-x-hidden pt-20">

      {/* ================= HERO ================= */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-sky-50 border-b px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-[0.35em] mb-6 block">
              Professional Consultation
            </span>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Speak With a <span className="text-blue-600">Financial Principal</span>
            </h1>

            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Expert guidance for finance, investments, and property solutions —
              confidential, verified, and structured.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-xl shadow-xl border"
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.25em] mb-10">
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
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => navigate("/payment")}
                className="w-full bg-gradient-to-r from-blue-600 to-sky-600 text-white py-4 rounded-lg font-semibold uppercase tracking-wide shadow-lg"
              >
                Proceed to Payment — ₹499
              </motion.button>

              <p className="text-center text-xs text-slate-500">
                Secure payment via UPI & Internet Banking
              </p>
            </form>
          </motion.div>

          {/* ================= INFO ================= */}
          <div className="space-y-16">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
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

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white p-10 rounded-xl shadow-lg border"
            >
              <h3 className="text-xl font-bold mb-8 text-slate-900">
                Why Choose FIP
              </h3>

              <ul className="space-y-5">
                <WhyItem icon={<ShieldCheck size={16} />} text="Verified & compliant consultation process" />
                <WhyItem icon={<BarChart3 size={16} />} text="Data-backed financial recommendations" />
                <WhyItem icon={<Zap size={16} />} text="Fast execution & response timelines" />
                <WhyItem icon={<Users size={16} />} text="Experienced finance & property advisors" />
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 bg-white border-t text-center px-6">
        <p className="text-xs text-slate-500 uppercase tracking-wider">
          ₹499 Consultation Fee • Secure & Confidential
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
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />
    </div>
  );
}

function ContactIconCard({ icon, title, info, sub }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-6 rounded-lg bg-white border shadow-sm hover:shadow-md transition"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1">
        {title}
      </p>
      <p className="text-lg font-bold text-slate-900 mb-1">
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
      className="flex items-center gap-4 text-sm text-slate-600"
    >
      <div className="text-blue-600 shrink-0">{icon}</div>
      <span>{text}</span>
    </motion.li>
  );
}
