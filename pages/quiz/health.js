import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Health = () => {

    const [answer, setAnswer] = useState("")
    return (
        <div className='relative h-screen'>
            <Header fill={20} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20'>What are your Health Goals?</p>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"Energy Balance"} ans={answer} setAns={setAnswer} />
                    <Option text={"Gut Health"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"Immune Health"} ans={answer} setAns={setAnswer} />
                    <Option text={"Bone Health"} ans={answer} setAns={setAnswer} />

                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"Joint Health"} ans={answer} setAns={setAnswer} />
                    <Option text={"Sleep Quality"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"Brain Health"} ans={answer} setAns={setAnswer} />
                    <Option text={"Other"} ans={answer} setAns={setAnswer} />
                </div>
            </div>
            <Footer next={"/sleep"} question={"What are your Health Goals?"} answer={answer} />
        </div>
    )
}

export default Health