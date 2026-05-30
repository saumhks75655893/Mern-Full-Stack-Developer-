import React, { useEffect, useState } from 'react'

const Alpha = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("mounting.. ")
  // }, [count])

  useEffect(() => {
    console.log("Mounting....")

    return () => {
      console.log("Unmounting")
    }
  }, [])
  return (
    <>
      <div>
        alpha {count}
      </div>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Alpha
