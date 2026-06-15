import React from 'react'

const StartGame = ({ toggleGameStart }) => {
  return (
    <div className="main">

      <container className="p-[80px] w-[100%] h-[100vh] flex items-center justify-center mx-auto">
        <div className="image w-[40vw] h-[100vh] ">
          <img className="w-full h-[100%] object-contain" src="https://www.pngarts.com/files/10/Dice-PNG-Photo.png" alt="dice" />
        </div>
        <div className="heading relative w-[60vw] h-[100vh] flex flex-col items-end justify-center">
          <h1 className="text-6xl font-bold">Welcome to Dice Game</h1>
          <button className="bg-black hover:bg-black/80 text-white font-bold py-3 px-8 border border-blue-500 rounded mt-6" onClick={toggleGameStart}>
            Start Game
          </button>
        </div>
      </container>
    </div>
  )
}

export default StartGame
