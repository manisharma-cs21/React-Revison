import { useState } from 'react'
import React from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-orange-500 text-center my-4 mx-3'>Currency Converter</h1>
    </>
  )
}

export default App
