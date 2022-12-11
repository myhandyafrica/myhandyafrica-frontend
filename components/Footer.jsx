import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-white flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 pt-[35px] pb-[20px] px-[24px] md:px-[47px]">
            <div className="flex flex-col gap-5">
                <Image src="/images/logo 2.png" alt="" width={120} height={55} className="hidden md:block w-[48px] h-[22px] lg:w-[120px] lg:h-[55px]" />
                <div className="flex flex-col md:flex-row text-center md:text-start gap-2 md:gap-5 text-[11px] md:text-[14px]">
                    <Link href="/terms" className='hover:text-lightBlue'>Terms of Service</Link>
                    <Link href="/policy" className='hover:text-lightBlue'>Cookie Policy</Link>
                    <Link href="/blog" className='hover:text-lightBlue'>FAQ</Link>
                    <Link href="/support" className='hover:text-lightBlue'>Support</Link>
                    <Link href="/signup/work" className='hover:text-lightBlue'>Become a worker</Link>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/images/Facebook.svg" alt="" width={48} height={48} className="w-[17px] lg:w-[48px]" />
                <Image src="/images/Instagram.svg" alt="" width={48} height={48} className="w-[17px] lg:w-[48px]" />
                <Image src="/images/Twitter Squared.svg" alt="" width={48} height={48} className="w-[17px] lg:w-[48px]" />
                <Image src="/images/WhatsApp.svg" alt="" width={48} height={48} className="w-[17px] lg:w-[48px]" />
            </div>
        </footer>
    )
}