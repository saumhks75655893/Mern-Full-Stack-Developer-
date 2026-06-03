import React, { useEffect } from 'react'
import axiosInstance from './AxiosFetchData'
import { useState } from 'react'

const Foods = ({ data }) => {

  return (
    <div className='foods-wrapper z-50 flex flex-wrap justify-center items-center gap-10'>
      <FoodCart product={data} />
    </div>
  )
}

const FoodCart = ({ product }) => {
  return (
    <>
      {product?.slice(0, 9).map((item) => (
        <div key={item.id} className='cart w-80 h-50 p-2 food-cart flex items-center justify-center rounded-lg overflow-hidden gap-6 backdrop-blur-xl shadow-xs shadow-white'>

          <div className='food-cart-image'>
            <img style={{ borderRadius: "50%" }} className='w-50 object-cover  overflow-hidden' src={item.image} alt={item.name} />
          </div>

          <div className='flex flex-col gap-4 items-center justify-start food-cart-name text-white font-bold '>
            <h1 className='text-[15px]'>{item.name}</h1>
            <button className='px-2 py-1 bg-red-600 rounded-lg  text-white text-[16px]'> ${item.caloriesPerServing.toFixed(2)}</button>
          </div>

        </div>
      ))}
    </>
  )
}

export default Foods
