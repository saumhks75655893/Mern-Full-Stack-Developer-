import React from 'react'
import { useCounter } from "./customHook/useCounter"
import { useState } from 'react';
import { useCardLook } from './customHook/useCardLook';
import Alpha from './components/Alpha'


const App = () => {

  const [value, setValue] = useState();
  const { count, increment, decrement, setByValue } = useCounter(0);

  const AlphaWithCardLook = useCardLook(Alpha);

  return (
    <div>

      <div className='border-5 py-5 rounded-2xl bg-blue-300 text-white'>
        <h1>{count}</h1>
      </div>
      <button onClick={increment} className='px-4 py-3 rounded-xl bg-green-300 my-3 mx-4'>Increment</button>
      <button onClick={decrement} className=' px-4 py-3 rounded-xl bg-red-300 mx-4'>Decrement</button>

      <input type="number" value={value} placeholder='Enter Value' className='px-4 py-3 rounded-xl bg-gray-300 mx-4' onChange={(e) => setValue(e.target.value)} />


      <button onClick={() => setByValue(value)} className='px-4 py-3 rounded-xl bg-yellow-300 mx-4'>SetByValue</button>





      <AlphaWithCardLook props="Himanshu Kumar" />
    </div>
  )
}

export default App
