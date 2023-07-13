import React, { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'
import MultiOption from '@/components/multiOptions'
import dynamic from 'next/dynamic'

const First = () => {

    const [answer, setAnswer] = useState("")
    // const addItem = (t) => {
    //     let a = answer
    //     let index = a.indexOf(t)
    //     if (index > -1) {
    //         a.splice(index, 1)
    //     }
    //     else {
    //         if (a.length < 3) {
    //             a.push(t)
    //         }
    //     }
    //     setAnswer(a)
    // }

    // useEffect(() => {
    //     console.log("Changed")

    // }, [answer])

    return (
        <div className='relative h-screen'>
            <Header fill={30} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20'>What kind of exercise do you do?</p>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"RESISTANCE OR WEIGHT TRAINING"} ans={answer} setAns={setAnswer} />
                    <Option text={"RUNNING"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"CYCLING"} ans={answer} setAns={setAnswer} />
                    <Option text={"YOGA, PILATES"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"DANCE, AEROBICS"} ans={answer} setAns={setAnswer} />
                    <Option text={"SWIMMING"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"TEAM SPORTS"} ans={answer} setAns={setAnswer} />
                    <Option text={"INDIVIDUAL SPORTS"} ans={answer} setAns={setAnswer} />
                </div>
                <div className='flex min-[1024px]:flex-row flex-col justify-center items-center'>
                    <Option text={"ACTIVE LIFESTYLE"} ans={answer} setAns={setAnswer} />
                    <Option text={"OTHER"} ans={answer} setAns={setAnswer} />
                </div>
            </div>
            <Footer next={"/exercise/2"} question={"What kind of exercise do you do?"} answer={answer} />
        </div>
    )
}

export default dynamic(() => Promise.resolve(First), {
    ssr: false
})