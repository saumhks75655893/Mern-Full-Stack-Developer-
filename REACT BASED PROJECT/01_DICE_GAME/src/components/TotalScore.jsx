import React from 'react'

const TotalScore = ({ score }) => {
  return (
    <div className="flex flex-col justify-center gap-1 max-w-[200px] text-center">
      <h1 className="text-7xl font-bold">{score}</h1>
      <p className="text-3xl font-semibold">Total Score</p>
    </div>
  )
}

export default TotalScore
