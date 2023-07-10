import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Eating = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
            <Header fill={20} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20'>How many meals do you have every day?</p>
                <div className='flex flex-row justify-center items-center'>
                    <Option text={"1 Meal"} ans={answer} setAns={setAnswer} />
                    <Option text={"2 Meals"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Option text={"3 Meals"} ans={answer} setAns={setAnswer} />
                    <Option text={"4 Meals"} ans={answer} setAns={setAnswer} />

                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Option text={"5 Meals"} ans={answer} setAns={setAnswer} />
                    <Option text={"6 Meals"} ans={answer} setAns={setAnswer} />
                </div>
            </div>
            <Footer next={"/preference"} question={"How many meals do you have every day?"} answer={answer} />
        </div>
    )
}

export default Eating