import React, { useState } from "react";

function TodoApp() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") return;
    setTareas([...tareas, { id: Date.now(), texto: tarea, completada: false }]);
    setTarea("");
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const pendientes = tareas.filter(t => !t.completada).length;

  return (
    <div className="card">
      
      <h2 style={{ color: "#6a1b1b", textAlign: "center", marginBottom: "0.5rem" }}>
        Lista de Tareas
      </h2>
      
      <p style={{ textAlign: "center", color: "#555", marginBottom: "1.5rem" }}>
        Pendientes: <strong>{pendientes}</strong> / {tareas.length}
      </p>

      <form onSubmit={agregarTarea} style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {tareas.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>No hay tareas</p>
        ) : (
          tareas.map(t => (
            <li 
              key={t.id}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                padding: "10px",
                marginBottom: "8px",
                background: "#fff",
                border: "1px solid #d4a5a5",
                borderRadius: "6px"
              }}
            >
              <span 
                onClick={() => toggleCompletada(t.id)}
                style={{ 
                  flex: 1,
                  cursor: "pointer",
                  textDecoration: t.completada ? "line-through" : "none",
                  color: t.completada ? "#888" : "#333"
                }}
              >
                {t.texto}
              </span>
              
              <button 
                onClick={() => eliminarTarea(t.id)}
                style={{ 
                  marginLeft: "10px",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  border: "none",
                  background: "#c62828",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoApp;