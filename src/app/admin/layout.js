"use client";

import { usePathname } from "next/navigation";
import AdminLayoutWrapper from "../components/admin/layout/AdminLayoutWrapper";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLogin = pathname.startsWith("/admin/login");

  if (isLogin) {
    return <>{children}</>; // Layout login pakai layout sendiri
  }

  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>;
}
