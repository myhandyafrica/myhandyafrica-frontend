import React from 'react'

export default function Button({ text, bgColor, textColor }) {
    return (
        <div className={`w-[180px] h-[50px] md:w-[300px] md:h-[100px] ${bgColor} ${textColor} font-[400] lg:font-[600] text-[15px] md:text-2xl text-center rounded-[10px] md:rounded-[20px] grid place-items-center`}>{text}</div>
    )
}
