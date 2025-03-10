"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function EarlyAccessPage() {
  const [role, setRole] = useState("MUA");

  const benefits = {
    MUA: {
      title: "📸 Monetize Your Art",
      desc: "Get booked, sell courses, and build your brand with high-value clients.",
    },
    "Clinic Owner": {
      title: "💉 Grow Your Aesthetic Clinic",
      desc: "Attract premium clients, offer beauty memberships & showcase treatments.",
    },
    "Brand Owner": {
      title: "🛍️ Scale Your Beauty Brand",
      desc: "Connect with top MUAs, influencers & clinics for next-level collaborations.",
    },
  };

  return (
    <>
      <Head>
        <title>Zhila Beauty - The Future of Beauty Networking</title>
        <meta name="description" content="Join the high-value beauty community for MUAs, Clinics, and Brands. Monetize, Learn, Earn & Engage." />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FFE4E1] to-[#FAF0E6] px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-10 text-center"
        >
          <h1 className="text-5xl font-extrabold text-[#D6336C]">Ditch Social Media. Own Your Beauty Empire.</h1>
          <p className="text-lg text-gray-700 mt-4">
            High-value community for <strong>MUAs, Clinics, and Brands</strong>. Monetize, network, and access premium content.
          </p>

          {/* Video */}
          <div className="mt-6">
            <video className="rounded-lg shadow-lg w-full max-w-xl mx-auto" controls muted>
              <source src="/promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Role Selection */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Who are you?</h3>
            <div className="mt-4 flex justify-center gap-4">
              {Object.keys(benefits).map((r) => (
                <motion.button
                  key={r}
                  onClick={() => setRole(r)}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 rounded-lg transition ${
                    role === r ? "bg-[#D6336C] text-white" : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {r}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Benefits Display */}
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-6 bg-[#FFF5EE] rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-[#D6336C]">{benefits[role].title}</h3>
            <p className="text-gray-700 mt-2">{benefits[role].desc}</p>
          </motion.div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full max-w-sm bg-[#D6336C] text-white font-semibold py-3 rounded-lg hover:bg-[#b12255] transition"
          >
            Get Early Access
          </motion.button>

          {/* Demo Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6"
          >
            <Link href="/dashboard" className="text-[#D6336C] hover:underline font-semibold text-lg">
              🔥 Demo Login →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
