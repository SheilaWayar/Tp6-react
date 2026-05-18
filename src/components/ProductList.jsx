import React, { useState } from "react";
import Card from "./Card";

const productos = [
  { 
    id: 1, 
    nombre: "Notebook HP", 
    precio: 450000, 
    categoria: "Electrónica", 
    enStock: true,
    imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
  },
  { 
    id: 2, 
    nombre: "Remera Blanca",
    precio: 8500, 
    categoria: "Ropa", 
    enStock: true,
    imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
  },
  { 
    id: 3, 
    nombre: "Auriculares Sony", 
    precio: 32000, 
    categoria: "Electrónica", 
    enStock: false,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  },
  { 
    id: 4, 
    nombre: "Zapatillas Nike", 
    precio: 28000, 
    categoria: "Ropa", 
    enStock: true,
    imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
  },
  { 
    id: 5, 
    nombre: "Mouse Logitech", 
    precio: 5500, 
    categoria: "Electrónica", 
    enStock: true,
    imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
  },
  { 
    id: 6, 
    nombre: "Campera de Cuero",
    precio: 42000, 
    categoria: "Ropa", 
    enStock: false,
    imagen: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"
  }
];

function ProductList() {
  const [categoria, setCategoria] = useState("Todas");
  const [soloStock, setSoloStock] = useState(false);

  const productosFiltrados = productos.filter(p => {
    const coincideCategoria = categoria === "Todas" || p.categoria === categoria;
    const coincideStock = !soloStock || p.enStock;
    return coincideCategoria && coincideStock;
  });

  return (
    <div className="card">
      <h2 style={{ color: "#c2338b", marginBottom: "1rem" }}>Productos</h2>
      
      <div style={{ marginBottom: "1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
        <select 
          value={categoria} 
          onChange={e => setCategoria(e.target.value)}
        >
          <option>Todas</option>
          <option>Electrónica</option>
          <option>Ropa</option>
        </select>

        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input 
            type="checkbox" 
            checked={soloStock} 
            onChange={e => setSoloStock(e.target.checked)} 
          />
          Solo en stock
        </label>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem" 
      }}>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(producto => (
            <Card key={producto.id} producto={producto} />
          ))
        ) : (
          <p style={{ color: "#555" }}>No hay productos que coincidan con el filtro.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;