import React from 'react'

const Option = ({ text, ans, setAns }) => {
    return (
        <p onClick={() => {
            setAns(text)
        }} className={`border border-white min-[500px]:w-[460px] w-[300px] text-center py-2 m-5 rounded cursor-pointer ${ans == text ? "bg-white text-black" : "hover:bg-white text-white hover:text-black "} duration-500 min-[500px]:text-2xl text-lg font-extralight`}>{text}</p>
    )
}

export default Option