import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Footer from "../../components/Footer";
import Header from '../../components/Header';

export default function Layout({ children }) {
    const router = useRouter()

    return (<>
        <div className="flex flex-col lg:flex-row font-poppins h-screen">
            <div className="flex-1 px-4 md:px-10 h-screen overflow-y-auto">
                {/* <Link href="/" className="flex lg:justify-start">
                    <Image src="/images/logo 1.png" alt="" width={120} height={55} className="w-[45px] md:w-[120px] h-[fit-content]" />
                </Link> */}
                <Header auth={true} />
                <div className="h-8"></div>
                {children}
                <div className="h-10"></div>
            </div>
            <div className="flex-1 h-screen bg-black hidden lg:grid place-items-center">
                {router.asPath === '/login' ?
                    <Image src="/images/Login.svg" alt="" width={368} height={451} />
                    :
                    <Image src="/images/Sign up.svg" alt="" width={368} height={451} />
                }
            </div>
        </div>
        {/* <Footer /> */}
    </>)
}
