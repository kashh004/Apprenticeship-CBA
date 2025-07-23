import React from 'react';

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      backgroundColor: 'white',
      color: 'black',
      padding: '1rem',
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <p style={{ margin: 0 }}>&copy; 2025 Akash React App. All rights reserved.</p>
      <div>
        <button style={{
          margin: '0 10px',
          background: 'white',
          color: 'black',
          border: '1px solid #ccc',
          padding: '5px 10px',
          cursor: 'pointer'
        }}>Move Up</button>
        <button style={{
          margin: '0 10px',
          background: 'white',
          color: 'black',
          border: '1px solid #ccc',
          padding: '5px 10px',
          cursor: 'pointer'
        }}>Move Down</button>
      </div>
    </footer>
  );
}

export default Footer;