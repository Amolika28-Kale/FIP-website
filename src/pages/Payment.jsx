"use client";
import React from "react";
import { Lock, CreditCard, ShieldCheck } from "lucide-react";

export default function Payment() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT — SUMMARY */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Secure <span className="text-amber-500">Payment</span>
          </h1>

          <p className="text-slate-400 text-lg font-light mb-10">
            Complete your consultation onboarding using our secure payment
            gateway powered by Stripe.
          </p>

          <div className="space-y-6 border-l border-white/10 pl-6">
            {[
              "Private Wealth Consultation",
              "Portfolio Risk Assessment",
              "Investment Strategy Blueprint",
            ].map((item, i) => (
              <div key={i} className="text-slate-300 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 text-slate-500 text-sm">
            <ShieldCheck className="text-amber-500" size={18} />
            Payments are encrypted and secured
          </div>
        </div>

        {/* RIGHT — PAYMENT CARD */}
        <div className="bg-white text-slate-950 p-10 rounded-sm shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Payment Details</h2>
            <Lock size={18} className="text-slate-500" />
          </div>

          {/* Fake Stripe Fields */}
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Cardholder Name
              </label>
              <input
                placeholder="John Doe"
                className="w-full mt-2 border border-slate-300 px-4 py-3 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Card Number
              </label>
              <div className="relative">
                <input
                  placeholder="4242 4242 4242 4242"
                  className="w-full mt-2 border border-slate-300 px-4 py-3 pr-12 focus:outline-none"
                />
                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Expiry
                </label>
                <input
                  placeholder="MM / YY"
                  className="w-full mt-2 border border-slate-300 px-4 py-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  CVC
                </label>
                <input
                  placeholder="123"
                  className="w-full mt-2 border border-slate-300 px-4 py-3 focus:outline-none"
                />
              </div>
            </div>

            <button
              className="w-full bg-slate-950 text-white py-4 mt-6 font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
            >
              Pay ₹5,500
            </button>
          </div>

          {/* Stripe Trust Footer */}
          <div className="mt-8 text-center text-xs text-slate-400">
            Powered by <span className="font-bold">Stripe</span> • PCI DSS Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
