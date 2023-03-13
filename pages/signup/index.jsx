import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

export default function SignUp() {
    return (
        <Layout>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                <h1 className="font-medium text-[22px] lg:text-[30px] lg:leading-[48px]">Welcome</h1>
                <p className="text-[14px]">Kindly select what option you belong to</p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-8 mt-7">
                <Link href="/signup/hire" onClick={() => localStorage.setItem('userType', 'provider')} className='bg-[#131725] text-white px-[28px] py-[15px] w-[300px] rounded-2xl'>
                    <div className="">
                        <h3 className='text-[14px] font-bold'>I’m a provider</h3>
                        <p className="text-[10px] font-thin">I’m an provider looking for a  job</p>
                    </div>
                </Link>
                <Link href="/signup/hire" onClick={() => localStorage.setItem('userType', 'customer')} className='bg-[#131725] text-white px-[28px] py-[15px] w-[300px] rounded-2xl'>
                    <div className="">
                        <h3 className='text-[14px] font-bold'>I’m a Customer</h3>
                        <p className="text-[10px] font-thin">I’m a Customer looking for a provider</p>
                    </div>
                </Link>
            </div>
            <p className="mt-4 text-[14px] text-center lg:text-start">Already have an account? <Link href='/login' className='font-bold'>Sign in</Link></p>
        </Layout>
    )
}
