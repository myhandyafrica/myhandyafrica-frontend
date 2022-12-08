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
            <Link href="/" className="flex justify-center lg:justify-start">
                <Image src="/images/logo 1.png" alt="" width={120} height={55} />
            </Link>
            <form className="my-[58px] flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <Image src="/images/padlock-icon.png" alt="" width={70} height={80} />
                <h3 className="font-[600] text-[28px] leading-[60px] my-[10px]">Forgot Password</h3>
                <p className="text-[20px] px-[25%] text-center">Please enter the email associated with your Myhandy account. We will send a link to this email address to reset your password.</p>

                <div className="mt-5">
                    <input required
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email" className='focus bg-none outline-none border border-primary-900 py-3 px-5 rounded-lg w-[450px]' />
                </div>

                <button className='mt-6 rounded-[20px] bg-primary-900 text-white px-[70px] py-[24px] font-[500] text-[24px]'>Reset password</button>
                <Link href="/login" className='mt-6 rounded-[20px] bg-white border border-primary-900 text-primary-900 px-[70px] py-[10px] font-[500] text-[24px]'>Login</Link>
            </form>
        </div>
        <Footer />
    </>)
}
