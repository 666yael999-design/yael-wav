import { useState } from "react";
import "./App.css";

const beats = [
  {
    id: 1,
    name: "NEON DREAM",
    genre: "TRAP",
    price: "$25 USD",
  },
  {
    id: 2,
    name: "CYBER SOUL",
    genre: "R&B",
    price: "$30 USD",
  },
  {
    id: 3,
    name: "DARK CITY",
    genre: "BOOMBAP",
    price: "$20 USD",
  },
];

function App() {
  const [playing, setPlaying] = useState(null);

  return (
    <div className="app">
      
      <nav className="navbar">
        <div className="logo">YAEL<span>.WAV</span></div>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#beats">Beats</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <main>

        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="small-title">PRODUCCIÓN MUSICAL // 2026</p>

            <h1>
              YAEL<span>.WAV</span>
            </h1>

            <p className="hero-text">
              Beats, producción y sonido para artistas que quieren
              crear algo diferente.
            </p>

            <a href="#beats" className="main-button">
              EXPLORAR BEATS →
            </a>
          </div>

          <div className="hero-decoration">
            <div className="circle"></div>
            <div className="wave">〰〰〰〰</div>
            <p>/// SOUND SYSTEM ///</p>
          </div>
        </section>

        <section className="section" id="servicios">
          <p className="section-number">01 — SERVICIOS</p>
          <h2>SONIDO <span>PROFESIONAL</span></h2>

          <div className="services">
            <div className="service-card">
              <div className="service-icon">01</div>
              <h3>PRODUCCIÓN</h3>
              <p>
                Creación y producción de canciones adaptadas
                al estilo de cada artista.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">02</div>
              <h3>MEZCLA</h3>
              <p>
                Mezcla profesional para conseguir claridad,
                potencia y personalidad.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">03</div>
              <h3>MASTERIZACIÓN</h3>
              <p>
                Masterización preparada para plataformas
                digitales y distribución musical.
              </p>
            </div>
          </div>
        </section>

        <section className="section beats-section" id="beats">
          <p className="section-number">02 — CATÁLOGO</p>
          <h2>BEATS <span>DISPONIBLES</span></h2>

          <div className="beats-grid">
            {beats.map((beat) => (
              <div className="beat-card" key={beat.id}>
                
                <div className="beat-cover">
                  <div className="cover-number">0{beat.id}</div>
                  <div className="cover-text">YAEL.WAV</div>
                </div>

                <div className="beat-info">
                  <h3>{beat.name}</h3>
                  <p>{beat.genre}</p>
                  <strong>{beat.price}</strong>
                </div>

                <button
                  className="play-button"
                  onClick={() =>
                    setPlaying(playing === beat.id ? null : beat.id)
                  }
                >
                  {playing === beat.id ? "❚❚ PAUSAR" : "▶ ESCUCHAR"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="section about" id="sobre-mi">
          <p className="section-number">03 — SOBRE MÍ</p>

          <div className="about-content">
            <div>
              <h2>
                DETRÁS DEL <span>SONIDO</span>
              </h2>
            </div>

            <p>
              Yael.wav es un proyecto dedicado a la producción
              musical, creación de beats y desarrollo de sonido.
              La idea es crear música con una identidad propia,
              combinando sonidos modernos con diferentes estilos.
            </p>
          </div>
        </section>

        <section className="contact" id="contacto">
          <p className="section-number">04 — CONTACTO</p>

          <h2>
            ¿TIENES UN <span>PROYECTO?</span>
          </h2>

          <p>
            Escríbeme para solicitar información sobre beats,
            producción o trabajos personalizados.
          </p>

          <button className="main-button">
            CONTACTAR →
          </button>
        </section>

      </main>

      <footer>
        <div>YAEL.WAV</div>
        <div>© 2026 — MUSIC / PRODUCTION / SOUND</div>
      </footer>

    </div>
  );
}

export default App;