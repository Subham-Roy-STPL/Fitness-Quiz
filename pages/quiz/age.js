import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Age = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
            <Header fill={20} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20'>How Old Are You?</p>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"1-10 years"} ans={answer} setAns={setAnswer} />
                    <Option text={"10-20 years"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"20-30 years"} ans={answer} setAns={setAnswer} />
                    <Option text={"30-40 years"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"40-50 years"} ans={answer} setAns={setAnswer} />
                    <Option text={"50-60 years"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"60-70 years"} ans={answer} setAns={setAnswer} />
                    <Option text={"70-80 years"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"80-90 years"} ans={answer} setAns={setAnswer} />
                    <Option text={"90-100 years"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"100-110 years"} ans={answer} setAns={setAnswer} />
                    <Option text={"110-120 years"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"120-130 years"} ans={answer} setAns={setAnswer} />
                </div>
            </div>
            <Footer next={"/gender"} question={"How Old Are You?"} answer={answer} />
        </div>
    )
}

export default Age