import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Nutrition = () => {
    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
             <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={40} />
            <div className='w-screen bg-transparent mt-16 mb-12 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 '>What are your nutrition goals?</p>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"Build Muscle"} ans={answer} setAns={setAnswer} />
                    <Option text={"Weight Gain"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"Weight Lose"} ans={answer} setAns={setAnswer} />
                    <Option text={"Increase Sport Performance"} ans={answer} setAns={setAnswer} />

                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center min-[768px]:mb-0 mb-32'>
                    <Option text={"General Health"} ans={answer} setAns={setAnswer} />
                    <Option text={"Others"} ans={answer} setAns={setAnswer} />
                </div>
            </div>
            <Footer next={"/body"} question={"What are your nutrition goals?"} answer={answer} />
        </div>
    )
}

export default Nutrition