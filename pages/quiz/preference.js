import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Preference = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
            <Header fill={70} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20'>Do you have any Dietary Preferences ?</p>
                <Option text={"Veg"} ans={answer} setAns={setAnswer} />
                <Option text={"Non-Veg"} ans={answer} setAns={setAnswer} />
            </div>
            <Footer next={"/health"} question={"Do you have any Dietary Preferences ?"} answer={answer} />
        </div>
    )

}

export default Preference