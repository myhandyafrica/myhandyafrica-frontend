import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { toast } from 'react-toastify';
import { createAccount, setStorageItem } from '../../redux/request';
import Loader from '../../components/Loader';

const customId = 'userid';
export default function Hire() {
    const [userType, setUserType] = useState('customer')
    const router = useRouter()
    const [userDetails, setUserDetails] = useState({ fname: '', email: '', phone: '', password: '', cpassword: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)
    const [loader, setloader] = useState(false);

    useEffect(() => {
        const userType = localStorage.getItem('userType')
        if (userType) {
            setUserType(userType)
        }
    }, [])

    const checkUserInput = async () => {
        try {
            let valid = true;
            const { fname, email, phone, password, cpassword, } = userDetails;
            if (fname === '' || email === '' || phone === '' || password === '' || cpassword === '') {
                return (valid = false);
            }
            if (phone.length > 11 || phone.length < 11) {
                toast.warn('Phone number should be 11 in length', {
                    customId: customId,
                });
                setShowPassword(true);
                setShowCPassword(true);
                return (valid = false);
            }
            if (password !== cpassword) {
                toast.warn('Password did not match!', {
                    customId: customId,
                });
                setShowPassword(true);
                setShowCPassword(true);
                return (valid = false);
            }
            return valid;
        } catch (error) {
            toast.error(error.message, {
                customId: customId,
            });
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const valid = await checkUserInput();
            if (valid === false) {
                return;
            } else {
                setloader(true);
                const { fname, email, phone, password } = userDetails;
                const userData = {
                    full_name: fname,
                    email: email,
                    mobile: phone,
                    password: password,
                    user_type: userType
                };

                const response = await createAccount(userData);
                // console.log(response);
                const { success, message, data } = response.data;
                if (success === true) {
                    setloader(false);
                    toast.success(message, {
                        customId: customId,
                    });
                    setStorageItem('_MYHANDY_NUMBER', phone)
                    router.push('/verify');
                } else {
                    setloader(false);
                    toast.warn(message, {
                        customId: customId,
                    });
                }

            }
        } catch (error) {
            setloader(false);
            toast.error(error.message, {
                customId: customId,
            });
        }
    };


    return (<>
        {loader && <Loader />}
        <Layout>
            <form action="" className='text-primary-900' onSubmit={handleSubmit}>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                    <h1 className="font-medium text-[22px] lg:text-[30px] lg:leading-[48px]">Hey</h1>
                    <p className="text-[14px]">
                        Kindly provide necessary information
                    </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-7">
                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, fname: e.target.value }) }}
                        type="text" className="bg-[#131725] text-white text-[12px] font-normal px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]" placeholder='Full name' />

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                        type="email" className="bg-[#131725] text-white text-[12px] font-normal px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]" placeholder='Email' />

                    {/* <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, stateOfResidence: e.target.value }) }}
                        type="text" className="bg-[#131725] text-white text-[12px] font-normal px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]" placeholder='State of residence' /> */}

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, phone: e.target.value }) }}
                        maxLength={11}
                        type="phone" className="bg-[#131725] text-white text-[12px] font-normal px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]" placeholder='Phone number ' />

                    <div className="relative w-[280px] mx-auto md:mx-0 md:w-[300px]">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                            type={!showPassword ? 'password' : 'text'}
                            className="bg-[#131725] text-white px-[28px] text-[12px] font-normal28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]" placeholder='Password ' />
                        {showPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={20} height={20} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(false)} />
                        </> :
                            <>
                                <Image src="/images/eye.png" alt="" width={20} height={20} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(true)} />
                            </>}
                    </div>

                    <div className="relative w-[280px] mx-auto md:mx-0 md:w-[300px]">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, cpassword: e.target.value }) }}
                            type={!showCPassword ? 'password' : 'text'}
                            className="bg-[#131725] text-white px-[28px] text-[12px] font-normal28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]" placeholder='Confirm password ' />
                        {showCPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={20} height={20} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowCPassword(false)} />
                        </> :
                            <>
                                <Image src="/images/eye.png" alt="" width={20} height={20} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowCPassword(true)} />
                            </>}
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-6">
                        <button
                            type="submit"
                            className="max-w-full border border-primary-900 text-primary-900 px-[28px] text-[12px] font-normal28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-[10px]"
                        >
                            Next
                        </button>
                        <div className="text-[10px] md:text-[15px] lg:text-[20px] text-black">
                            Have an account?{' '}
                            <Link href="/login" className="font-bold hover:text-primary-100">
                                LOGIN
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </Layout>
    </>)
}
