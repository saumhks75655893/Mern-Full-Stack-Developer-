import React, { useEffect, useState } from 'react'

const Form = () => {

  const [name, setName] = useState(localStorage.getItem('name') || '');
  console.log(name)

  useEffect(() => {
    return () => {
      localStorage.clear();
    }
  }, [])

  return (
    <div>
      <input type="text" placeholder='enter name' onChange={(e) => {
        setName(e.target.value)
        localStorage.setItem('name', e.target.value);
      }} />
    </div>
  )
}

export default Form
