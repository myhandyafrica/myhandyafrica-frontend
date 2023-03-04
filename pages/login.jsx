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
            <form action="" className='text-primary-900 w-[255px] md:w-[400px] mx-auto lg:w-2/4' onSubmit={handleSumbit}>
                <h1 className="font-[500] text-[21px] lg:text-[40px] leading-[31.5px] lg:leading-[60px] text-black">Hello,</h1>
                <div className="flex flex-col gap-[35px] mt-[24px]">
                    <p className="text-[10px] md:text-[15px] lg:text-[20px] text-black">Please login to continue</p>

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                        type="email" className="bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl" placeholder='Email' />

                    <div className="relative w-[280px] mx-auto md:mx-0 md:w-[300px]">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                            type={!showPassword ? 'password' : 'text'} className="bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl pr-16" placeholder='Password ' />
                        {showPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(false)} />
                        </> :
                            <>
                                <Image src="/images/eye.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(true)} />
                            </>}
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-6">
                        <button
                            type="submit"
                            className="max-w-full bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl"
                        >
                            Login
                        </button>
                        <div className="text-[10px] md:text-[15px] lg:text-[20px] text-black">
                            Have an account?{' '}
                            <Link href="/signup" className="font-bold hover:text-primary-100">
                                REGISTER HERE
                            </Link>
                        </div>
                    </div>

                    <button type='submit' className="py-[10px] lg:py-[13px] w-full border border-[#3D3D3D] font-[500] text-center rounded-[10px] text-[18px] lg:text-[36px] text-black">Login</button>
                    <div className="text-[10px] md:text-[15px] lg:text-[20px] text-black">
                        <Link href="/forgetpassword" className='hover:text-primary-100'>Forgot Password?</Link>  <Link href="/signup" className='font-bold hover:text-primary-100'>REGISTER HERE</Link>
                    </div>
                </div>
            </form>
        </Layout>
    </>)
}