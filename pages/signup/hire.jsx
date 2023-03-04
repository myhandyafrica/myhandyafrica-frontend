import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from './Layout'
import { toast } from 'react-toastify';
import { createAccount, setStorageItem } from '../../redux/request';
import Loader from '../../components/Loader';

const customId = 'userid';
export default function Hire() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState({ fname: '', email: '', stateOfResidence: '', phone: '', password: '', cpassword: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [showCPassword, setShowCPassword] = useState(false)
    const [loader, setloader] = useState(false);

    const checkUserInput = async () => {
        try {
            let valid = true;
            const { fname, email, stateOfResidence, phone, password, cpassword, } = userDetails;
            if (fname === '' || email === '' || stateOfResidence === '' || phone === '' || password === '' || cpassword === '') {
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
                const { fname, email, stateOfResidence, phone, password, cpassword } = userDetails;
                const userData = {
                    full_name: fname,
                    email: email,
                    state_of_residence: stateOfResidence,
                    mobile: phone,
                    password: password,
                    user_type: 'customer'
                };
                const response = await createAccount(userData);
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

                <div className="">
                    <h1 className="font-medium text-[30px] leading-[48px]">Hey</h1>
                    <p className="mt-3 text-[18px]">
                        Please register to continue to <span className='font-bold hover:text-primary-100'>hire</span> or click here to <Link href="/signup/work" className='font-bold hover:text-primary-100'>REGISTER TO WORK</Link>
                    </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-10">
                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, fname: e.target.value }) }}
                        type="text" className="bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl" placeholder='Full name' />

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                        type="email" className="bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl" placeholder='Email' />

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, stateOfResidence: e.target.value }) }}
                        type="text" className="bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl" placeholder='State of residence' />

                    <input required
                        onChange={(e) => { setUserDetails({ ...userDetails, phone: e.target.value }) }}
                        maxLength={11}
                        type="phone" className="bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl" placeholder='Phone number ' />

                    <div className="relative w-[280px] mx-auto md:mx-0 md:w-[300px]">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                            type={!showPassword ? 'password' : 'text'} 
                            className="bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl" placeholder='Password ' />
                        {showPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(false)} />
                        </> :
                            <>
                                <Image src="/images/eye.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(true)} />
                            </>}
                    </div>

                    <div className="relative w-[280px] mx-auto md:mx-0 md:w-[300px]">
                        <input required
                            onChange={(e) => { setUserDetails({ ...userDetails, cpassword: e.target.value }) }}
                            type={!showCPassword ? 'password' : 'text'} 
                            className="bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl" placeholder='Confirm password ' />
                        {showCPassword ? <>
                            <Image src="/images/hidden.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowCPassword(false)} />
                        </> :
                            <>
                                <Image src="/images/eye.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowCPassword(true)} />
                            </>}
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center gap-6">
                        <button
                            type="submit"
                            className="max-w-full bg-[#131725] text-white px-[28px] py-[15px] w-[280px] mx-auto md:mx-0 md:w-[300px] rounded-2xl"
                        >
                            Register
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
