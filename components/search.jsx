import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useClickOutside } from 'react-click-outside-hook';
import { getAllSercvices } from '../redux/request';
import Loader from './Loader';

export default function Search() {
    const router = useRouter()    
    const [loading, setloading] = useState(false)
    const [serviceOptionRef, isClickedOutside] = useClickOutside();
    const [serviceOptions, setServiceOptions] = useState([])
    const [showServiceOptions, setShowServiceOptions] = useState(false)
    const [serviceSearchTerm, setServiceSearchTerm] = useState('')
    const [selectedServiceId, setSelectedServiceId] = useState('')
    const [location, setLocation] = useState('')

    useEffect(() => {
        if (isClickedOutside) {
            setShowServiceOptions(false)
        }
    }, [isClickedOutside])

    useEffect(() => {
        const fetch = async () => {
            setloading(true)
            const allServices = await getAllSercvices()
            if (allServices.status === 200) {
                setServiceOptions(allServices.data.data)
                // console.log(allServices.data.data);
                setloading(false)
            }
        }
        fetch()
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        router.push(`/search/${selectedServiceId}?location=${location}`)
        setloading(false)
    }

    return (
        <div className={`transition-all origin-top animate-open-menu px-6 py-4 relative bg-primary-900 text-white shadow-2xl`}>
            {loading && <Loader />}
            <div className="flex justify-between">
                <div className="max-w-[80rem] mx-auto flex items-center justify-center gap-16">
                    <div className="">
                        <h1 className="text-3xl font-bold font-poppins text-center md:text-start">Access to providers <br /> around you.</h1>
                        <p className="mt-2 mb-4 text-center md:text-start">Access to skilled, fast, trusted workers</p>

                        <form onSubmit={handleSubmit} className="flex items-center flex-col md:flex-row gap-4 md:gap-1">
                            <div className="w-[260px] sm:w-full bg-secondary text-primary-900 p-4 h-[60px] rounded-r-lg md:rounded-r-none rounded-l-lg relative">
                                <input type="text" className='w-full bg-transparent outline-none' placeholder='What Providers are you looking for ?'
                                    value={serviceSearchTerm}
                                    onChange={(e) => setServiceSearchTerm(e.target.value)}
                                    onFocus={() => setShowServiceOptions(true)} />

                                {showServiceOptions && <div ref={serviceOptionRef} className="absolute top-[4rem] left-0 w-full min-h-[100px] bg-secondary text-primary-900 rounded-[10px] shadow-2xl flex flex-col gap-0 py-4 max-h-52 overflow-y-auto">
                                    {serviceOptions.map(option => {
                                        return (
                                            <div
                                                key={option._id}
                                                className="py-2 px-8 border hover:bg-primary-100"
                                                onClick={() => {
                                                    setServiceSearchTerm(option.name);
                                                    setSelectedServiceId(option._id);
                                                    setShowServiceOptions(false);
                                                }}
                                            >{option.name}</div>
                                        )
                                    })}
                                </div>}
                            </div>
                            <div className="w-[260px] sm:w-full bg-secondary text-primary-900 p-4 h-[60px] rounded-l-lg md:rounded-l-none rounded-r-lg flex items-center justify-between gap-4">
                                <input type="text" className='bg-transparent outline-none' placeholder='Your location' value={location} onChange={(e) => setLocation(e.target.value)} />
                                <button className="w-[34px] h-fit">
                                    <Image src="/images/search-circle-pry.svg" alt='' width={24} height={24} className="w-[34px] md:w-[64px] h-fit" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <Image src="/images/search-header-img.svg" alt='' width={261} height={466} className="h-fit hidden md:block" />
                </div>
            </div>
        </div>
    )
}
