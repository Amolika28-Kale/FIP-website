"use client";
import React, { useState } from "react";
import { Lock, ShieldCheck } from "lucide-react";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* ================= LEFT — SUMMARY ================= */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            FIP <span className="text-blue-600">Consultancy</span>
          </h1>

          <p className="text-slate-600 text-lg mb-10 max-w-lg">
            Complete your consultation booking securely using UPI or
            Internet Banking. Payments are encrypted and verified.
          </p>

          <div className="space-y-5 border-l-4 border-blue-100 pl-6">
            {[
              "Instant Loan Without Collateral",
              "Investment Opportunities",
              "Property Buy and Sell",
              "Professional Services & Facilities Management",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-slate-500 text-sm">
            <ShieldCheck className="text-blue-600" size={18} />
            100% secure & PCI-DSS compliant payment
          </div>
        </div>

        {/* ================= RIGHT — PAYMENT CARD ================= */}
        <div className="bg-white p-10 md:p-12 rounded-xl shadow-xl border">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Payment Details
            </h2>
            <Lock size={18} className="text-slate-400" />
          </div>

          {/* ================= PAYMENT METHOD ================= */}
          <div className="mb-8">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-3 block">
              Select Payment Method
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`py-3 rounded-lg font-semibold transition ${
                  paymentMethod === "upi"
                    ? "bg-blue-600 text-white shadow"
                    : "border border-slate-300 text-slate-600 hover:border-blue-400"
                }`}
              >
                UPI
              </button>

              <button
                onClick={() => setPaymentMethod("netbanking")}
                className={`py-3 rounded-lg font-semibold transition ${
                  paymentMethod === "netbanking"
                    ? "bg-blue-600 text-white shadow"
                    : "border border-slate-300 text-slate-600 hover:border-blue-400"
                }`}
              >
                Net Banking
              </button>
            </div>
          </div>

          {/* ================= UPI ================= */}
          {paymentMethod === "upi" && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  UPI ID
                </label>
                <input
                  placeholder="yourname@upi"
                  className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* ================= NET BANKING ================= */}
          {paymentMethod === "netbanking" && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Select Bank
                </label>
                <select className="w-full mt-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Punjab National Bank</option>
                </select>
              </div>
            </div>
          )}

          {/* ================= AMOUNT ================= */}
          <div className="mt-10 border-t pt-6">
            <div className="flex justify-between mb-6 text-lg font-bold text-slate-900">
              <span>Total Amount</span>
              <span>₹499</span>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-sky-600 text-white py-4 rounded-lg font-semibold uppercase tracking-wide shadow-lg hover:opacity-95 transition">
              Pay ₹499
            </button>
          </div>

          {/* ================= TRUST ================= */}
          <div className="mt-6 text-center text-xs text-slate-500">
            Secure Checkout • UPI & Net Banking Supported
          </div>
        </div>
      </div>
    </div>
  );
}
