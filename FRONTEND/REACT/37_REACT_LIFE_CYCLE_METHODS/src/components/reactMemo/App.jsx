import React, { useEffect, useState } from 'react'
import ReactMemo from './components/reactMemo/ReactMemo';

const App = () => {

  const [count, setCount] = useState(0);
  const [toggal, setToggal] = useState(false);
  const [obj, setObj] = useState({
    name: "Hks"
  })

  useEffect(() => {
    console.log("Parent rendering...")
  })

  return (
    <div>
      {/* React Memo */}
      <ReactMemo props={obj} />


      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment </button>
      </div>

      <br />
      <br />
      <input value={obj.name} type="text" onChange={(e) => setObj({ ...obj, name: e.target.value })} />
    </div>
  )
}

export default App
