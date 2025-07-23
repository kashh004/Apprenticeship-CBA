

import React from 'react';

function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ccc'
    }}>
      <h1 style={{ margin: 0 }}>Akash React App</h1>
      <nav>
        <button style={{ margin: '0 10px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Home</button>
        <button style={{ margin: '0 10px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Skills</button>
        <button style={{ margin: '0 10px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>Location</button>
      </nav>
    </header>
  );
}

export default Header;