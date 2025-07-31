import React from 'react';

function PropsComponent(props) {
  return (
    <div style={{
      border: "2px dashed #9C27B0",
      borderRadius: "8px",
      padding: "15px",
      maxWidth: "300px",
      margin: "20px auto",
      textAlign: "center",
      backgroundColor: "#fef6ff",
      color: "black"
    }}>
      <h1 style={{ fontWeight: "bold", fontSize: "2rem", color: "#2c3e50" }}>
        Hello Your Name is: {props.name}
      </h1>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Message:</strong> {props.message}</p>
    </div>
  );
}

export default PropsComponent;