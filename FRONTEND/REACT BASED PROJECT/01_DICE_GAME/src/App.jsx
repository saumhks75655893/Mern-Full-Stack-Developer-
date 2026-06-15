import React from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

const App = () => {
  const [isGameStarted, setIsGameStarted] = React.useState(false)

  function handleStartGame() {
    setIsGameStarted(prev => !prev)
  }

  return (
    <div>

      {
        isGameStarted ? <GamePlay /> : <StartGame toggleGameStart={handleStartGame} />
      }
    </div>
  )
}

export default App
