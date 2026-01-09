"use client";
import React, { useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const amount = 499;

  const STRIPE_PAYMENT_LINK =
    "https://buy.stripe.com/test_3cI6oJ1t30Jr7b2cNAeZ200"; // Stripe Test Link

  const handlePayment = () => {
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] text-slate-700 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B2C6D] mb-6">
            FIP <span className="text-[#1E4ED8]">Consultancy</span>
          </h1>

          <p className="text-slate-600 text-lg mb-12 max-w-lg leading-relaxed">
            Tentative consultation booking. You will be redirected to
            <strong className="text-slate-800"> Stripe’s secure test checkout</strong>.
          </p>

          <div className="space-y-5 border-l-4 border-[#E1E8F5] pl-6">
            {[
              "Instant Finance & Loan Advisory",
              "Investment Opportunities & ROI Planning",
              "Property Buy & Sell Consultation",
              "Professional Financial Structuring",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-[#1E4ED8] rounded-full" />
                {item}
              </div>
            ))}
          </div>

          {/* <div className="mt-10 flex items-center gap-3 text-slate-500 text-sm">
            <ShieldCheck className="text-[#1E4ED8]" size={18} />
            Stripe Test Mode • No Real Money Deducted
          </div> */}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl border border-slate-200">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-extrabold text-[#0B2C6D]">
              Payment Details
            </h2>
            <Lock size={18} className="text-slate-400" />
          </div>

          {/* Payment Method */}
          <div className="mb-10">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 block">
              Payment Method
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`py-4 rounded-lg font-bold uppercase tracking-wide transition border ${
                  paymentMethod === "upi"
                    ? "bg-[#0B2C6D] text-white border-[#0B2C6D]"
                    : "bg-white border-slate-300 text-slate-700 hover:border-[#1E4ED8]"
                }`}
              >
                UPI
              </button>

              <button
                onClick={() => setPaymentMethod("netbanking")}
                className={`py-4 rounded-lg font-bold uppercase tracking-wide transition border ${
                  paymentMethod === "netbanking"
                    ? "bg-[#0B2C6D] text-white border-[#0B2C6D]"
                    : "bg-white border-slate-300 text-slate-700 hover:border-[#1E4ED8]"
                }`}
              >
                Net Banking
              </button>
            </div>
          </div>

          {/* Amount */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex justify-between items-center mb-8 text-lg font-extrabold text-slate-900">
              <span>Total Amount</span>
              <span>₹{amount}</span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-[#0B2C6D] hover:bg-[#1E4ED8] text-white py-4 rounded-lg font-bold uppercase tracking-widest shadow-lg transition"
            >
              Proceed to Pay ₹{amount}
            </button>
          </div>

          <div className="mt-6 text-center text-xs text-slate-500 uppercase tracking-wider">
            Redirects to Stripe Secure Checkout
          </div>
        </div>
      </div>
    </div>
  );
}
