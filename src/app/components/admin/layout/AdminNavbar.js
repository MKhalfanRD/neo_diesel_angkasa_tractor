"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminNavbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo kiri */}
          <div className="flex items-center">
            <img className="h-15 w-15" src="/images/logo.png" alt="Logo" />
          </div>

          {/* Akun kanan */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center rounded-full focus:outline-none"
            >
              <img
                className="h-10 w-10 rounded-full object-cover border border-gray-300"
                src="/account.svg"
                alt="User avatar"
              />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    localStorage.removeItem("isLoggedIn"); // clear login session
                    router.push("/admin/login");
                  }}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
