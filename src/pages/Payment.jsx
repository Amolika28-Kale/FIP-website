"use client";
import React, { useState } from "react";
import { Lock, CreditCard, ShieldCheck } from "lucide-react";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT — SUMMARY */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            FIP <span className="text-amber-500">Consultancy</span>
          </h1>

          <p className="text-slate-400 text-lg font-light mb-10">
            Access professional financial consultancy, investment guidance,
            and property services through our secure payment process.
          </p>

          <div className="space-y-6 border-l border-white/10 pl-6">
            {[
              "Instant Loan Without Collateral",
              "Investment Opportunities",
              "Property Buy and Sell",
              "Professional Services & Facilities Management",
            ].map((item, i) => (
              <div key={i} className="text-slate-300 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 text-slate-500 text-sm">
            <ShieldCheck className="text-amber-500" size={18} />
            Secure payments with industry-standard encryption
          </div>
        </div>

        {/* RIGHT — PAYMENT CARD */}
        <div className="bg-white text-slate-950 p-10 rounded-sm shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Payment Details</h2>
            <Lock size={18} className="text-slate-500" />
          </div>

          {/* PAYMENT METHOD */}
          <div className="mb-6">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 block">
              Payment Method
            </label>

            <div className="flex gap-4">
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`flex-1 py-3 border font-semibold transition-all ${
                  paymentMethod === "upi"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 text-slate-600"
                }`}
              >
                UPI
              </button>

              <button
                onClick={() => setPaymentMethod("netbanking")}
                className={`flex-1 py-3 border font-semibold transition-all ${
                  paymentMethod === "netbanking"
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 text-slate-600"
                }`}
              >
                Net Banking
              </button>
            </div>
          </div>

          {/* UPI */}
          {paymentMethod === "upi" && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  UPI ID
                </label>
                <input
                  placeholder="yourname@upi"
                  className="w-full mt-2 border border-slate-300 px-4 py-3 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* NET BANKING */}
          {paymentMethod === "netbanking" && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Select Bank
                </label>
                <select className="w-full mt-2 border border-slate-300 px-4 py-3 focus:outline-none">
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Punjab National Bank</option>
                </select>
              </div>
            </div>
          )}

          {/* AMOUNT & PAY */}
          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>Total Amount</span>
              <span>₹499</span>
            </div>

            <button
              className="w-full bg-slate-950 text-white py-4 font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
            >
              Pay ₹499
            </button>
          </div>

          {/* TRUST FOOTER */}
          <div className="mt-6 text-center text-xs text-slate-400">
            Secure Checkout • Encrypted Transactions
          </div>
        </div>
      </div>
    </div>
  );
}
