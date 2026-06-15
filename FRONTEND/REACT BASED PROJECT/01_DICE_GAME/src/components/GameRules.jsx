import React from 'react'

const GameRules = () => {
  return (
    <div className="rules bg-white/60 p-6 rounded-lg shadow-md mt-6 mb-6">
      <h1 className='font-bold text-xl text-black/70'>How to Play Dice Game</h1>
      <p className='text-lg text-black/50'>1. Select a number between 1 and 6 using the number selector.</p>
      <p className='text-lg text-black/50'>2. Click the 'Roll Dice' button to roll the dice.</p>
      <p className='text-lg text-black/50'>3. If the rolled number matches your selected number, you earn points equal to that number.</p>
      <p className='text-lg text-black/50'>4. If the rolled number does not match, you lose points equal to that number.</p>
      <p className='text-lg text-black/50'>5. You can reset your score at any time by clicking the 'Reset Score' button.</p>
      <p className='text-lg text-black/50'>6. Try to achieve the highest score possible!</p>
    </div>
  )
}

export default GameRules
