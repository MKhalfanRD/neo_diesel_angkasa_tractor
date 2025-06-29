"use client";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { Nunito } from "next/font/google";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const fontStyle = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function AdminLayoutWrapper({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.push("/admin/login");
    } else {
      setIsReady(true);
    }
  }, []);

  if (!isReady) return null;

  return (
    <div className={`flex h-screen overflow-hidden ${fontStyle.className}`}>
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Konten utama */}
      <div className="flex flex-col flex-1">
        <AdminNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
