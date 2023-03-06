import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Layout from './signup/Layout'
import Loader from '../components/Loader'
import { loginWorker } from '../redux/request'
import { useRouter } from 'next/router'

export default function Hire() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setloading] = useState(false)

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            if (userDetails.email === '' || userDetails.password === '') {
                return toast.warn('Login details are invalid', {
                    customId: 'customId',
                });
            }
            else {
                setloading(true)
                const response = await loginWorker(userDetails)
                console.log(response);
                const { success, message } = response.data
                if (success === true) {
                    toast.success(message, {
                        customId: 'customId',
                    });
                    setloading(false)
                    router.push('/')
                }
                else {
                    toast.warn(message, {
                        customId: 'customId',
                    });
                    setloading(false)
                }
            }
        } catch (error) {
            toast.error(error.message, {
                customId: 'customId',
            });
            setloading(false)
        }
    }

    return (<>
        {loading && <Loader />}
        <Layout>
            <form action="" className='text-primary-900' onSubmit={handleSumbit}>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                    <h1 className="font-medium text-[22px] lg:text-[30px] lg:leading-[48px]">Hey</h1>
                    <p className="text-[14px]">
                        Please login to continue
                    </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-10">

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                        type="email" className="bg-[#131725] text-white font-normal text-[12px] px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]" placeholder='Email' />

                    <div className="relative w-[280px] mx-auto md:mx-0 md:w-[300px]">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                            type={!showPassword ? 'password' : 'text'} 
                            className="bg-[#131725] text-white font-normal text-[12px] px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]" placeholder='Password ' />
                        {showPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={20} height={20} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(false)} />
                        </> :
                            <>
                                <Image src="/images/eye.png" alt="" width={20} height={20} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(true)} />
                            </>}
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-6">
                        <button
                            type="submit"
                            className="max-w-full border border-primary-900 text-primary-900 px-[28px] text-[12px] font-bold py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]"
                        >
                            Login
                        </button>
                        <div className="text-[10px] md:text-[15px] lg:text-[20px] text-black">
                            <div>Have an account?{' '}
                                <Link href="/signup" className='font-bold hover:text-primary-100'>REGISTER HERE</Link></div>
                            <Link href="/forgetpassword" className='hover:text-primary-100'>Forgot Password?</Link>
                        </div>
                    </div>

                    {/* <button type='submit' className="py-[10px] lg:py-[13px] w-full border border-[#3D3D3D] font-[500] text-center rounded-[10px] text-[18px] lg:text-[36px] text-black">Login</button>
                    <div className="text-[10px] md:text-[15px] lg:text-[20px] text-black">
                        <Link href="/forgetpassword" className='hover:text-primary-100'>Forgot Password?</Link>  <Link href="/signup" className='font-bold hover:text-primary-100'>REGISTER HERE</Link>
                    </div> */}
                </div>
            </form>
        </Layout>
    </>)
}