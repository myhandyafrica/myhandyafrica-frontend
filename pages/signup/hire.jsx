import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from './Layout'

export default function Hire() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState({ fname: '', email: '', stateOfResidence: '', phone: '', password: '', cpassword: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userDetails.password != userDetails.cpassword) {
            alert("Password did not match!");
            setShowPassword(true);
            setShowCPassword(true);
            return;
        }

        console.log(userDetails);
        router.push('/verify')
    }

    return (<>
        <Layout>
            <form action="" className='text-primary-900 w-[255px] md:w-[450px] mx-auto lg:w-2/4' onSubmit={handleSubmit}>
                <h1 className="font-[500] text-[21px] lg:text-[40px] leading-[31.5px] lg:leading-[60px] text-black">Hello,</h1>
                <div className="flex flex-col gap-[35px] mt-[24px]">
                    <p className="text-[10px] md:text-[15px] lg:text-[20px] text-black">Please register to continue to <span className='font-bold hover:text-primary-100'>hire</span> or click here to <Link href="/signup/work" className='font-bold hover:text-primary-100'>REGISTER TO WORK</Link></p>

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, fname: e.target.value }) }}
                        type="text" className="w-full px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px]" placeholder='Full name' />

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                        type="email" className="w-full px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px]" placeholder='Email' />

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, stateOfResidence: e.target.value }) }}
                        type="text" className="w-full px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px]" placeholder='State of residence' />

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, phone: e.target.value }) }}
                        type="phone" className="w-full px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px]" placeholder='Phone number ' />

                    <div className="relative w-full">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                            type={!showPassword ? 'password' : 'text'} className="px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px] w-full pr-16" placeholder='Password ' />
                        {showPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(false)} />
                        </> :
                        <>
                        <Image src="/images/eye.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(true)} />                        
                        </>}
                    </div>

                    <div className="relative w-full">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, cpassword: e.target.value }) }}
                            type={!showCPassword ? 'password' : 'text'} className="px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px] w-full pr-16" placeholder='Confirm password ' />
                        {showCPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowCPassword(false)} />
                        </> :
                        <>
                        <Image src="/images/eye.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowCPassword(true)} />                        
                        </>}
                    </div>

                    <button type='submit' className="w-full py-[10px] lg:py-[13px] border border-[#3D3D3D] font-[500] text-center rounded-[10px] text-[18px] lg:text-[36px] text-black">Register</button>
                    <div className="text-[10px] md:text-[15px] lg:text-[20px] text-black">
                        Have an account?  <Link href="/login" className='font-bold hover:text-primary-100'>LOGIN</Link>
                    </div>
                </div>
            </form>
        </Layout>
    </>)
}
