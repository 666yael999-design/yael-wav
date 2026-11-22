import { useState } from "react";
import "./App.css";

function App() {
<<<<<<< HEAD
  const [mensaje, setMensaje] = useState(
    "Producción musical, mezcla y masterización profesional"
  );

  return (
    <div className="container">
      <header className="hero">
        <h1>YAEL.WAV</h1>

        <p className="subtitle">{mensaje}</p>

        <button
          className="btn"
          onClick={() =>
            setMensaje(
              "🎵 ¡Bienvenido a YAEL.WAV Studio! Gracias por visitarnos 🎵"
            )
          }
        >
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
          mediante servicios de producción musical, mezcla y masterización de
          manera accesible y personalizada.
        </p>
      </section>

      <section className="contact">
        <h2>Contacto</h2>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("✅ Mensaje enviado correctamente");
          }}
        >
          <input
            type="text"
            placeholder="Nombre"
            required
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            required
          />

          <textarea
            placeholder="Escribe tu mensaje"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn">
            Enviar Mensaje
          </button>
        </form>
      </section>

      <footer>
        <p>© 2026 YAEL.WAV Studio</p>
      </footer>
=======
  const [mensaje, setMensaje] = useState("Bienvenido a Yael.wav");

  return (
    <div className="container">
      <h1>YAEL.WAV</h1>

      <p>{mensaje}</p>

      <button onClick={() => setMensaje("Gracias por visitar mi proyecto yaelwav :)")}>
        
      </button>

      <h2>Servicios</h2>

      <ul>
        <li>Producción musical</li>
        <li>Mezcla</li>
        <li>Masterización</li>
      </ul>
>>>>>>> 36b2b4420e3cfed6730ec870bb136a506cf49370
    </div>
  );
}

export default App;