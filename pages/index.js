import React, { useEffect } from 'react'
import { useRouter } from "next/router"

const Index = () => {

  const router = useRouter()

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center relative bg-transparent'>
      <div className='backgroundOverlayGreen'></div>
      <div className='backgroundOverlay'></div>
      <p className='text-white text-5xl text-center font-extrabold'>
        Your fitness journey<br />starts here.
      </p>
      <p className='text-white text-xl font-extralight text-center my-12'>
        Take on the new year with a personalized<br />performance nutrition system
      </p>
      <p className='bg-[#333333] text-[#dedccf] py-3 px-10 rounded-[30px] cursor-pointer' onClick={() => { router.push("/quiz/age") }}>
        TAKE THE QUIZ
      </p>
    </div>
  )
}

export default Index