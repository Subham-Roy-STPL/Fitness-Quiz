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
             <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={50} />
            <div className='relative top-20 left-0 w-screen bg-transparent min-h-[120%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20'>What is your current height and weight?</p>
                <div className='flex flex-row'>
                    <p onClick={() => { setOpt("Imperial") }} className={`border border-black text-white w-[100px] text-center py-1 m-5 rounded cursor-pointer ${opt == "Imperial" ? "bg-white" : "hover:bg-white"} duration-500 text-lg font-extralight`}>IMPERIAL</p>
                    <p onClick={() => { setOpt("Metric") }} className={`border border-black text-white w-[100px] text-center py-1 m-5 rounded cursor-pointer ${opt == "Metric" ? "bg-white" : "hover:bg-white"} duration-500 text-lg font-extralight`}>METRIC</p>
                </div>
                <p className='text-gray-800'>Weight {opt == "Metric" ? "(kg)" : "(lbs)"}</p>
                <input value={weight} type="number" onChange={(e) => { if (!isNaN(e.target.value)) setWeight(e.target.value) }} className='border border-black text-black min-[510px]:w-[500px] w-[300px] text-center py-2 m-5 rounded cursor-pointer focus:bg-white focus:border-none bg-none min-[510px]:text-2xl text-lg font-extralight' />
                <p className='text-gray-800'>Height {opt == "Metric" ? "(cm)" : "(feet)"}</p>
                <input value={height} type='number' onChange={(e) => { if (!isNaN(e.target.value)) setHeight(e.target.value) }} className='border border-black text-black min-[510px]:w-[500px] w-[300px] text-center py-2 m-5 rounded cursor-pointer focus:bg-white focus:border-none bg-none min-[510px]:text-2xl text-lg font-extralight' />
            </div>
            <Footer next={"/eating"} question={"What is your current height and weight?"} answer={weight==0||height==0?"":{ weight, height, unit: opt }} />
        </div>
    )
}

export default Body