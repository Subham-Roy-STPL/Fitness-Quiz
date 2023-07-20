import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

import Image from 'next/image'
import exercise_img from "../../assets/exercise.png"

const Exercise = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
             <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={30} />
            <div className='relative top-20 left-0 w-screen bg-transparent mt-16 z-10 flex flex-col justify-center items-center pb-32'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 '>Do You Exercise?</p>
                <Image src={exercise_img} alt='exercise-logo' height={300}/>
                <Option text={"Yes"} ans={answer} setAns={setAnswer} />
                <Option text={"No"} ans={answer} setAns={setAnswer} />
            </div>
            <Footer next={answer == "Yes" ? "/exercise/1" : "/nutrition"} question={"Do You Exercise?"} answer={answer} />
        </div>
    )
}

export default Exercise