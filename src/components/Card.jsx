import React from "react";
import "./card.css";

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
      />
      
      <h3>{producto.nombre}</h3>
      
      <p className="precio">{formatearPrecio(producto.precio)}</p>
      
      <div className="card-footer">
        <span className="badge categoria">
          {producto.categoria}
        </span>
        
        <span className={`badge stock ${producto.enStock ? 'in-stock' : 'out-stock'}`}>
          {producto.enStock ? "En Stock" : "Sin Stock"}
        </span>
      </div>

      <button>Agregar al carrito</button>
    </div>
  );
}

export default Card;