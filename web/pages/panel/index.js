// pages/panel/index.js
import { useState } from 'react';

const Panel = () => {
  const [auth, setAuth] = useState(false);

  const handleLogin = () => {
    // Aquí podrías agregar lógica para autenticación
    setAuth(true);
  };

  if (!auth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <p>Welcome to the admin panel.</p>
    </div>
  );
};

export default Panel;
