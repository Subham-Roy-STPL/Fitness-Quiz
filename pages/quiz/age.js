import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Option from '@/components/option'

const Age = () => {

    const [answer, setAnswer] = useState(1)

    return (
        <div className='relative h-screen'>
            <Header fill={10} />
            <div className='relative top-20 left-0 w-screen bg-[#dedccf] min-h-[90%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-[#343434] text-4xl font-extralight mb-20 min-[1024px]:mt-0 mt-20'>How old are you?</p>
                <p className='text-center text-[#343434] text-xl font-extralight mb-5'>{answer} {answer==1?'year old':'years old'}</p>
                <input type="range" min={1} max={130} className='w-[300px]' value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
            </div>
            <Footer next={"/gender"} question={"How Old Are You?"} answer={answer} />
        </div>
    )
}

export default Age