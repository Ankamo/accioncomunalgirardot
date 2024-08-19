import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://accioncomunalgirardot.vercel.app/') // URL de tu backend en Vercel
      .then(response => response.text())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data ? data : "Cargando..."}</p>
      </header>
    </div>
  );
}

export default App;
