import React, { useRef } from 'react'

const UserInput = ({ inputRef }) => {

  const userInputRef = useRef();

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='userInput' />
    </div>
  )
}

export default UserInput; 
