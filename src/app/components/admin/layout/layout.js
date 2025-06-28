export default function AdminLayoutWrapper({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">Admin Panel</aside>
      <main className="flex-1 p-6 bg-white text-black">{children}</main>
    </div>
  );
}
