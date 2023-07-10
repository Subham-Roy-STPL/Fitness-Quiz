import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Three = () => {

    const [level, setLevel] = useState(1)

    return (
        <div className='relative h-screen'>
            <Header fill={20} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20'>What is your activity level apart from workout?</p>
                <p className='text-center text-[#343434] text-xl font-extralight mb-5'>{level == 1 ? "Low" : level == 2 ? "Moderate" : "High"}</p>
                <input type="range" min={1} max={3} className='w-[300px]' value={level} onChange={(e) => { setLevel(e.target.value) }} />
            </div>
            <Footer next={"/nutrition"} question={"What is your activity level apart from workout?"} answer={level == 1 ? "Low" : level == 2 ? "Moderate" : "High"} />
        </div>
    )
}

export default Three