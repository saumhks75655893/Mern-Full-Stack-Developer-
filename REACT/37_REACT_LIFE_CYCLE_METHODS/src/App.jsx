import React, { useEffect, useState } from 'react'
import Alpha from './components/Alpha';
import Form from './components/Form';
import Users from './components/Users';

const App = () => {

  const [count, setCount] = useState(0);
  const [toggal, setToggal] = useState(false);

  return (
    <div>

      {/* {toggal && <Alpha />} */}
      {/* {toggal && <Form />} */}
      {toggal && <Users />}

      <button onClick={() => setToggal(!toggal)}>Toggal</button>
    </div>
  )
}

export default App
