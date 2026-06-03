import React from 'react'
import '../App.css'
import Foods from './Foods'

const FoodCartContainer = ({ data, loading }) => {

  if (loading === true) {
    return <h1>Loading.... </h1>
  }

  return (
    <div className='food-cart-container-wrapper h-full z-800'>
      <div className='cover-container h-full'></div>
      <div className='food-cart-container flex flex-col gap-10  items-center justify-start w-full h-full overflow-y-auto py-10'>
        <Foods data={data} />
      </div>
    </div >
  )
}

export default FoodCartContainer
