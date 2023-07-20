import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

import Image from 'next/image'
import exercise_img from "../../assets/exercise.png"

const Lifestyle = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
             <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={30} />
            <div className='relative top-20 left-0 w-screen bg-transparent min-h-[120%] z-10 flex flex-col justify-center items-center pb-32'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20'>What is your lifestyle?</p>
                <Image src={exercise_img} alt='exercise-logo' height={300}/>
                <Option text={"Sedentary lifestyle"} ans={answer} setAns={setAnswer} />
                <Option text={"Moderately active lifestyle"} ans={answer} setAns={setAnswer} />
                <Option text={"Active lifestyle"} ans={answer} setAns={setAnswer} />
            </div>
            <Footer next={"/eating"} question={"What is your lifestyle?"} answer={answer} />
        </div>
    )
}

export default Lifestyle