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
            <div className='w-screen bg-transparent mt-16 mb-12 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 '>What is your current height and weight?</p>
                <div className='flex flex-row'>
                    <p onClick={() => { setOpt("Imperial") }} className={`border border-white w-[100px] text-center py-1 m-5 rounded cursor-pointer ${opt == "Imperial" ? "bg-white text-black" : "hover:bg-white text-white hover:text-black"} duration-500 text-lg font-extralight`}>IMPERIAL</p>
                    <p onClick={() => { setOpt("Metric") }} className={`border border-white w-[100px] text-center py-1 m-5 rounded cursor-pointer ${opt == "Metric" ? "bg-white text-black" : "hover:bg-white text-white hover:text-black"} duration-500 text-lg font-extralight`}>METRIC</p>
                </div>
                <p className='text-white'>Weight {opt == "Metric" ? "(kg)" : "(lbs)"}</p>
                <input value={weight} type="number" onChange={(e) => { if (!isNaN(e.target.value)){ if(e.target.value>=0) setWeight(e.target.value) }}} className='border border-black text-black min-[510px]:w-[500px] w-[300px] text-center py-2 m-5 rounded cursor-pointer focus:bg-white focus:border-none bg-none min-[510px]:text-2xl text-lg font-extralight' />
                <p className='text-white'>Height {opt == "Metric" ? "(cm)" : "(feet)"}</p>
                <input value={height} type='number' onChange={(e) => { if (!isNaN(e.target.value)){ if(e.target.value>=0) setHeight(e.target.value) }}} className='border border-black text-black min-[510px]:w-[500px] w-[300px] text-center py-2 m-5 rounded cursor-pointer focus:bg-white focus:border-none bg-none min-[510px]:text-2xl text-lg font-extralight' />
            </div>
            <Footer next={"/lifestyle"} question={"What is your current height and weight?"} answer={weight==0||height==0?"":{ weight, height, unit: opt }} />
        </div>
    )
}

export default Body