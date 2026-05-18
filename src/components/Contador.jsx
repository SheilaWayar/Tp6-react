import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <h2 style={{ color: count > 0 ? "green" : "red" }}>
        Contador: {count}
      </h2>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "10px", padding: "8px 16px", cursor: "pointer" }}
      >
        +1
      </button>
      
      <button 
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
        style={{ 
          marginRight: "10px", 
          padding: "8px 16px", 
          cursor: count === 0 ? "not-allowed" : "pointer",
          opacity: count === 0 ? 0.5 : 1
        }}
      >
        -1
      </button>
      
      <button 
        onClick={() => setCount(0)}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Contador;