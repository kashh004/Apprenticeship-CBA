import { useState } from 'react'
import './App.css'
import ClassComponent from './classcomponents';
import FunctionalComponent from './functionalcomponents';
import PropsComponent from './propscomponents';
import Greeting from './greeting';
import Card from './card';
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
        <Greeting name="Akash" age={21} />
        <hr />
        <Card title="React Card 1" description="This is the first card component." />
        <Card title="React Card 2" description="This is the second card component with different content." />
      </div>
    </>
  )
}

export default App
