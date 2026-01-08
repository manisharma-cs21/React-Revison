import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(1)

  const AddValue=()=>{
    console.log("Value Updated",counter);
    if(counter<20){
    counter+=1
    setCounter(counter)
    }
  }
  const RemoveValue=()=>{
    if(counter>0){
    counter-=1;
    setCounter(counter)
    }
  }

  return (
    <>
      <h1>Counter Application </h1>
      <h2>Conter Value :{counter}</h2>
      <button onClick={AddValue}>Add Value</button>
      <br />
      <br />
      <button onClick={RemoveValue}>Remove value</button>
    </>
  )
}

export default App

/*  INTERVIEW QUESTION

here hum counter ko increase or decrease kr rhe h but what will happen if hum addValue waale 
function me  counter=counter+1 repeat kre to like 
const AddValue =()=>{
  setCounter(counter =counter +1)
  setCounter(counter =counter +1)
  setCounter(counter =counter +1)
  setCounter(counter =counter +1)

  Question 1 - now question is ek baar click krne pr ek saath 4+ counter increase hoga ??
  Nhi .. cause hmaara useState function bunch me ui update krta h (Fibre Concept se )
  to bo same kaam ko again and again update nhi krega;


  Question 2 - but what if hme krna hi ho aise update to hum kese krenge?

  haan hum kr skte h cause hmaara jo setCounter h wo ek  function h and use hum value as a callback
  return krte h ui updation ke liye like

  setCounter((prevCounter) => {}) like that ...   mtlb jitni bhi states hoti h wo function hi h
  mtlb yeh ek hidden feature h ..

  to hum use as a callback denge jisse wo hr setCounter ko as a one complete  callback consider krega and ui update krega
  setCounter(prevCounter => counter +1)       
  setCounter(prevCounter => counter +1)    
  setCounter(prevCounter => counter +1)    
  setCounter(prevCounter => counter +1)      // ab yeh 19 update krega 



  }


*/ 