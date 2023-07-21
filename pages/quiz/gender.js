import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

import Image from 'next/image'
import exercise_img2 from "../../assets/exercise2.png"

const Gender = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
             <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={20} />
            <div className='w-screen bg-transparent mt-16 mb-12 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 '>How do you identify yourself?</p>
                <Option text={"Male"} ans={answer} setAns={setAnswer} />
                <Option text={"Female"} ans={answer} setAns={setAnswer} />
                <Option text={"Others"} ans={answer} setAns={setAnswer} />
            </div>
            <Footer next={"/exercise"} question={"How do you identify yourself?"} answer={answer} />
        </div>
    )

}

export default Gender