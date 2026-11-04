import { useState } from "react";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;