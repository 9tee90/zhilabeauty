"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UserDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const user = { name: "Sophia", interests: ["Skincare", "Makeup", "Aesthetics"] };

  return (
    <div className={`min-h-screen p-6 transition-all ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`flex justify-between items-center p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <h1 className="text-3xl font-bold">Welcome, {user.name}! 🌟</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg transition bg-[#D6336C] text-white hover:bg-[#b12255] shadow-lg"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </motion.header>

      {/* Trending Beauty Services */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6"
      >
        <h2 className="text-2xl font-semibold">🔥 Trending Beauty Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {["Lash Lift", "HydraFacial", "Bridal Makeup"].map((service) => (
            <motion.div
              key={service}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg shadow-lg cursor-pointer ${
                darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
              }`}
            >
              <h3 className="text-xl font-bold">{service}</h3>
              <p className="text-gray-500 mt-2">Highly rated by top MUAs & Clinics.</p>
              <Link href="/bookings" className="mt-3 block text-[#D6336C] hover:underline font-semibold">
                Book Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Courses */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold">🎥 Learn from the Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {["Smokey Eye Masterclass", "Flawless Skin Routine"].map((course) => (
            <motion.div
              key={course}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg shadow-lg cursor-pointer ${
                darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
              }`}
            >
              <h3 className="text-xl font-bold">{course}</h3>
              <p className="text-gray-500 mt-2">Taught by top industry experts.</p>
              <Link href="/courses" className="mt-3 block text-[#D6336C] hover:underline font-semibold">
                Watch Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Engagement */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold">👩‍💻 Join the Beauty Community</h2>
        <p className="text-gray-500 mt-2">Follow your favorite MUAs & Clinics, ask questions, and share experiences.</p>
        <Link href="/community" className="mt-3 inline-block px-4 py-2 bg-[#D6336C] text-white rounded-lg hover:bg-[#b12255] shadow-md">
          Explore Community →
        </Link>
      </motion.div>

      {/* Footer */}
      <footer className="text-center mt-8 text-sm text-gray-600 dark:text-gray-300">
        © 2025 Zhila Beauty. Powered by Experts, Built for Clients.
      </footer>
    </div>
  );
}
