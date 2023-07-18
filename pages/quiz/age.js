import React, { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

import a1 from "../../assets/age_groups/a1.png"
import a2 from "../../assets/age_groups/a2.png"
import a3 from "../../assets/age_groups/a3.png"
import a4 from "../../assets/age_groups/a4.png"
import a5 from "../../assets/age_groups/a5.png"
import a6 from "../../assets/age_groups/a6.png"

const Age = () => {

    const [answer, setAnswer] = useState(1)

    return (
        <div className='relative h-screen'>
            <div className='backgroundOverlayGreen'></div>
            <div className='backgroundOverlay'></div>
            <Header fill={10} />
            <div className='relative top-20 left-0 w-screen bg-transparent min-h-[120%] z-10 flex flex-col justify-center items-center'>
                <p className='text-center text-white text-4xl font-extrabold mb-20 min-[1024px]:mt-0 mt-20'>How old are you?</p>
                {answer>0&&answer<=10&&<Image src={a1} height={250} alt='age-group-image'/>}
                {answer>10&&answer<=20&&<Image src={a2} height={250} alt='age-group-image'/>}
                {answer>20&&answer<=30&&<Image src={a3} height={250} alt='age-group-image'/>}
                {answer>30&&answer<=40&&<Image src={a4} height={250} alt='age-group-image'/>}
                {answer>40&&answer<=60&&<Image src={a5} height={250} alt='age-group-image'/>}
                {answer>60&&<Image src={a6} height={250} />}
                <p className='text-center text-white text-xl font-extralight mb-5'>{answer} {answer==1?'year old':'years old'}</p>
                <input type="range" min={1} max={130} className='w-[300px] mb-20' value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
            </div>
            <Footer next={"/gender"} question={"How Old Are You?"} answer={answer} />
        </div>
    )
}

export default Age