import React from "react";

function Header() {
  return (
    <header style={{
      padding: '1rem 2rem', 
      background: '#282c34', 
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>TP N°6 SHEILA WAYAR- React</h1>
        <nav>
          <a href="#" style={{color: 'white', marginRight: '1.5rem', textDecoration: 'none'}}>
            Inicio
          </a>
          <a href="#contacto" style={{color: 'white', textDecoration: 'none'}}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header