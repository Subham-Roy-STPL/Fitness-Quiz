import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Sleep = () => {

    const [sleep, setSleep] = useState(0)

    return (
        <div className='relative h-screen'>
             <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={90} />
            <div className='relative top-20 left-0 w-screen bg-transparent mt-16 z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extralight mb-20 min-[1024px]:mt-0 '>How many hours do you sleep?</p>
                <p className='text-center text-white text-xl font-extralight mb-5'>{sleep} {sleep==1?"hour":"hours"}</p>
                <input type="range" min={0} max={12} className='w-[300px]' value={sleep} onChange={(e) => { setSleep(e.target.value) }} />
            </div>
            <Footer next={"/result"} question={"How many hours do you sleep?"} answer={sleep + " hours"} />
        </div>
    )
}

export default Sleep