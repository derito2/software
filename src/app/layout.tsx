import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Mi Sitio</title>
      </head>
      <body className="flex flex-col items-center justify-center min-h-screen">
        <nav className="bg-gray-800 p-4 text-white flex justify-center w-full">
          <div className="flex space-x-8">
            <Link href="/" className="text-xl font-bold ">LOGO</Link>
            <Link href="/" className="mx-2">Home</Link>
            <Link href="/page1" className="mx-2">Pag 1</Link>
            <Link href="/page2" className="mx-2">Pag 2</Link>
          </div>
        </nav>
        <main className="p-4 flex items-center justify-center flex-grow w-full">{children}</main>
      </body>
    </html>
  );
}