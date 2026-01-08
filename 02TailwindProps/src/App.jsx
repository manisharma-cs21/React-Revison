import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card name="Holy Book" btnText="View More"/>
      <Card name="Book of Faith " btnText="Read More" />
    </>
  )
}

export default App


// Properties 
// basically props by default hmaare components ke function  me as input pass hote h and if hum chahte h ki same card hum again again use kre
//like jo uper mene use kiya h but usme kch changes ho like name ,or bhi card inputs to wo hum props ke
// props ke through kr skte h apne component  me input as object pass krke pass krke ;
// like <Card name="xyz" ya object declare krke
//let obj={name:"xyz", age:21} and ye variable <Card myobj={obj}/> aise pass krke 

