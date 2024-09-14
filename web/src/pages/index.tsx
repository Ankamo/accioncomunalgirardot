// src/app/page.tsx (o index.tsx, si usas una estructura diferente)
import Link from 'next/link';
import Layout from '../components/layout';

const recentPosts = {
  cartelera: [
    { id: 1, title: "Nueva actividad comunitaria", date: "12/09/2024" },
    { id: 2, title: "Asamblea general", date: "10/09/2024" },
  ],
  eventos: [
    { id: 3, title: "Fiesta Comunal", date: "15/09/2024" },
    { id: 4, title: "Taller de liderazgo", date: "11/09/2024" },
  ],
  reuniones: [
    { id: 5, title: "Reunión de líderes", date: "09/09/2024" },
    { id: 6, title: "Asamblea mensual", date: "08/09/2024" },
  ],
};

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenido a la Junta de Acción Comunal
      </h1>
      <p className="text-lg text-center mb-10">
        Descubre nuestras actividades más recientes y cómo puedes involucrarte.
      </p>

      {/* Publicaciones recientes */}
      <section className="grid gap-8">
        {/* Cartelera */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cartelera</h2>
          <ul className="space-y-4">
            {recentPosts.cartelera.map((post) => (
              <li key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <Link href={`/cartelera/${post.id}`} className="text-blue-600 hover:underline">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </Link>
                <p className="text-gray-600">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Eventos y Actividades */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Eventos y Actividades</h2>
          <ul className="space-y-4">
            {recentPosts.eventos.map((post) => (
              <li key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <Link href={`/eventos-y-actividades/${post.id}`} className="text-blue-600 hover:underline">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </Link>
                <p className="text-gray-600">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Reuniones */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Reuniones y Asambleas</h2>
          <ul className="space-y-4">
            {recentPosts.reuniones.map((post) => (
              <li key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <Link href={`/reuniones-y-asambleas/${post.id}`} className="text-blue-600 hover:underline">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </Link>
                <p className="text-gray-600">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
