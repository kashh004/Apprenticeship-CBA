

function Card(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      maxWidth: '300px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;