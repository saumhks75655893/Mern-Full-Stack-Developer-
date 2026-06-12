import React, { useCallback, useState } from 'react'
import UseMemo from './components/useMemo/UseMemo'
import UseCallback from './components/useCallback/UseCallback'

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  console.log("Parent rendering")

  function handleClick() {
    setData("hks")
  }

  // const memoizedHandleClick = useCallback(() => {
  //   return handleClick();
  // }, []);

  const memoizedHandleClick = useCallback(handleClick, []);

  return (
    <div>
      {/* Problem in memo HOC */}
      {/* <UseCallback handleClick={handleClick} />  */}

      {/* Solution of memo HOC */}
      <UseCallback memoizedHandleClick={memoizedHandleClick} />

      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  )
}

export default App
