import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-white flex justify-between items-center pt-[35px] pb-[64px] px-[47px]">
            <div className="flex flex-col gap-5">
                <Image src="/images/logo 2.png" alt="" width={120} height={55} />
                <div className="flex flex-col md:flex-row gap-5">
                    <Link href="/terms" className='hover:text-lightBlue'>Terms of Service</Link>
                    <Link href="/policy" className='hover:text-lightBlue'>Cookie Policy</Link>
                    <Link href="/blog" className='hover:text-lightBlue'>FAQ</Link>
                    <Link href="/support" className='hover:text-lightBlue'>Support</Link>
                    <Link href="/signup/work" className='hover:text-lightBlue'>Become a worker</Link>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <Image src="/images/Facebook.svg" alt="" width={48} height={48} className="w-[28px] lg:w-[48px]" />
                <Image src="/images/Instagram.svg" alt="" width={48} height={48} className="w-[28px] lg:w-[48px]" />
                <Image src="/images/Twitter Squared.svg" alt="" width={48} height={48} className="w-[28px] lg:w-[48px]" />
                <Image src="/images/WhatsApp.svg" alt="" width={48} height={48} className="w-[28px] lg:w-[48px]" />
            </div>
        </footer>
    )
}