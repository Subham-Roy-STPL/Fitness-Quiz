import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Body = () => {

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)

    const [opt, setOpt] = useState("Metric")

    return (
        <div className='relative h-screen'>
            <Header fill={20} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20'>What is your current height and weight?</p>
                <div className='flex flex-row'>
                    <p onClick={() => { setOpt("Imperial") }} className={`border border-black text-black w-[100px] text-center py-1 m-5 rounded cursor-pointer ${opt == "Imperial" ? "bg-white" : "hover:bg-white"} duration-500 text-lg font-extralight`}>IMPERIAL</p>
                    <p onClick={() => { setOpt("Metric") }} className={`border border-black text-black w-[100px] text-center py-1 m-5 rounded cursor-pointer ${opt == "Metric" ? "bg-white" : "hover:bg-white"} duration-500 text-lg font-extralight`}>METRIC</p>
                </div>
                <p className='text-gray-800'>Weight {opt == "Metric" ? "(kg)" : "(lbs)"}</p>
                <input value={weight} onChange={(e) => { setWeight(e.target.value) }} className='border border-black text-black w-[500px] text-center py-2 m-5 rounded cursor-pointer focus:bg-white focus:border-none bg-none text-2xl font-extralight' />
                <p className='text-gray-800'>Height {opt == "Metric" ? "(cm)" : "(feet)"}</p>
                <input value={height} onChange={(e) => { setHeight(e.target.value) }} className='border border-black text-black w-[500px] text-center py-2 m-5 rounded cursor-pointer focus:bg-white focus:border-none bg-none text-2xl font-extralight' />
            </div>
            <Footer next={"/eating"} question={"What is your current height and weight?"} answer={{ weight, height, unit: opt }} />
        </div>
    )
}

export default Body