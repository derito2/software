import Link from 'next/link';
import '../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white flex justify-between">
        <Link href="/" className="text-xl font-bold">LOGO</Link>
        <div>
          <Link href="/" className="mx-2">Home</Link>
          <Link href="/page1" className="mx-2">Pag 1</Link>
          <Link href="/page2" className="mx-2">Pag 2</Link>
        </div>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
}
