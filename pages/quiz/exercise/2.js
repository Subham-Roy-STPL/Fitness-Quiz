import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

import Image from 'next/image'
import exercise_img2 from "../../../assets/exercise2.png"

const Second = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
            <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={30} />
            <div className='relative top-20 left-0 w-screen bg-transparent mt-16 z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 '>How many times do you do in a week?</p>
                <Image src={exercise_img2} alt='exercise-logo' height={300}/>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"1 Time"} ans={answer} setAns={setAnswer} />
                    <Option text={"2 Times"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"3 Times"} ans={answer} setAns={setAnswer} />
                    <Option text={"4 Times"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"5 Times"} ans={answer} setAns={setAnswer} />
                    <Option text={"6 Times"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center mb-32'>
                    <Option text={"7 Times"} ans={answer} setAns={setAnswer} />
                </div>
            </div>
            <Footer next={"/exercise/3"} question={"How many times do you do in a week?"} answer={answer} />
        </div>
    )
}

export default Second