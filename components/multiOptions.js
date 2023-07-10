import React from 'react'

const MultiOption = ({ text, selected, onClick }) => {
    return (
        <p onClick={() => {
            onClick(text)
        }} className={`border border-black text-black w-[500px] text-center py-2 m-5 rounded cursor-pointer ${selected ? "bg-white" : "hover:bg-white"} duration-500 text-2xl font-extralight`}>{text}</p>
    )
}

export default MultiOption