import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Footer from "../components/Footer";

export default function Verify() {
    const router = useRouter()
    const [email, setEmail] = useState('')

    useEffect(() => {
        document.querySelector('.focus').focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email);
        router.push('/login')
    }

    return (<>
        <div className='py-[25px] px-[56px]'>
            <Link href="/" className="flex lg:justify-start">
                <Image src="/images/logo 1.png" alt="" width={120} height={55} className="w-[45px] md:w-[120px] h-[fit-content]" />
            </Link>
            <form className="my-[58px] flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <Image src="/images/padlock-icon.png" alt="" width={70} height={80} />
                <h3 className="font-[600] text-[18px] lg:text-[28px] leading-[60px] my-[10px]">Forgot Password</h3>
                <p className="text-[14px] leading-[21px] md:text-[20px] lg:px-[25%] text-center">Please enter the email associated with your Myhandy account. We will send a link to this email address to reset your password.</p>

                <div className="mt-5">
                    <input required
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email" className='focus bg-none outline-none border border-primary-900 py-3 px-5 rounded-lg w-[300px] lg:w-[450px]' />
                </div>

                <button className='mt-6 rounded-[10px] lg:rounded-[20px] bg-primary-900 text-white w-[150px] h-[50px] grid place-items-center font-[500] text-[12px] lg:text-[24px]'>Reset password</button>
                <Link href="/login" className='mt-6 rounded-[10px] lg:rounded-[20px] bg-white border border-primary-900 text-primary-900 w-[150px] h-[50px] grid place-items-center font-[500] text-[12px] lg:text-[24px]'>Login</Link>
            </form>
        </div>
        <Footer />
    </>)
}
