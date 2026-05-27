import React, { useEffect, useState } from 'react'

const Users = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('data')) || [])
  console.log(user)

  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json();
      setUser(data);
      localStorage.setItem('data', JSON.stringify(data))
    })()


    //unmouting process
    return () => {
      localStorage.clear()
      setUser([])
    }
  }, [])
  return (
    <div>
      {
        user.map((elem) => {
          return (
            <div key={elem.name}> {elem.name} </div>
          )
        })
      }
    </div>
  )
}

export default Users

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
      {/* unmouting */}
      {toggal && <Users />}

      <button onClick={() => setToggal(!toggal)}>Toggal</button>
    </div>
  )
}

export default App

