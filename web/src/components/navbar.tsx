import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-8">
        <li><Link href="/cartelera-comunal" className="text-white">Cartelera Comunal</Link></li>
        <li><Link href="/eventos-y-actividades" className="text-white">Eventos y Actividades</Link></li>
        <li><Link href="/reuniones-y-asambleas" className="text-white">Reuniones y Asambleas</Link></li>
        <li><Link href="/afiliados" className="text-white">Afiliados</Link></li>
        <li><Link href="/proyectos-comunales" className="text-white">Proyectos Comunales</Link></li>
        <li><Link href="/servicios-comunales" className="text-white">Servicios Comunales</Link></li>
        <li><Link href="/quienes-somos" className="text-white">Quienes Somos</Link></li>
        <li><Link href="/login" className="text-white">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
