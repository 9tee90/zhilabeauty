"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex space-x-6">
        <Link href="/dashboard" className={`text-lg font-semibold ${pathname === "/dashboard" ? "text-[#D6336C]" : "text-gray-600 dark:text-gray-300"} hover:text-[#D6336C]`}>
          🏢 Creator Dashboard
        </Link>
        <Link href="/user-dashboard" className={`text-lg font-semibold ${pathname === "/user-dashboard" ? "text-[#D6336C]" : "text-gray-600 dark:text-gray-300"} hover:text-[#D6336C]`}>
          👩‍🎨 User Dashboard
        </Link>
        <Link href="/community" className={`text-lg font-semibold ${pathname === "/community" ? "text-[#D6336C]" : "text-gray-600 dark:text-gray-300"} hover:text-[#D6336C]`}>
          💬 Community
        </Link>
      </div>
    </nav>
  );
}
