import React, { useState } from 'react'

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const formValues = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    console.log("Submitted")

    setFormData({ email: "", password: "" })
  }



  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='rounded-3xl p-20 backdrop-blur-3xl bg-black/80 shadow-xs shadow-white'>
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col justify-center gap-3 '>
          <input required value={formData.email} name='email' type="email" placeholder='Enter Email ' className='px-5 py-2 border-2 border-emerald-400 rounded-full bg-transparent hover:border-emerald-500 outline-none text-white placeholder:text-gray-400' onChange={(e) => formValues(e)} />
          <input required value={formData.password} name='password' type="password" placeholder='Enter Password' className='px-5 py-2 border-2 border-emerald-400 rounded-full bg-transparent hover:border-emerald-500 outline-none text-white placeholder:text-gray-400' onChange={(e) => formValues(e)} />
          <button className='px-5 py-2 border-2 border-emerald-400 rounded-full bg-emerald-400 hover:bg-emerald-500 outline-none text-white mt-9 font-bold'>Log in</button>
        </form>
      </div>

    </div>
  )
}

export default Login
