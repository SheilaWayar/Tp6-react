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
      <h2 style={{ color: "#831f6a", marginBottom: "1rem", textAlign: "center" }}>
        Contacto
      </h2>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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

      <div style={{ 
        marginTop: "2rem", 
        padding: "1.5rem", 
        border: "2px dashed #6a1b1b", 
        borderRadius: "8px", 
        background: "#f9f4f4" 
      }}>
        <h3 style={{ margin: "0 0 1rem 0", color: "#bb1a6a", fontSize: "18px" }}>
          Preview en vivo:
        </h3>
        <p style={{ color: "#555", margin: "0.5rem 0" }}>
          <strong style={{ color: "#9b1d4d" }}>Nombre:</strong> {nombre || "-"}
        </p>
        <p style={{ color: "#555", margin: "0.5rem 0" }}>
          <strong style={{ color: "#9b1d4d" }}>Email:</strong> {email || "-"}
        </p>
        <p style={{ color: "#555", margin: "0.5rem 0" }}>
          <strong style={{ color: "#9b1d4d" }}>Mensaje:</strong> {mensaje || "-"}
        </p>
      </div>
    </div>
  );
}

export default ContactForm;