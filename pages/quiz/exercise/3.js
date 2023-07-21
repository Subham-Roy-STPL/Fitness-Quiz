import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

import Image from 'next/image'
import exercise_img from "../../../assets/exercise.png"

const Three = () => {

    const [level, setLevel] = useState(1)

    return (
        <div className='relative h-screen'>
            <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={30} />
            <div className='w-screen bg-transparent mt-16 mb-12 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 '>What is your activity level apart from workout?</p>
                <Image src={exercise_img} alt='exercise-logo' height={300}/>
                <p className='text-center text-white text-xl font-extralight mb-5'>{level == 1 ? "Low" : level == 2 ? "Moderate" : "High"}</p>
                <input type="range" min={1} max={3} className='w-[300px]' value={level} onChange={(e) => { setLevel(e.target.value) }} />
            </div>
            <Footer next={"/nutrition"} question={"What is your activity level apart from workout?"} answer={level == 1 ? "Low" : level == 2 ? "Moderate" : "High"} />
        </div>
    )
}

export default Three