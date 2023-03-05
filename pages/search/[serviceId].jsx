import React, { useEffect, useState } from 'react'
import { getProvidersByService } from '../../redux/request'
import Image from 'next/image';

export default function ServiceProviders({ providers }) {
    console.log(providers);
    const [index, setIndex] = useState(0)
    const [provider, setProvider] = useState(providers[0])

    useEffect(() => {
        setProvider(providers[index])
    }, [index, providers])

    useEffect(() => {
        // console.log(provider);
    }, [provider])
    

    return (
        <div className='font-poppins'>
            <div className="grid place-items-center min-h-[200px]">MAP</div>
            <div className="grid place-items-center bg-primary-900 text-secondary px-5 py-[60px]">
                <div className="max-w-[60rem] mx-auto w-full relative">
                    <Image src="/images/arrow-backward.png" alt='' width={50} height={50} className="absolute top-5 left-0 cursor-pointer"
                        onClick={() => {
                            console.log('providers.length',providers.length);
                            console.log('index',index);
                            if ((providers.length-1) - index !== 0) {
                                setIndex(index - 1)
                            } else {
                                setIndex(providers.length-1)
                            }
                        }} />
                    <Image src="/images/arrow-forward.png" alt='' width={50} height={50} className="absolute top-5 right-0 cursor-pointer"
                        onClick={() => {
                            if (providers.length > index) {
                                setIndex(index + 1)
                            }else{
                                setIndex(0)
                            }
                        }} />


                    <div className='flex flex-col justify-center items-center'>
                        <Image src="/images/search-header-img.svg" alt='' width={60} height={60} className="rounded-full mb-2" />
                        <p className="font-normal font-poppins">Adenuga musa</p>
                        <p className="font-normal font-poppins">{provider?.email}</p>
                        <div className="mt-5 py-3 px-6 flex items-center gap-4 border rounded-[10px]">
                            <Image src="/images/check-circle.png" alt='' width={24} height={24} className="" />
                            <div className="">Call me</div>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <div className="py-3 px-4 flex items-center gap-2 border rounded-[10px]">
                                <Image src="/images/Star.png" alt='' width={14} height={14} className="" />
                                <Image src="/images/Star.png" alt='' width={14} height={14} className="" />
                                <Image src="/images/Star.png" alt='' width={14} height={14} className="" />
                            </div>
                            <div className="">Rating</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const { serviceId } = context.params;
    const providersRes = await getProvidersByService(serviceId)
    if (providersRes?.status === 200 && providersRes?.data?.success === true) {
        return {
            props: {
                providers: providersRes?.data?.data
            }
        }
    } else {
        return {
            notFound: true
        }
    }
}

// export async function getStaticProps({ params }) {
//     const providersRes = await getProvidersByService(params.serviceId)
//     return {
//         props: {
//             providers: providersRes?.data?.data
//         },
//         revalidate: 1
//     }
// }

// export async function getStaticPaths() {
//     const allServices = await getAllSercvices()
//     return {
//         paths:
//             allServices?.data?.data?.map((sercvice) => ({
//                 params: {
//                     serviceId: sercvice?._id,
//                 },
//             })) || [],
//         fallback: true,
//     }
// }
