import AdminLayoutWrapper from "../components/admin/layout/layout";

export const metadata = {
  title: "Admin Panel",
};

export default function AdminLayout({ children }) {
  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>;
}
