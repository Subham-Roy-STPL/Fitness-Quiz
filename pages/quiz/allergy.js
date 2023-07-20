import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

import Image from 'next/image'
import exercise_img from "../../assets/exercise.png"

const Allergy = () => {

    const [answer, setAnswer] = useState("")
    const [restriction,setRestriction] = useState("")

    return (
        <div className='relative h-screen'>
            <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={30} />
            <div className='relative top-20 left-0 w-screen bg-transparent min-h-[120%] z-10 flex flex-col justify-center items-center pb-32'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20'>Do you have any allergies or dietary restrictions?</p>
                <Image src={exercise_img} alt='exercise-logo' height={300}/>
                <Option text={"Yes"} ans={answer} setAns={setAnswer} />
                <Option text={"No"} ans={answer} setAns={setAnswer} />
                {answer=="Yes"&&<input value={restriction} placeholder='Type your restrictions....' onChange={(e) => { setRestriction(e.target.value) }} className='border border-black text-black min-[510px]:w-[460px] w-[300px] text-center py-2 m-5 rounded cursor-pointer focus:bg-white focus:border-none bg-none min-[510px]:text-2xl text-lg font-extralight' />}
            </div>
            <Footer next={"/health"} question={"Do you have any allergies or dietary restrictions?"} answer={answer+" "+restriction} />
        </div>
    )
}

export default Allergy