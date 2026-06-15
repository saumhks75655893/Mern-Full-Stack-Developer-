import React, { lazy, Suspense } from 'react'
import Hero from './Hero.jsx'

// LAZY import -> component based spilting
const VideoSection = lazy(() => import("./VideoSection.jsx"))
const Settings = lazy(() => import("./Settings.jsx"))
const Testimonials = lazy(() => import("./Testimonials.jsx"))
const Courses = lazy(() => import("./Courses.jsx"))
const FAQ = lazy(() => import("./FAQ.jsx"))

const Home = () => {
  return (
    <div className='uppercase font-bold text-center'>

      <Hero />

      <Suspense fallback="Loading...">
        <Settings />
      </Suspense>

      <Suspense fallback="Loading...">
        <Testimonials />
      </Suspense>

      <Suspense fallback="Loading...">
        <Courses />
      </Suspense>

      <Suspense fallback="Loading...">
        <VideoSection />
      </Suspense>

      <Suspense fallback="Loading...">
        <FAQ />
      </Suspense>

    </div>

  )
}

export default Home
