import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Footer from "../components/Footer";

export default function Verify() {
    const router = useRouter()
    const [verificationNumber, setVerificationNumber] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' })

    useEffect(() => {
        const Allfocus = document.querySelectorAll('.focus')
        Allfocus.forEach(focus => {
            focus.addEventListener("keyup", (e) => {
                if (e.target.value != "" && e.target.nextElementSibling) {
                    e.target.nextElementSibling.focus()
                }
            })
            return focus.removeEventListener("keyup", () => { })
        });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(verificationNumber);
        router.push('/')
    }


    return (<>
        <div className='py-[25px] px-[56px]'>
            <Link href="/" className="flex justify-center lg:justify-start">
                <Image src="/images/logo 1.png" alt="" width={120} height={55} />
            </Link>
            <form className="my-[58px] flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <Image src="/images/target-icon.png" alt="" width={70} height={80} />
                <h3 className="font-[600] text-[28px] leading-[60px] my-[10px]">Verify number</h3>
                <p className="text-[20px]">Please enter the code sent to <span className='font-bold'>+23489092763</span></p>
                <div className="my-[20px] flex items-center gap-5">
                    <input 
                    onChange={(e) => { setVerificationNumber({ ...verificationNumber, 1: e.target.value }) }}
                    type="text" className="focus py-1 px-3 w-[80px] h-[80px] rounded-[10px] text-center text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input 
                    onChange={(e) => { setVerificationNumber({ ...verificationNumber, 2: e.target.value }) }}
                    type="text" className="focus py-1 px-3 w-[80px] h-[80px] rounded-[10px] text-center text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input 
                    onChange={(e) => { setVerificationNumber({ ...verificationNumber, 3: e.target.value }) }}
                    type="text" className="focus py-1 px-3 w-[80px] h-[80px] rounded-[10px] text-center text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input 
                    onChange={(e) => { setVerificationNumber({ ...verificationNumber, 4: e.target.value }) }}
                    type="text" className="focus py-1 px-3 w-[80px] h-[80px] rounded-[10px] text-center text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input 
                    onChange={(e) => { setVerificationNumber({ ...verificationNumber, 5: e.target.value }) }}
                    type="text" className="focus py-1 px-3 w-[80px] h-[80px] rounded-[10px] text-center text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input 
                    onChange={(e) => { setVerificationNumber({ ...verificationNumber, 6: e.target.value }) }}
                    type="text" className="focus py-1 px-3 w-[80px] h-[80px] rounded-[10px] text-center text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                </div>
                <p className="text-[20px]">Didn’t you receive the otp? <span className="cursor-pointer font-bold">RESEND OTP</span></p>
                <button type='submit' className='mt-6 rounded-[20px] bg-primary-900 text-white px-[70px] py-[24px] font-[500] text-[24px]'>Verify OTP</button>
            </form>
        </div>
        <Footer />
    </>)
}
