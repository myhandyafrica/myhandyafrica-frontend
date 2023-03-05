/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useClickOutside } from 'react-click-outside-hook'

export default function Header() {
    const [showRegModal, setShowRegModal] = useState(false)
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [parentRef, isClickedOutside] = useClickOutside();

    useEffect(() => {
      if(isClickedOutside){
        setShowSearchModal(false)
      }
    }, [isClickedOutside])
    

    return (<div ref={parentRef} className="sticky top-0 bg-white">
        {showMobileMenu &&
            <div className=''>
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

        <header className="">
            <nav className="flex justify-between items-center py-5 md:pr-20 px-[24px] md:px-[49px]">
                <Image src="/images/logo 1.png" alt="" width={120} height={55} className="w-[45px] md:w-[120px] h-[fit-content]" />

                <div className="flex gap-5 lg:gap-10 items-center">
                    <Image src="/images/Search.svg" alt="" width={24} height={24} className="-mb-1" onClick={() => setShowSearchModal(!showSearchModal)} />

                    <Image src="/images/Menu.svg" alt="" width={24} height={24} className="lg:hidden" onClick={() => { setShowMobileMenu(true); setShowSearchModal(false) }} />

                    <div className="hidden lg:flex gap-10 items-center">
                        {/* <div className='cursor-pointer text-2xl font-[400]' onClick={() => setShowRegModal(!showRegModal)}>Register</div> */}
                        <Link href="/signup" className='text-2xl font-[400]'>Register</Link>
                        <Link href="/login" className='text-2xl font-[400]'>Login</Link>
                    </div>
                </div>
            </nav>

            {showSearchModal && <div className={`${showSearchModal ? 'block' : 'hidden'} transition-all origin-top animate-open-menu px-6 py-4 relative bg-primary-900 text-white shadow-2xl`}>
                <div className="flex justify-between">
                    <div className="max-w-[80rem] mx-auto flex items-center justify-center gap-16">
                        <div className="">
                            <h1 className="text-3xl font-bold font-poppins text-center md:text-start">Access to providers <br /> around you.</h1>
                            <p className="mt-2 mb-4 text-center md:text-start">Access to skilled, fast, trusted workers</p>

                            <form className="flex items-center flex-col md:flex-row gap-4 md:gap-1">
                                <div className="w-[260px] sm:w-full bg-secondary text-primary-900 p-4 h-[60px] rounded-r-lg md:rounded-r-none rounded-l-lg">
                                    <input type="text" className='w-full bg-transparent outline-none' placeholder='What Providers are you looking for ?' />
                                </div>
                                <div className="w-[260px] sm:w-full bg-secondary text-primary-900 p-4 h-[60px] rounded-l-lg md:rounded-l-none rounded-r-lg flex items-center justify-between gap-4">
                                    <input type="text" className='bg-transparent outline-none' placeholder='Your location' />
                                    <button className="w-[34px] h-fit">
                                        <img src="/images/search-circle-pry.svg" alt='' width={24} height={24} className="w-[34px] md:w-[64px] h-fit" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <Image src="/images/search-header-img.svg" alt='' width={261} height={466} className="h-fit hidden md:block" onClick={() => setShowRegModal(!showRegModal)} />
                    </div>
                </div>
            </div>}

            {showRegModal && <div className="hidden px-[129px] py-20 relative text-[24px]">
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
    </div>)
}