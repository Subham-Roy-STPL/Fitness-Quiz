import React from 'react'

const Option = ({ text, ans, setAns }) => {
    return (
        <p onClick={() => {
            setAns(text)
        }} className={`border border-black text-black w-[460px] text-center py-2 m-5 rounded cursor-pointer ${ans == text ? "bg-white" : "hover:bg-white"} duration-500 text-2xl font-extralight`}>{text}</p>
    )
}

export default Option