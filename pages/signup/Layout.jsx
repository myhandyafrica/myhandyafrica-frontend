import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Footer from "../../components/Footer";

export default function Layout({ children }) {
    return (<>
    
    <div className='py-[25px] px-[56px]'>
        <Link href="/" className="flex justify-center lg:justify-start">
            <Image src="/images/logo 1.png" alt="" width={120} height={55} />
        </Link>
        <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1">
                {children}
            </div>
            <div className="flex-1 hidden lg:block">
                <Image src="/images/illustration.png" alt="" width={600} height={886} />
            </div>
        </div>
        </div>
        <Footer />
        </>)
}
