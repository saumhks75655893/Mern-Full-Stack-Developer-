import React, { useState } from 'react'

const TopContainer = ({ filterData, value, setData, filterDataBasedOnBtns, selectedBtn }) => {
  const arr = [
    {
      value: "All",
      filterDataBasedOnBtns: filterDataBasedOnBtns,
      type: "all",
      selectedBtn: selectedBtn
    },
    {
      value: "Breakfast",
      filterDataBasedOnBtns: filterDataBasedOnBtns,
      type: "Easy",
      selectedBtn: selectedBtn
    },
    {
      value: "Lunch",
      filterDataBasedOnBtns: filterDataBasedOnBtns,
      type: "Medium",
      selectedBtn: selectedBtn
    },
    {
      value: "Dinner",
      filterDataBasedOnBtns: filterDataBasedOnBtns,
      type: "Hard",
      selectedBtn: selectedBtn
    },
  ]
  return (
    <div className='top-container-wrapper bg-black/80  shadow-md'>
      <div className="top-container flex items-center justify-between px-8 py-6 max-[498px]:flex-col max-[498px]:justify-between max-[498px]:h-[150px]">
        <div className="logo text-4xl font-bold text-white ">F<span className='text-red-600'>o</span><span className='text-red-600'>o</span>dy Z<span className='text-red-600'>o</span>ne</div>
        <div className="search">
          <input value={value} className='px-3 py-2 outline-2 outline-red-600 rounded-xl text-white placeholder:text-white' type="text" placeholder="Search for food..." onChange={filterData} />
        </div>
      </div>

      <div className="filter-button-container flex flex-wrap justify-center font-bold px-8 py-4 pt-4 gap-5">

        {
          arr.map((elem, i) => {
            return (
              < FilterButton key={i} value={elem.value} filterDataBasedOnBtns={elem.filterDataBasedOnBtns} type={elem.type} selectedBtn={elem.selectedBtn} />
            )
          })
        }
      </div>
    </div>
  )
}

const FilterButton = ({ value, filterDataBasedOnBtns, type, selectedBtn }) => {

  // console.log(selectedBtn)
  console.log(type)
  return (
    <button
      style={{ backgroundColor: (selectedBtn === type ? '#b7072a' : 'red') }}
      className="px-6 py-2 bg-red-600 text-white rounded-lg cursor-pointer hover:bg-red-700 active:scale-95 transition-colors duration-300" onClick={() => filterDataBasedOnBtns(type)}>{value}</button>
  )
}

export default TopContainer
