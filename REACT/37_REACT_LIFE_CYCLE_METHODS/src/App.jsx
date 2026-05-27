import React, { useEffect, useState } from 'react'
import ReactMemo from './components/ReactMemo';

const App = () => {

  const [count, setCount] = useState(0);
  const [toggal, setToggal] = useState(false);
  const [value, setValue] = useState('');
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
      <input value={value} type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export default App
