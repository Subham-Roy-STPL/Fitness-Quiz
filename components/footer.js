import React from 'react'
import { useRouter } from 'next/router'

const Footer = ({ next, question, answer }) => {

    const router = useRouter()

    const nextQuestion = () => {
        let s = sessionStorage.getItem("answers")
        if (s == null) {
            let d = {}
            d[question] = answer
            sessionStorage.setItem("answers", JSON.stringify(d))
        }
        else {
            let d = JSON.parse(s)
            d[question] = answer
            sessionStorage.setItem("answers", JSON.stringify(d))
        }
        router.push('/quiz/' + next)
    }

    return (
        <div className='w-screen bg-white flex flex-row justify-center items-center fixed bottom-0 left-0 z-20'>
            <p className='bg-[#333333] text-[#dedccf] py-3 px-40 font-semibold rounded-[30px] cursor-pointer my-5' onClick={nextQuestion}>
                NEXT
            </p>
        </div>
    )
}

export default Footer