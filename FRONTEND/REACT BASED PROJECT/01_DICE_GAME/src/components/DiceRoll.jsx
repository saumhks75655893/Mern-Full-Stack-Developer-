import React from 'react'
import { useState } from 'react'
const DiceRoll = ({ currentDice, rollDice }) => {

  return (
    <div className="w-full h-60 rounded-lg flex justify-center items-center">
      <div className="h-full flex flex-col gap-1 justify-center items-center">
        <div className="dice" onClick={rollDice} >
          <img className='h-[200px]' src={`/dice_images/dice_${currentDice}.png`} alt={`dice_${currentDice}`} />
        </div>
        <p className='text-lg font-semibold'> Click on dice to roll </p>
      </div>
    </div>
  )
}

export default DiceRoll
