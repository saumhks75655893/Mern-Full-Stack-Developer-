import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);

  // Mounting...
  useEffect(() => {
    console.log("Mounting .... ")
  }, [])


  // Updating ... 
  useEffect(() => {
    console.log("data change hua")
  }, [data])
  useEffect(() => {
    console.log("Count change hua")
  }, [count])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{data}</h1>
      <button onClick={() => setData(data - 1)}>Decrement</button>
    </div>
  )
}

export default App
