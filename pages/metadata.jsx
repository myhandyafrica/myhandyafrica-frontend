import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Header from '../components/Header';

export default function Metadata({ children }) {
    const router = useRouter()

    return (
        <div className="max-w-[1580px] mx-auto font-poppins">
            <Header auth={true} />
            <div className="px-3 md:px-12 py-4 bg-primary-900 text-secondary">
                <p className="text-sm">
                    Welcome <br />
                    Kindly submit all document <br className='md:hidden' />correctly so you can be verified
                </p>
            </div>
            <div className="h-10"></div>

            <div className="px-3 md:px-12">
                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Biodata information</h1>
                    <div className="mb-8">
                        <input type="text" name="" id="" placeholder='Full name' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                    </div>
                    <div className="flex items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" placeholder='Phone number' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <input type="text" name="" id="" placeholder='Email' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Residential information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" placeholder='Full Address' className='md:flex-1 rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <div className="flex-[2] flex items-center gap-4 md:gap-10">
                            <input type="text" name="" id="" placeholder='State' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                            <input type="text" name="" id="" placeholder='Local Government Area' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Contact information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" placeholder='Contact email address' className='md:flex-1 rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <div className="flex-[2] flex items-center gap-4 md:gap-10">
                            <input type="text" name="" id="" placeholder='Phone number' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                            <input type="text" name="" id="" placeholder='Alternative phone number' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Identity information</h1>
                    <div className="flex items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" placeholder='Identity type' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <input type="text" name="" id="" placeholder='Identity  Number' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Skill information</h1>
                    <div className="mb-4 md:mb-8 flex flex-col md:flex-row items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" placeholder='What skills do you have to offer ?' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <input type="text" name="" id="" placeholder='Years of experience' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                    </div>
                    <div className="flex items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" placeholder='Certifications' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full md:w-2/3 flex items-center text-sm' />
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Uploaded document</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" placeholder='What skills do you have to offer ?' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <input type="text" name="" id="" placeholder='Years of experience' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <input type="text" name="" id="" placeholder='Certifications' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                    </div>
                </div>

                <button className="mt-20 mb-10 rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full md:w-[200px] flex items-center justify-center text-lg font-bold">Save</button>

            </div>
        </div>
    )
}