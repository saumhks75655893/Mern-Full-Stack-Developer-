import React, { memo } from 'react'

const ProductList = ({ products, handleClick }) => {
  console.log("Product List re-rendered")
  return (
    <div className='border-2 border-red py-3'>
      {
        products.map((elem, index) => {
          return (
            <div className='productValue' key={index}>
              <h2>{index}</h2>
              <h4 style={{ color: "black" }} >{elem.name} </h4>
              <button onClick={() => handleClick(elem.name)}>Select</button>
            </div>
          )
        })
      }
    </div >
  )
}

export default memo(ProductList); 
