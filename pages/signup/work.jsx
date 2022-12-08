import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from './Layout'

export default function Hire() {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({ fname: '', email: '', stateOfResidence: '', phone: '', password: '', cpassword: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [showCPassword, setShowCPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.password != userDetails.cpassword) {
      alert("Password did not match!");
      setShowPassword(true);
      setShowCPassword(true);
      return;
    }

    console.log(userDetails);
    router.push('/verify')
  }

  return (<>
    <Layout>
      <form action="" className='text-primary-900 w-[320px] md:w-[400px] mx-auto lg:w-2/4' onSubmit={handleSubmit}>
        <h1 className="font-[500] text-[40px] leading-[60px]">Hello,</h1>
        <div className="flex flex-col gap-[35px] mt-[36px]">
          <p className="text-[20px]">Please register to continue to <span className='font-bold hover:text-primary-100'>work</span> or click here to <Link href="/signup/hire" className='font-bold hover:text-primary-100'>REGISTER TO HIRE</Link></p>

          <input required
            onChange={(e) => { setUserDetails({ ...userDetails, fname: e.target.value }) }}
            type="text" className="w-[450px] px-[17px] py-[25px] border border-[#3D3D3D] rounded-[10px] text-[20px]" placeholder='Full name' />

          <input required
            onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
            type="email" className="w-[450px] px-[17px] py-[25px] border border-[#3D3D3D] rounded-[10px] text-[20px]" placeholder='Email' />

          <input required
            onChange={(e) => { setUserDetails({ ...userDetails, stateOfResidence: e.target.value }) }}
            type="text" className="w-[450px] px-[17px] py-[25px] border border-[#3D3D3D] rounded-[10px] text-[20px]" placeholder='State of residence' />

          <input required
            onChange={(e) => { setUserDetails({ ...userDetails, phone: e.target.value }) }}
            type="phone" className="w-[450px] px-[17px] py-[25px] border border-[#3D3D3D] rounded-[10px] text-[20px]" placeholder='Phone number ' />

          <div className="relative w-[450px]">
            <input required
              onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
              type={!showPassword ? 'password' : 'text'} className="px-[17px] py-[25px] border border-[#3D3D3D] rounded-[10px] text-[20px] w-full pr-16" placeholder='Password ' />
            {showPassword ? <>
              <Image src="/images/hidden.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(false)} />
            </> :
              <>
                <Image src="/images/eye.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowPassword(true)} />
              </>}
          </div>

          <div className="relative w-[450px]">
            <input required
              onChange={(e) => { setUserDetails({ ...userDetails, cpassword: e.target.value }) }}
              type={!showCPassword ? 'password' : 'text'} className="px-[17px] py-[25px] border border-[#3D3D3D] rounded-[10px] text-[20px] w-full pr-16" placeholder='Confirm password ' />
            {showCPassword ? <>
              <Image src="/images/hidden.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowCPassword(false)} />
            </> :
              <>
                <Image src="/images/eye.png" alt="" width={24} height={24} className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5" onClick={() => setShowCPassword(true)} />
              </>}
          </div>

          <button type='submit' className="w-[450px] py-[13px] border border-[#3D3D3D] font-[500] text-center rounded-[10px] text-[36px] text-black">Register</button>
          <div className="text-[20px]">
            Have an account?  <Link href="/login" className='font-bold hover:text-primary-100'>LOGIN</Link>
          </div>
        </div>
      </form>
    </Layout>
  </>)
}
