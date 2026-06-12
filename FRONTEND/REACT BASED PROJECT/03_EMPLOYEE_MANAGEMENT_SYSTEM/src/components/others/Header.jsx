import React from 'react'

const Header = ({ data, changeUser }) => {


  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    // window.location.reload();

    changeUser("")
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='font-semibold text-3xl'>{data.name} 👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 px-3 py-2 rounded-md font-semibold hover:bg-red-500 active:scale-99'>Log Out</button>
    </div>
  )
}

export default Header
