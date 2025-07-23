import { useState } from 'react'
import './App.css'
import Header from './header';
import Footer from './footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Welcome to React App</h2>
        <p>This is main content section!!</p>
      </main>
      <Footer />
    </>
  )
}

export default App
