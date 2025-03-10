"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const user = { name: "Zhila", role: "MUA" };

  const stats = [
    { label: "Bookings", value: "23", icon: "📅" },
    { label: "Earnings", value: "$1,280", icon: "💰" },
    { label: "New Clients", value: "5", icon: "👩‍💼" },
    { label: "Courses Sold", value: "12", icon: "🎥" },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-all ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`flex justify-between items-center p-6 rounded-lg shadow-lg ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold">Welcome, {user.name}! 👋</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg transition bg-[#D6336C] text-white hover:bg-[#b12255] shadow-lg"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </motion.header>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-lg shadow-lg flex flex-col items-center ${
              darkMode
                ? "bg-gray-800 text-gray-100 border border-gray-700"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            <span className="text-5xl">{stat.icon}</span>
            <h2 className="text-lg font-semibold mt-2">{stat.label}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Bookings Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`p-6 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <h2 className="text-xl font-semibold">📅 Upcoming Bookings</h2>
          <p className="mt-2">
            Next appointment: <strong>Friday, 3 PM</strong>
          </p>
          <Link href="/bookings" className="mt-3 block text-[#D6336C] hover:underline font-semibold">
            View All Bookings →
          </Link>
        </motion.div>

        {/* Video Courses */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`p-6 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <h2 className="text-xl font-semibold">🎥 Your Courses</h2>
          <p className="mt-2">
            New lesson uploaded: <strong>“Mastering Bridal Makeup”</strong>
          </p>
          <Link href="/courses" className="mt-3 block text-[#D6336C] hover:underline font-semibold">
            Manage Courses →
          </Link>
        </motion.div>
      </div>

      {/* AI Insights */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className={`p-6 rounded-lg shadow-lg mt-8 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-xl font-semibold">🧠 AI Beauty Trends & Insights</h2>
        <p className="mt-2">
          🔮 AI predicts <strong>50% more clients booking lash lifts next month!</strong>
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="text-center mt-8 text-sm text-gray-600 dark:text-gray-300">
        © 2025 Zhila Beauty. Powered by Experts, Built for Creators.
      </footer>
    </div>
  );
}
