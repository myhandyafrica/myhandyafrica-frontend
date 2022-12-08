import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [showRegModal, setShowRegModal] = useState(false)

    return (
        <header className="px-[24px] md:px-[49px]">
            <nav className="flex justify-between items-center pt-5 md:pr-20">
                <Image src="/images/logo 1.png" alt="" width={120} height={55} />

                <div className="flex gap-5 lg:gap-10 items-center">
                    <Image src="/images/Search.svg" alt="" width={34} height={34} />
                    <Image src="/images/Menu.svg" alt="" width={34} height={34} className="lg:hidden" />

                    <div className="hidden lg:flex gap-10 items-center">
                        <div className='cursor-pointer text-2xl font-[400]' onClick={() => setShowRegModal(!showRegModal)}>Register</div>
                        <Link href="/login" className='text-2xl font-[400]'>Login</Link>
                    </div>
                </div>
            </nav>


            {showRegModal && <div className="px-[129px] py-20 relative text-[24px]">
                <Image src="/images/Close.png" alt='' width={38} height={38} className="absolute top-5 right-10 cursor-pointer" onClick={() => setShowRegModal(!showRegModal)} />
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