import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Exercise = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
            <Header fill={20} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20'>Do You Exercise?</p>
                <Option text={"Yes"} ans={answer} setAns={setAnswer} />
                <Option text={"No"} ans={answer} setAns={setAnswer} />
            </div>
            <Footer next={answer == "Yes" ? "/exercise/1" : "/nutrition"} question={"Do You Exercise?"} answer={answer} />
        </div>
    )
}

export default Exercise