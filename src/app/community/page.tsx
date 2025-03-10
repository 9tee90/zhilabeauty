"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart, FaComment, FaShareAlt, FaPlus, FaComments } from "react-icons/fa";

export default function Community() {
  const [darkMode, setDarkMode] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "MayaBeautyMUA",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      content: "Just finished a gorgeous bridal look today! 👰✨ What do you think?",
      image: "https://images.pexels.com/photos/3762666/pexels-photo-3762666.jpeg",
      likes: 32,
      comments: 5,
    },
    {
      id: 2,
      user: "DrAesthetics",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "HydraFacial is my go-to skincare treatment! Who else loves it? 💦😍",
      image: "https://images.pexels.com/photos/3997995/pexels-photo-3997995.jpeg",
      likes: 54,
      comments: 10,
    },
    {
      id: 3,
      user: "SophiaXBeauty",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
      content: "Best foundation for dry skin? Drop your favs below! 👇",
      image: "",
      likes: 21,
      comments: 7,
    },
  ]);

  return (
    <div className={`min-h-screen p-6 transition-all ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Community Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
          <FaComments className="mr-2 text-[#D6336C]" /> Beauty Community
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg transition bg-[#D6336C] text-white hover:bg-[#b12255] shadow-lg"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </motion.header>

      {/* AI-Powered Trending Topics */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold">🔥 AI-Powered Trending Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {["Best skincare for winter?", "Top 5 lipsticks 2025", "How to reduce acne scars"].map((topic) => (
            <motion.div
              key={topic}
              whileHover={{ scale: 1.05 }}
              className={`p-4 rounded-lg shadow-md cursor-pointer ${
                darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
              }`}
            >
              <p className="font-semibold">{topic}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Create a Post */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-6 rounded-lg shadow-lg mt-6 bg-white dark:bg-gray-800"
      >
        <h2 className="text-xl font-semibold flex items-center text-gray-900 dark:text-gray-100">
          <FaPlus className="mr-2 text-[#D6336C]" /> Share Your Beauty Thoughts
        </h2>
        <textarea
          className="w-full p-4 mt-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#D6336C]"
          rows={3}
          placeholder="Ask a beauty question, share a tip, or post your latest look..."
        ></textarea>
        <button className="mt-3 px-4 py-2 bg-[#D6336C] text-white rounded-lg hover:bg-[#b12255] shadow-md flex items-center space-x-2">
          <FaPlus /> <span>Post</span>
        </button>
      </motion.div>

      {/* Community Feed (FIXED MISSING CONTENT) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold">📸 Latest Beauty Posts</h2>
        <div className="mt-4 space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="flex items-center space-x-4">
                <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full" />
                <h3 className="font-bold">{post.user}</h3>
              </div>
              <p className="mt-2">{post.content}</p>
              {post.image && <img src={post.image} alt="Post Image" className="mt-4 rounded-lg shadow-md" />}
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <button className="flex items-center space-x-2 hover:text-[#D6336C]">
                  <FaHeart /> <span>{post.likes} Likes</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-[#D6336C]">
                  <FaComment /> <span>{post.comments} Comments</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-[#D6336C]">
                  <FaShareAlt /> <span>Share</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-center mt-8 text-sm text-gray-600 dark:text-gray-300">
        © 2025 Zhila Beauty. Powered by Experts, Built for Community.
      </footer>
    </div>
  );
}
