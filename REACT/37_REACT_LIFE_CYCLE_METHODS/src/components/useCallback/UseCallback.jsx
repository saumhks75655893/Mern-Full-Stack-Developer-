import React, { memo, useState } from 'react'

const UseCallback = () => {


  console.log("Child rendering");

  return (
    <div>



      usecallback
    </div>
  )
}

export default memo(UseCallback); 
