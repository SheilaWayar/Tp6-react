import React from "react";

function Card({ producto }) {
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio);
  };

  return (
    <div className="card">
      <img 
        src={producto.imagen} 
        alt={producto.nombre}
        style={{ 
          width: "100%", 
          height: "180px", 
          objectFit: "cover", 
          borderRadius: "6px",
          marginBottom: "1rem"
        }}
      />
      
      <h3 style={{ 
        margin: "0 0 0.5rem 0", 
        color: "#6a1b1b",
        fontSize: "18px"
      }}>
        {producto.nombre}
      </h3>
      
      <p style={{ 
        margin: "0 0 0.5rem 0", 
        color: "#8b4d7a",
        fontWeight: "600",
        fontSize: "20px"
      }}>
        {formatearPrecio(producto.precio)}
      </p>
      
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginTop: "1rem"
      }}>
        <span style={{ 
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "12px",
          background: "#f3e8ee",
          color: "#6a1b1b",
          fontWeight: "500"
        }}>
          {producto.categoria}
        </span>
        
        <span style={{ 
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "12px",
          background: producto.enStock ? "#d4edda" : "#f8d7da",
          color: producto.enStock ? "#155724" : "#721c24",
          fontWeight: "500"
        }}>
          {producto.enStock ? "En Stock" : "Sin Stock"}
        </span>
      </div>
    </div>
  );
}

export default Card;