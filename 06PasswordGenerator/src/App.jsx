import React from "react"
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react"
function App() {
  const [length ,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="1234567890"
    if(charAllowed) str+="!@#$%^&*~`"
    
    for(let i=1;i<=length;i++){
      const char=Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(char);

    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])

  // USE REF
  const passwordRef=useRef(null) 

  // Function for Copying Password

  const CopyPasswordonClipboard =useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password])


useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-800 ">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4  bg-white ">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 text-gray-800"
        placeholder="Password"
        readOnly
        ref={passwordRef}
         />
         <button onClick={CopyPasswordonClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           className="cursor-pointer"
           onChange={(e)=>{setLength(e.target.value)}}
           />
           <label >Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox" 
           defaultChecked={numberAllowed}
           id="numberInput"
           onChange={()=>{
            setNumberAllowed((prev)=>!prev);
           }}
          />
          <label htmlFor="numberInput">Numbers Allowed</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }}
          />
          <label htmlFor="charInput">Character Allowed</label>
        </div>
      </div> 
    </div>
    </>
  )
}

export default App

/*README --------------------------- Password Generator   ----------------------------


-------Function Part-----------------------------

step -> 1 for this problem ,humaare pass 4 parameter h jinhe ui pe change krna h to hum unhe pehle state assign krenge 
length,number,character,password generator

step ->2 for random password-generator, hum ek function banayenge 
but hume again and again function call krna padega like numberAllowed,charAllowed ke liye jb click hoga new function call jisse ui slow , memo fail
isse overcome krne ke liye hum useCallback function use krenge
yeh tbhi new function create krega jb state change hongi brna same function react krega 
UI fast ---

step -3  now we call passwordGenerator function using useEffact fuction 
cause useEffect browser ke relod hone pr state change krta h and also 
it changes UI ,if dependencies will be changed like 

useEffect(()=>{},[someDependencies]) cause if we click numberAllowed,charAllowed ,change length 
and also function call --- for optmization purpose

step -4 - now Our only task is --When we click copy button -password is copied to clipboard

for making this function -- we will use useRef
-- basically useRef hook - reference store krne ke liye use hota h like 
for exammple --- mene ek div liya h jisme password input field and ek button banaaya h
jo copy button h basically but kya aapas me connected h -- ans is No
isliye hum useRef lete h and text waale ke input me ref={passwordRef} de denge and isse pehle 
hook useRef define kr denge 

now we add Onclick on button -- and create function ()=>
  ise bhi hum optimaztion ke purpose se callback state me le lenge 
function=callback(()=>{
  window.navigator.clipboard.wrtitetext(password)  clipboard ko hum password write krwa denge 
  },[dependency for memorization])

  and is function ke ander hum ek-do field lenge useRef ka use krke jisse user friendly dikhe 
  like copy krte time proper copy hota hua dikhe i mean blue ho jaaye
*/




/* ----------------------------UI PART ----------------------------------------
IN REACT -- Input field hum react ki tarah 
in  Input field hum input ke according banayenge like hum

-----------------------------------
 1 - First input field me hum password generation ke liye banayenge jisme text readOnly bnayenge 
field like input me 
type -text , value -password jo state me set ki h 
placeholder -Password -- baaki tailwind
and uske sath ek button le lenge jo copy krne ke liye hoga jispe onClick function lagayenge
-----------------------------------
2- Second hum input
 text-range type ka lenge cause hme length leni h 
value-length
min-6 by default
max-100 tk range rhegi
and ispe onChange function use krenge jisme 
onChange(()=>{
  setLength((e)=>(e.target.value))})  mtlb length set krenge according to length variable in state

  uske baad ek label le lenge normal for type showing length

------------------------------------
3- Third Input Field hum 
numberAllowed lenge checkbox type ka
jisme value -- numberAllowed
defaultchecked={numberAllowed} type ka jo false h 
 
isme bhi on change function hoga jo 
onChange(()=>{
  setnumberAllowed((prev)=>!prev)})  mtlb jo previous value hogi uska boolean true , false kr dega 
------------------------------------
4- 4th will same for charAllowed
-----------------------------------


 */

