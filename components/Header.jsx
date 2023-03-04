import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [showRegModal, setShowRegModal] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (<>
        {showMobileMenu && <div className="">
            <div className="fixed top-0 left-0 w-full h-screen bg-black/50"></div>
            <div className="fixed top-0 right-0 w-[266px] h-screen bg-primary-900 text-white pl-[15px]">
                <div className="flex justify-end my-[22px] mr-[25px]">
                    <Image src="/images/Close.svg" alt="" width={24} height={24} onClick={() => setShowMobileMenu(false)} />
                </div>
                <div className="flex flex-col gap-[15px]">
                    <Link href="#Become_a_provider" className="text-[13px] font-[400]">Become a provider</Link>
                    <Link href="#Hire_a_worker" className="text-[13px] font-[400]">Hire a worker</Link>
                    <Link href="#Contact_us" className="text-[13px] font-[400]">Contact us</Link>
                </div>
                <div className="flex flex-col gap-[25px] mt-[40px]">
                    <Link href="/login" className="w-[191px] h-[50px] grid place-items-center border border-white bg-white text-primary-900 rounded-[10px]">Login</Link>
                    <Link href="/signup" className="w-[191px] h-[50px] grid place-items-center border border-white bg-primary-900 text-white rounded-[10px]">Register</Link>
                </div>
                <Link href="/signup/work" className="flex items-center gap-3 mt-[22px]">Sign up to work
                    <Image src="/images/Arrow right alt white.png" alt='' width={20} height={20} className="mt-1" />
                </Link>
            </div>
        </div>}
        <header className="px-[24px] md:px-[49px]">
            <nav className="flex justify-between items-center py-5 md:pr-20">
                <Image src="/images/logo 1.png" alt="" width={120} height={55} className="w-[45px] md:w-[120px] h-[fit-content]" />

                <div className="flex gap-5 lg:gap-10 items-center">
                    <Image src="/images/Search.svg" alt="" width={24} height={24} className="-mb-1" />

                    <Image src="/images/Menu.svg" alt="" width={24} height={24} className="lg:hidden" onClick={() => setShowMobileMenu(true) } />

                    <div className="hidden lg:flex gap-10 items-center">
                        {/* <div className='cursor-pointer text-2xl font-[400]' onClick={() => setShowRegModal(!showRegModal)}>Register</div> */}
                        <Link href="/signup" className='text-2xl font-[400]'>Register</Link>
                        <Link href="/login" className='text-2xl font-[400]'>Login</Link>
                    </div>
                </div>
            </nav>


            {showRegModal && <div className="px-[129px] py-20 relative text-[24px]">
                <Image src="/images/Close.png" alt='' width={20} height={20} className="absolute top-5 right-10 cursor-pointer" onClick={() => setShowRegModal(!showRegModal)} />
                <div className="flex justify-between">
                    <Link href="/signup/hire" className="flex items-center gap-3">Sign up to hire
                        <Image src="/images/Arrow right alt.png" alt='' width={20} height={20} className="mt-1" />
                    </Link>

                    <Link href="/signup/work" className="flex items-center gap-3">Sign up to work
                        <Image src="/images/Arrow right alt.png" alt='' width={20} height={20} className="mt-1" />
                    </Link>
                </div>
            </div>}
        </header>
    </>)
}