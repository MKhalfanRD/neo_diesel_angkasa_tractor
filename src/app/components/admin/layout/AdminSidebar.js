import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AdminSidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  function SidebarIcon({ iconName, alt }) {
    return (
      <Image
        src={`/${iconName}.svg`}
        width={20}
        height={20}
        alt={alt}
        className="shrink-0"
      />
    );
  }

  const menu = [
    {
      name: "Home",
      href: "/admin",
      icon: <SidebarIcon iconName="home" alt="Home Icon" />,
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: <SidebarIcon iconName="products" alt="Produk Icon" />,
    },
  ];

  return (
    <>
      {/* Overlay di mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white border-r transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:block`}
      >
        <div className="h-16 flex items-center justify-center text-xl font-bold text-black">
          Admin Panel
        </div>
        <nav className="p-4 space-y-2 text-black text-sm">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 ${
                pathname === item.href
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : ""
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
