import React, { useState } from "react";

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div id="contacto" className="card">
      <h2>Contacto</h2>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows="4"
          required
        />
        
        <button type="submit">Enviar</button>
      </form>

      <div className="preview">
        <h3>Preview en vivo:</h3>
        <p><strong>Nombre:</strong> {nombre || "-"}</p>
        <p><strong>Email:</strong> {email || "-"}</p>
        <p><strong>Mensaje:</strong> {mensaje || "-"}</p>
      </div>
    </div>
  );
}

export default ContactForm;