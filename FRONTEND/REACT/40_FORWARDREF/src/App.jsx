import React, { useRef } from 'react'
import UserInput from './components/UserInput';
import Before19UseRef from './components/Before19UseRef';

const App = () => {

  const inputRef = useRef(null);
  const beforeRef = useRef(null)

  return (
    <div>
      <UserInput inputRef={inputRef} />
      <Before19UseRef ref={beforeRef} />

      {/* <input ref={inputRef} type="text" placeholder='enter name' /> */}
      <button onClick={() => {
        inputRef.current.value = "hks";
        inputRef.current.focus()
      }}>Button</button>



      <button onClick={() => {
        beforeRef.current.value = "hks";
        beforeRef.current.focus()
      }}>Before19</button>
    </div>
  )
}

export default App
