"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function EarlyAccessPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !role) return;

    console.log("Submitting:", { email, role });
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Zhila Beauty - The Future of Beauty Networking</title>
        <meta name="description" content="Join the high-value beauty community for MUAs, Clinics, and Brands. Monetize, Learn, Earn & Engage." />
        <meta name="keywords" content="beauty community, MUAs, clinic owners, beauty brands, networking, monetization" />
        <meta name="robots" content="index, follow" />
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

          {/* Video Embed */}
          <div className="mt-6">
            <video className="rounded-lg shadow-lg w-full max-w-xl mx-auto" autoPlay loop muted>
              <source src="/promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Interactive Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 bg-[#FFE4E1] rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#D6336C]">🌟 High-Value Community</h3>
              <p className="text-gray-700 mt-2">Real beauty professionals. No bots, no noise.</p>
            </div>
            <div className="p-6 bg-[#FAF0E6] rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#D6336C]">💰 Monetization Opportunities</h3>
              <p className="text-gray-700 mt-2">Earn through networking, premium courses, and partnerships.</p>
            </div>
            <div className="p-6 bg-[#FFF5EE] rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#D6336C]">🎥 Exclusive Video Content</h3>
              <p className="text-gray-700 mt-2">Access expert-led tutorials, masterclasses & training.</p>
            </div>
          </motion.div>

          {/* Signup Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <h2 className="text-2xl text-[#D6336C] font-semibold">You're on the waitlist! 🎉</h2>
              <p className="text-gray-600 mt-2">We’ll notify you once we launch.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col space-y-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D6336C]"
                required
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D6336C]"
                required
              >
                <option value="">I am a...</option>
                <option value="MUA">Makeup Artist</option>
                <option value="Clinic Owner">Clinic Owner</option>
                <option value="Brand Owner">Brand Owner</option>
              </select>

              <button
                type="submit"
                className="w-full bg-[#D6336C] text-white font-semibold py-3 rounded-lg hover:bg-[#b12255] transition"
              >
                Get Early Access
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </>
  );
}
