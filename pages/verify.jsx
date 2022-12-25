import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import Footer from "../components/Footer";
import { getStorageItem,removeStorageItem } from '../redux/request';

export default function Verify() {
    const router = useRouter()
    const [mobileNumber, setmobileNumber] = useState('')
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
        let mobile = getStorageItem('_MYHANDY_NUMBER')
        mobile = mobile.substring(1)
        mobile  = `+234${mobile}`
        setmobileNumber(mobile)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        resendOTP()
        console.log(verificationNumber);
        router.push('/')
    }

    const resendOTP = (event) => {
        removeStorageItem('_MYHANDY_NUMBER')
    }

    return (<>
        <div className='py-[25px] px-[56px]'>
            <Link href="/" className="flex lg:justify-start">
                <Image src="/images/logo 1.png" alt="" width={120} height={55} className="w-[45px] md:w-[120px] h-[fit-content]" />
            </Link>
            <form className="my-[58px] flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <Image src="/images/target-icon.png" alt="" width={70} height={80} />
                <h3 className="font-[600] text-[18px] lg:text-[28px] leading-[60px] my-[10px]">Verify number</h3>
                <p className="text-[16px] lg:text-[20px]">Please enter the code sent to <span className='font-bold'>{mobileNumber}</span></p>
                <div className="my-[20px] flex items-center gap-5">
                    <input
                        onChange={(e) => { setVerificationNumber({ ...verificationNumber, 1: e.target.value }) }}
                        type="text" className="focus py-1 px-3 w-[35px] h-[35px] lg:w-[80px] lg:h-[80px] rounded-[10px] text-center text-xs lg:text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input
                        onChange={(e) => { setVerificationNumber({ ...verificationNumber, 2: e.target.value }) }}
                        type="text" className="focus py-1 px-3 w-[35px] h-[35px] lg:w-[80px] lg:h-[80px] rounded-[10px] text-center text-xs lg:text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input
                        onChange={(e) => { setVerificationNumber({ ...verificationNumber, 3: e.target.value }) }}
                        type="text" className="focus py-1 px-3 w-[35px] h-[35px] lg:w-[80px] lg:h-[80px] rounded-[10px] text-center text-xs lg:text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input
                        onChange={(e) => { setVerificationNumber({ ...verificationNumber, 4: e.target.value }) }}
                        type="text" className="focus py-1 px-3 w-[35px] h-[35px] lg:w-[80px] lg:h-[80px] rounded-[10px] text-center text-xs lg:text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input
                        onChange={(e) => { setVerificationNumber({ ...verificationNumber, 5: e.target.value }) }}
                        type="text" className="focus py-1 px-3 w-[35px] h-[35px] lg:w-[80px] lg:h-[80px] rounded-[10px] text-center text-xs lg:text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                    <input
                        onChange={(e) => { setVerificationNumber({ ...verificationNumber, 6: e.target.value }) }}
                        type="text" className="focus py-1 px-3 w-[35px] h-[35px] lg:w-[80px] lg:h-[80px] rounded-[10px] text-center text-xs lg:text-2xl font-bold bg-primary-900 text-lightBlue" maxLength={1} />
                </div>
                <p className="text-[16px] lg:text-[20px]">Didn’t you receive the otp? <span className="cursor-pointer font-bold">RESEND OTP</span></p>
                <button type='submit'><Button text={'Verify OTP'} bgColor={'bg-primary-900'} textColor={'text-white'} /></button>
            </form>
        </div>
        <Footer />
    </>)
}
