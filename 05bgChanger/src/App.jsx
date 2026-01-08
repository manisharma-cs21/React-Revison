import React from 'react'
import { useState } from 'react'

function App() {
  const [color,setColor]=useState("black");


  return (
   <div className="w-full h-screen duration-200"  style={{backgroundColor:color}}  >
    <h1 className=' flex flex-wrap justify-center rounded-3xl px-4 py-3 text-3xl bg-white '>Background Color</h1>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'>
        <button onClick={()=>setColor("red")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>
          Red
        </button>
        <button onClick={()=>setColor("green")}  className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>
          Green
        </button >
        <button onClick={()=>setColor("yellow")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>
          Yellow
        </button>
        <button onClick={()=>setColor("blue")} className='outline-none px-3 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>
          Blue
        </button>
        </div>       {/*for nav jisse hum usme buttons add kr ske  */}
    </div>
   </div>
  )
}

export default App
/*
Background color change krne ke liye hum normally button pe onClick se function call krte h
and fir us function me normally setColor function me color pass kr denge 

but what if hum onclick function me hi onClick=setColor("colorName") pass kr de cause setColor bhi to ek function hi h ;
but there is javaScript's Syntax problem jo hmaara onlcick function h wo return value nhi , complete function hi return me 
chahta h like a hook--
to hum 
onClick={()=>setcolor("colorName")}  but hum aise ek arrow function as a return bhej skte h 
*/ 