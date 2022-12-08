import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from './signup/Layout'

export default function Hire() {
    const [userDetails, setUserDetails] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)

    const handleSumbit = (e) => {
        e.preventDefault();

        console.log(userDetails);
    }

    return (<>
        <Layout>
            <form action="" className='text-primary-900 w-[320px] md:w-[400px] mx-auto lg:w-2/4' onSubmit={handleSumbit}>
                <h1 className="font-[500] text-[40px] leading-[60px]">Hello,</h1>
                <div className="flex flex-col gap-[35px] mt-[36px]">
                    <p className="text-[20px]">Please login to continue</p>

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                        type="email" className="w-[450px] px-[17px] py-[25px] border border-[#3D3D3D] rounded-[10px] text-[20px]" placeholder='Email' />

                    <div className="relative w-[450px]">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                            type={!showPassword ? 'password' : 'text'} className="w-full px-[17px] py-[25px] border border-[#3D3D3D] rounded-[10px] text-[20px] pr-16" placeholder='Password ' />
                        {showPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(false)} />
                        </> :
                            <>
                                <Image src="/images/eye.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(true)} />
                            </>}
                    </div>

                    <button type='submit' className="py-[13px] w-[450px] border border-[#3D3D3D] font-[500] text-center rounded-[10px] text-[36px] text-black">Login</button>
                    <div className="text-[20px]">
                        <Link href="/forgetpassword" className='hover:text-primary-100'>Forgot Password?</Link>  <Link href="/signup" className='font-bold hover:text-primary-100'>REGISTER HERE</Link>
                    </div>
                </div>
            </form>
        </Layout>
    </>)
}