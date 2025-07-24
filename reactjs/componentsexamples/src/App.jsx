import { useState } from 'react'
import './App.css'
import ClassComponent from './classcomponents';
import FunctionalComponent from './functionalcomponents';
import PropsComponent from './propscomponents';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ClassComponent />
        <FunctionalComponent />
        <hr />
        <PropsComponent 
          name="Akash" 
          age={21} 
          message="Welcome to React Props Example!" 
        />
        <hr />
      </div>
    </>
  )
}

export default App
