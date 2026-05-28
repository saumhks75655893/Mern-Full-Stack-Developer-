import React, { memo, useEffect, useState } from 'react'

const ReactMemo = ({ props }) => {

  const [name, setName] = useState('');

  console.log(props);
  useEffect(() => {
    console.log("Child Rendering...")
  })

  return (
    <div>

      <div>{JSON.stringify(props)}</div>
      <input type="text" placeholder='enter name' onChange={(e) => {
        setName(e.target.value)
      }} />

    </div>
  )
}

const EnhancedReactMemo = memo(ReactMemo, (prevProp, nextProp) => {
  return prevProp.props.name === prevProp.props.name
  // return true;
})

export default EnhancedReactMemo; 
