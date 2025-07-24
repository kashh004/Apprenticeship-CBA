import React from 'react';

function FunctionalComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{
      border: "2px solid #4CAF50",
      borderRadius: "8px",
      padding: "20px",
      maxWidth: "300px",
      margin: "20px auto",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      color: "black"
    }}>
      <h2>Interactive Functional Component</h2>
      <p>Current Count: {count}</p>
      <button
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default FunctionalComponent;
