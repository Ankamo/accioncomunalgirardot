import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex justify-center space-x-6">
        <li><Link href="/cartelera">Cartelera Comunal</Link></li>
        <li><Link href="/eventos">Eventos y Actividades</Link></li>
        <li><Link href="/reuniones">Reuniones y Asambleas</Link></li>
        <li><Link href="/afiliados">Afiliados</Link></li>
        <li><Link href="/proyectos">Proyectos Comunales</Link></li>
        <li><Link href="/servicios">Servicios Comunales</Link></li>
        <li><Link href="/quienes-somos">Quienes Somos</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
