import React from 'react'
import { forwardRef } from 'react';

const Before19UseRef = (props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" placeholder='before 19' />
    </div>
  )
}

export default forwardRef(Before19UseRef); 
