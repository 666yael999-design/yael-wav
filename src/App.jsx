import { useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState(
    "Producción musical, mezcla y masterización profesional"
  );

  const mostrarBienvenida = () => {
    setMensaje("🎵 ¡Bienvenido a YAEL.WAV Studio! Gracias por visitarnos 🎵");
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    alert("✅ Mensaje enviado correctamente");
  };

  return (
    <div className="container">
      <header className="hero">
        <h1>YAEL.WAV</h1>

        <p className="subtitle">{mensaje}</p>

        <button className="btn" onClick={mostrarBienvenida}>
          Bienvenida
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
              Preparación final para plataformas digitales y distribución.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>Sobre YAEL.WAV</h2>

        <p>
          En YAEL.WAV buscamos apoyar a artistas y creadores de contenido
          mediante servicios de producción musical, mezcla y masterización.
        </p>
      </section>

      <section className="contact">
        <h2>Contacto</h2>

        <form className="contact-form" onSubmit={enviarFormulario}>
          <input type="text" placeholder="Nombre" required />

          <input
            type="email"
            placeholder="Correo electrónico"
            required
          />

          <textarea
            placeholder="Escribe tu mensaje"
            rows="5"
            required
          />

          <button type="submit" className="btn">
            Enviar Mensaje
          </button>
        </form>
      </section>

      <footer>
        <p>© 2026 YAEL.WAV Studio</p>
      </footer>
    </div>
  );
}

export default App;