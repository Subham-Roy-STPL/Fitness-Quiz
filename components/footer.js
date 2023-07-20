import React from 'react'
import { useRouter } from 'next/router'
import {toast} from "react-toastify"

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
        if (answer != "") {
            router.push('/quiz/' + next)
        }
        else
        {
            toast.error("Please select an answer")
        }
    }

    return (
        <div className='w-screen flex flex-row justify-center items-center fixed bottom-0 left-0 z-20'>
             <p className='text-[#333333] bg-[#dedccf] py-3 min-[500px]:px-20 px-10 font-semibold rounded-[30px] cursor-pointer my-5 mx-5' onClick={()=>{router.back()}}>
                PREVIOUS
            </p>
            <p className='bg-[#333333] text-[#dedccf] py-3 min-[500px]:px-20 px-10 font-semibold rounded-[30px] cursor-pointer my-5 mx-5' onClick={nextQuestion}>
                NEXT
            </p>
        </div>
    )
}

export default Footer