import React from 'react'
import Image from 'next/image'

import logo from "../assets/logo.png"
import { useRouter } from 'next/router'

const Header = ({ fill }) => {

    const router = useRouter()

    return (
        <div className='w-screen'>
            <div className='w-full flex flex-row justify-between items-center px-10 py-2'>
                <div className='w-[20px]'>
                </div>
                <Image src={logo} height={50} width={50} alt='logo' />
                <i className="fa-solid fa-xmark text-white text-2xl cursor-pointer" onClick={() => { router.push("/") }}></i>
            </div>
            {/* <div className='w-full flex flex-row h-[15px]'>
                <div className={`bg-[#a9e5e5] width-${fill} h-[15px]`}>
                </div>
                <div className={`bg-[#dad2c6] width-${100-fill} h-[15px]`}>
                </div>
            </div> */}
        </div>
    )
}

export default Header