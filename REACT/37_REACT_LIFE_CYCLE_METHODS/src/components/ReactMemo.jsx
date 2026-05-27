import React, { memo, useEffect, useState } from 'react'

const ReactMemo = ({ props }) => {

  const [name, setName] = useState('');

  useEffect(() => {
    console.log(props);
    console.log("Child Rendering...")
  })

  return (
    <div>
      <input type="text" placeholder='enter name' onChange={(e) => {
        setName(e.target.value)
      }} />

    </div>
  )
}

const EnhancedReactMemo = memo(ReactMemo, (prevProp, nextProp) => {
  console.log(prevProp.props.name);
  return prevProp.props.name === prevProp.props.name
})

export default EnhancedReactMemo; 
