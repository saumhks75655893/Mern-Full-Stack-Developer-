import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [xRotate, setXRotate] = useState(0)
  // console.log(value)

  const randomX = gsap.utils.random(-500, 500, 10);
  const rotateX = gsap.utils.random(-360, 300, 10)
  const randomY = gsap.utils.random(-300, 200, 10);

  const imageRef = useRef();

  // useGSAP(() => {
  //   gsap.to(imageRef.current, {
  //     x: xValue,
  //     y: yValue,
  //     rotate: xRotate,
  //     duration: 1,
  //   })
  // }, [xValue, yValue, xRotate])

  useGSAP(() => {
    gsap.to(imageRef.current, {
      x: xValue,
      y: yValue,
      rotate: xRotate,
      duration: 1,
    })
  }, { scope: "main", dependencies: [xValue, yValue, xRotate] })

  return (
    <main>
      <button onClick={() => {
        setXValue(randomX)
        setYValue(randomY)
        setXRotate(rotateX)
      }
      } className="animate">Animate</button>
      <img onClick={() => {
        setXValue(randomX)
        setYValue(randomY)
        setXRotate(rotateX)
      }} ref={imageRef} width="150px" src="../fly.png" alt="" />
    </main >
  )
}

export default App
