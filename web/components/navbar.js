import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Mi Sitio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white">Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/panel">
              <a className="text-white">Panel</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white">Contacto</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
