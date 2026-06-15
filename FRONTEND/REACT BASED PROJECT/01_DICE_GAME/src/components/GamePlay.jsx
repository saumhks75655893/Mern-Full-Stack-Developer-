import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import DiceRoll from './DiceRoll'
import GameRules from './GameRules'

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedValue, setSelectedValue] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const rollDice = () => {
    if (!selectedValue) {
      setError("Please select a number before rolling the dice.")
      return // If no number is selected, do not update the score
    }

    const randomValue = generateRandomNumber(1, 6)
    setCurrentDice(randomValue)


    if (randomValue === selectedValue) {
      setScore(prev => prev + randomValue)
    } else {
      setScore(prev => prev - randomValue)
    }

    setSelectedValue(null) // Reset selected value after each roll
  }


  const resetScore = () => {
    setScore(0);
    setSelectedValue(null);
    setCurrentDice(1);
    setError("");
  }
  const handleShowRules = () => {
    setRules(!rules)
  }

  return (
    <div className='overflow-auto'>
      <div className="flex flex-row gap-5 justify-around items-center">
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      </div>

      <DiceRoll currentDice={currentDice} rollDice={rollDice} />

      <div className="btns flex flex-col items-center justify-center gap-4">
        <button className="bg-red-900 text-white px-10 py-3 rounded-md font-bold hover:bg-red-800 transition duration-300" onClick={resetScore}>
          Reset Score
        </button>
        <button className="bg-green-700 text-white px-10 py-3 rounded-md font-bold hover:bg-green-600 transition duration-300" onClick={handleShowRules}>
          {rules ? "Hide Rules" : "Show Rules"}
        </button>

        {rules && <GameRules />}
      </div>
    </div>
  )
}

export default GamePlay
