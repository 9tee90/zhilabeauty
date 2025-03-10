"use client";

import { useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState({ name: "Jane Doe", role: "MUA" });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-md p-4 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name}!</h1>
        <p className="text-gray-600">Role: {user.role}</p>
      </header>

      <main className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Your Upcoming Bookings</h2>
            <p className="text-gray-500">No bookings yet.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">New Beauty Trends</h2>
            <p className="text-gray-500">Stay tuned for insights.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
