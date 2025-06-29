import "./globals.css";
import AppLayout from "./components/layout";

export const metadata = {
  title: "NEODIESEL ANGKASA TRACTOR",
  description: "Your Trusted Partner for Heavy Equipment Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
