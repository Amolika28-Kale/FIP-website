"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
    <div className="w-full bg-white overflow-hidden">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative py-16 md:py-24 bg-indigo-950 text-white overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#4f46e5_0%,transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
              Connect with <span className="text-indigo-400">Experts.</span>
            </h1>
            <p className="text-indigo-200 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Have a question about a loan, an investment, or a property? 
              Our senior consultants are standing by to guide you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 md:py-24 relative bg-slate-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* CONTACT FORM CARD */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-indigo-100 p-6 md:p-12 border border-slate-100 order-2 lg:order-1"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send a Message</h2>
              <p className="text-sm md:text-base text-slate-500 mb-8 font-light">
                Average response time: <span className="text-indigo-600 font-bold">under 2 hours</span>.
              </p>

              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FormInput label="Full Name" type="text" placeholder="John Doe" />
                  <FormInput label="Email Address" type="email" placeholder="john@example.com" />
                </div>
                <FormInput label="Phone Number" type="tel" placeholder="+91 00000 00000" />
                
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Your Inquiry</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your financial goals..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-700 text-sm md:text-base"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg shadow-xl shadow-indigo-200 transition-all uppercase tracking-widest"
                >
                  Send Inquiry
                </motion.button>
              </form>
            </motion.div>

            {/* INFO & WHY US */}
            <div className="space-y-8 md:space-y-12 order-1 lg:order-2">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6 md:space-y-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Direct Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <ContactIconCard icon="📞" title="Phone" info="+91 XXX XXX XXXX" sub="Mon-Sat, 9am-6pm" />
                  <ContactIconCard icon="✉️" title="Email" info="info@fipmodel.com" sub="24/7 Support" />
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-indigo-900 rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why Choose FIP?</h3>
                <ul className="space-y-3 md:space-y-4">
                  <WhyItem text="Transparent and registered documentation" />
                  <WhyItem text="Competitive interest rates and High ROI" />
                  <WhyItem text="Quick 24-48 hour approval process" />
                  <WhyItem text="Expert personalized financial consultation" />
                  <WhyItem text="Years of proven market leadership" />
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATIONS SECTION ================= */}
      {/* <section className="py-16 md:py-24 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Regional Presence</h2>
            <div className="h-1.5 w-16 md:w-24 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <LocationCard 
              name="Head Office" 
              addr="123 Finance Street, Business District" 
              email="headoffice@fipmodel.com"
            />
            <LocationCard 
              name="Branch - North" 
              addr="456 Investment Ave, Commercial Zone" 
              email="north@fipmodel.com"
            />
            <LocationCard 
              name="Branch - South" 
              addr="789 Property Lane, Financial Hub" 
              email="south@fipmodel.com"
            />
          </motion.div>
        </div>
      </section> */}

      {/* ================= INTERACTION DIAGRAM ================= */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h4 className="text-lg font-bold text-indigo-900 mb-8 uppercase tracking-widest">Our Communication Workflow</h4>
            
            <p className="mt-6 text-sm text-slate-500 font-light italic">From inquiry to solution—we ensure a seamless data-driven experience.</p>
        </div>
      </section>
    </div>
  );
}

/* ================= MINI COMPONENTS ================= */

function FormInput({ label, type, placeholder }) {
  return (
    <div className="space-y-1.5 md:space-y-2">
      <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-700 text-sm md:text-base"
      />
    </div>
  );
}

function ContactIconCard({ icon, title, info, sub }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="text-2xl md:text-3xl mb-3 md:mb-4">{icon}</div>
      <p className="text-[10px] md:text-xs font-bold text-indigo-600 uppercase mb-1">{title}</p>
      <p className="text-base md:text-lg font-bold text-slate-900 mb-0.5 break-words">{info}</p>
      <p className="text-[10px] md:text-xs text-slate-400">{sub}</p>
    </motion.div>
  );
}

function WhyItem({ text }) {
  return (
    <motion.li variants={fadeInUp} className="flex items-center gap-3 text-xs md:text-sm opacity-90 group">
      <div className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-indigo-500 flex items-center justify-center text-[8px] md:text-[10px] shrink-0">✓</div>
      <span className="leading-tight">{text}</span>
    </motion.li>
  );
}

function LocationCard({ name, addr, email }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-slate-900">{name}</h3>
      <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-500">
        <p className="flex gap-2">📍 <span className="leading-snug">{addr}</span></p>
        <p className="flex gap-2">✉️ <span className="text-indigo-600 font-medium truncate">{email}</span></p>
        <p className="flex gap-2">⏰ <span>09:00 AM - 06:00 PM</span></p>
      </div>
    </motion.div>
  );
}