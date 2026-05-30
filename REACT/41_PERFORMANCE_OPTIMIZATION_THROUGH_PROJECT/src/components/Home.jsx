import React from 'react'

const Home = () => {
  return (
    <div className='uppercase font-bold text-center'>

      <section className="hero">
        <h1>Build Amazing Websites</h1>
        <p>
          Modern, Responsive and Attractive React Website Design
        </p>

        <button>Get Started</button>
      </section>


      < h1 className='text-7xl text-blue-500 p-4'> Welcome to My Website</h1 >
      <p className='text-3xl text-black-800 bg-blue-600 p-7 rounded-2xl'>
        This is the Home Page. Here you can add your main content, banner,
        features, and other information.
      </p>



      <section className="cards">
        <div className="card">
          <h3>Fast</h3>
          <p>Optimized performance and speed.</p>
        </div>

        <div className="card">
          <h3>Responsive</h3>
          <p>Works on Mobile, Tablet and Desktop.</p>
        </div>

        <div className="card">
          <h3>Modern UI</h3>
          <p>Clean and attractive user interface.</p>
        </div>
      </section>
    </div>

  )
}

export default Home
