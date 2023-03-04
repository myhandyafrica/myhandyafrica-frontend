import Link from 'next/link'
import React from 'react'

export default function Button({ text, bgColor, textColor, url }) {
    return (
        <Link href={url ? url : '#'} className={`w-[180px] h-[50px] md:w-[250px] md:h-[80px] ${bgColor} ${textColor} font-[400] lg:font-[600] text-[15px] md:text-xl text-center rounded-[10px] md:rounded-[20px] grid place-items-center`}>{text}</Link>
    )
}
