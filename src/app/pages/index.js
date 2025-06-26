import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Selamat Datang di Katalog Produk</h1>
      <Link href="/products">
        <button>Lihat Produk</button>
      </Link>
    </main>
  );
}