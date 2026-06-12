import React from 'react'
import { useState } from 'react';

const VT = ({ arr, height, itemHeight }) => {


  const noOfVisibleItems = Math.floor(height / itemHeight);
  console.log(noOfVisibleItems);

  const [indices, setIndices] = useState([0, noOfVisibleItems]);
  const visibleItems = arr.slice(indices[0], indices[1]);

  function handleScroll(e) {
    const { scrollTop } = e.target;
    const newStartingIndex = Math.floor(scrollTop / itemHeight);
    const newEndingIndex = newStartingIndex + noOfVisibleItems;
    console.log(newStartingIndex, newEndingIndex)
    setIndices([newStartingIndex, newEndingIndex]);
  }

  return (
    <div style={{ height: height, backgroundColor: "lightgray", overflowY: "scroll", padding: "20px 20px" }} onScroll={handleScroll}>



      <div style={{ height: arr.length * itemHeight }}>

        <div style={{
          transform: `translateY(${indices[0] * itemHeight}px)`,
        }} className='flex flex-col items-center gap-1'>
          {
            visibleItems.map((item, index) => {
              return (
                <div key={index} style={{ height: itemHeight, width: "50%", border: "1px solid black", marginBottom: "5px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "30px", backgroundColor: "green", fontSize: "30px", fontWeight: "bold", color: "white", padding: "20px" }}>
                  {item}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default VT
