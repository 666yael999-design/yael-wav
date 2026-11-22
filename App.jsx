import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>YAEL.WAV</h1>
        <p className="subtitle">
          Producción musical, mezcla y masterización profesional
        </p>

        <button className="btn">
          Solicitar Información
        </button>
      </header>

      <section className="services">
        <h2>Servicios</h2>

        <div className="cards">
          <div className="card">
            <h3>🎵 Producción Musical</h3>
            <p>
              Desarrollo de proyectos musicales desde la idea inicial hasta la
              producción final.
            </p>
          </div>

          <div className="card">
            <h3>🎚️ Mezcla</h3>
            <p>
              Balance y optimización de cada elemento para lograr un sonido
              profesional.
            </p>
          </div>

          <div className="card">
            <h3>💿 Masterización</h3>
            <p>
              Preparación final de la canción para plataformas digitales y
              distribución.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Sobre YAEL.WAV</h2>
        <p>
          Somos un estudio creativo enfocado en brindar soluciones de producción
          musical modernas, con atención personalizada y resultados de calidad.
        </p>
      </section>

      <footer>
        <p>© 2026 YAEL.WAV Studio</p>
      </footer>
    </div>
  );
}

export default App;