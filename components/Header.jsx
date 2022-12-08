import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [showRegModal, setShowRegModal] = useState(false)

    return (
        <header className="px-[24px] md:px-[49px]">
            <nav className="flex justify-between items-center pt-5 pr-20">
                <Image src="/images/logo 1.png" alt="" width={120} height={55} />
                
                <div className="hidden md:flex gap-10 items-center">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                        <path d="M25 22H23.42L22.86 21.46C24.82 19.18 26 16.22 26 13C26 5.82 20.18 0 13 0C5.82 0 0 5.82 0 13C0 20.18 5.82 26 13 26C16.22 26 19.18 24.82 21.46 22.86L22 23.42V25L32 34.98L34.98 32L25 22V22ZM13 22C8.02 22 4 17.98 4 13C4 8.02 8.02 4 13 4C17.98 4 22 8.02 22 13C22 17.98 17.98 22 13 22Z" fill="#131725" />
                    </svg>
                    <div className='cursor-pointer text-2xl font-[400]' onClick={() => setShowRegModal(!showRegModal)}>Register</div>
                    <Link href="/login" className='text-2xl font-[400]'>Login</Link>
                </div>
            </nav>


            {showRegModal && <div className="px-[129px] py-20 relative text-[24px]">
                <Image src="/images/Close.png" alt='' width={38} height={38} className="absolute top-5 right-10 cursor-pointer" onClick={() => setShowRegModal(!showRegModal)}  />
                <div className="flex justify-between">
                    <Link href="/signup/hire" className="flex items-center gap-3">Sign up to hire
                        <Image src="/images/Arrow right alt.png" alt='' width={38} height={38} className="mt-1" />
                    </Link>

                    <Link href="/signup/work" className="flex items-center gap-3">Sign up to work
                        <Image src="/images/Arrow right alt.png" alt='' width={38} height={38} className="mt-1" />
                    </Link>
                </div>
            </div>}
        </header>
    )
}