import React from 'react'
import { useState } from 'react'

const NumberSelector = ({ selectedValue, setSelectedValue, error, setError }) => {

  const numArr = [1, 2, 3, 4, 5, 6]

  const [isSelected, setIsSelected] = useState(false)

  function handleNumberSelect(num) {
    setSelectedValue(num)
    setIsSelected(true)
    setError("");
  }

  return (
    <div className="flex flex-col items-end justify-center gap-2 mt-9">

      {error && <p className='text-red-500 text-sm font-semibold'>{error}</p>}
      <div className="flex flex-wrap gap-4" >
        {
          numArr.map((num, i) => (
            <div
              key={i}
              style={{ backgroundColor: (num === selectedValue ? 'black' : 'white'), color: (num === selectedValue ? 'white' : 'black') }}
              onClick={() => {
                handleNumberSelect(num)
              }}
              className="bg-white border-2 text-2xl text-black font-bold px-8 py-3 rounded-md"
            >
              {num}
            </div>
          ))
        }
      </div >
      <p className='text-xl text-black/70'> Select Number </p>
    </div>
  )
}

export default NumberSelector
