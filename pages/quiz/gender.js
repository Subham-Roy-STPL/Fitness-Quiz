import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Gender = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
            <Header fill={20} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20'>How do you identify yourself?</p>
                <Option text={"Male"} ans={answer} setAns={setAnswer} />
                <Option text={"Female"} ans={answer} setAns={setAnswer} />
                <Option text={"Others"} ans={answer} setAns={setAnswer} />
            </div>
            <Footer next={"/exercise"} question={"How do you identify yourself?"} answer={answer} />
        </div>
    )

}

export default Gender