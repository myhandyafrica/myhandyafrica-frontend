import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

export default function SignUp() {
    return (
        <Layout>
            <div className="">
                <h1 className="font-medium text-[30px] leading-[48px]">Welcome</h1>
                <p className="mt-3 text-[18px]">Kindly select what option you belong to</p>
            </div>

            <div className="flex flex-col gap-8 mt-10">
                <Link href="/signup/work" className='bg-[#131725] text-white px-[28px] py-[15px] w-[300px] rounded-2xl'>
                    <div className="">
                        <h3 className='text-[18px] font-bold'>I’m a provider</h3>
                        <p className="text-[14px] font-thin">I’m an provider looking for a  job</p>
                    </div>
                </Link>
                <Link href="/signup/hire" className='bg-[#131725] text-white px-[28px] py-[15px] w-[300px] rounded-2xl'>
                    <div className="">
                        <h3 className='text-[18px] font-bold'>I’m a Customer</h3>
                        <p className="text-[14px] font-thin">I’m a Customer looking for a provider</p>
                    </div>
                </Link>
            </div>
            <p className="mt-10 text-[18px]">Already have an account? <Link href='/login' className='font-bold'>Sign in</Link></p>
        </Layout>
    )
}
