import React, { useMemo, useState } from 'react'

const Alpha = () => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const expensiveTask = () => {
    for (let i = 1; i <= 700000000; i++) { }
    return 2;
  }

  const expensiveResult = useMemo(() => {
    const result = expensiveTask();
    return result;
  }
    , [count]);

  return (
    <>

      <h1>{expensiveResult}</h1>
      <button onClick={() => setCount(count + 1)}>
        Count :  {count}
      </button>
      <button onClick={() => setQuantity(quantity + 1)}>
        Quantity :  {quantity}
      </button>
    </>
  )
}

export default Alpha
