import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Preference = () => {

    const [answer, setAnswer] = useState("")

    return (
        <div className='relative h-screen'>
             <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={70} />
            <div className='w-screen bg-transparent mt-16 mb-12 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 '>Do you have any Dietary Preferences ?</p>
                <Option text={"Veg"} ans={answer} setAns={setAnswer} />
                <Option text={"Non-Veg"} ans={answer} setAns={setAnswer} />
                <Option text={"Vegan"} ans={answer} setAns={setAnswer} />
            </div>
            <Footer next={"/allergy"} question={"Do you have any Dietary Preferences ?"} answer={answer} />
        </div>
    )

}

export default Preference