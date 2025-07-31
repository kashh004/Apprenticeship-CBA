import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is the starting point of your application.</p>
      <Link to="/contact">
        <button style={{ marginTop: '20px', padding: '10px 20px' }}>Go to Contact Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
