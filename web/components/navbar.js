// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-lg font-semibold">My Next.js App</a>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <a className={`text-white ${router.pathname === '/' ? 'underline' : ''}`}>Home</a>
          </Link>
          <Link href="/about">
            <a className={`text-white ${router.pathname === '/about' ? 'underline' : ''}`}>About</a>
          </Link>
          <Link href="/contact">
            <a className={`text-white ${router.pathname === '/contact' ? 'underline' : ''}`}>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
