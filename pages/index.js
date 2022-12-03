import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<div className="bg-secondary text-primary-900">
    <header className="px-[49px] h-screen">
      <nav className="flex justify-between items-center pt-5 pr-20">
        <Image src="/images/logo 1.png" alt="" width={120} height={55} />
        <div className="flex gap-10 items-center">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 22H23.42L22.86 21.46C24.82 19.18 26 16.22 26 13C26 5.82 20.18 0 13 0C5.82 0 0 5.82 0 13C0 20.18 5.82 26 13 26C16.22 26 19.18 24.82 21.46 22.86L22 23.42V25L32 34.98L34.98 32L25 22V22ZM13 22C8.02 22 4 17.98 4 13C4 8.02 8.02 4 13 4C17.98 4 22 8.02 22 13C22 17.98 17.98 22 13 22Z" fill="#131725" />
          </svg>
          <Link href="#register">Register</Link>
          <Link href="#login">Login</Link>
        </div>
      </nav>
      <div className="flex justify-between">
        <div className="flex-1 mt-[55px]">
          <h1 className="font-poppins font-semibold text-5xl leading-[144%]">Get access to connect with any service provider </h1>
          <p className="mt-[20px] max-w-[400px] font-normal text-2xl">Hire any service provider and get one at your door.</p>
          <div className="w-[300px] h-[100px] bg-primary-900 text-lightBlue font-[500] text-2xl rounded-[20px] grid place-items-center mt-[50px]">Hire a provider</div>
        </div>
        <div className="flex-1 mt-[30px] flex justify-end">
          <Image src="/images/hero image.png" alt="" width={510} height={490} />
        </div>
      </div>
    </header>

    {/* why use */}
    <section className="py-[42px] px-[56px] bg-primary-900 text-secondary">
      <h1 className="text-[40px] ">Why use Myhandyafrica</h1>
      <div className="flex justify-center gap-[112px] mt-[35px]">
        <div className="flex items-center gap-[15px]">
          <Image src="/images/chat-icon.png" alt="" width={61} height={63} className="-mb-10" />
          <div className="">
            <h2 className="text-[32px] font-[600]">Fast service</h2>
            <p className="leading-[24px]">Myhandy africa gives you service providers that are around your location</p>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <Image src="/images/target-icon.png" alt="" width={61} height={63} className="-mb-10" />
          <div className="">
            <h2 className="text-[32px] font-[600]">Skilled providers</h2>
            <p className="leading-[24px]">Myhandy africa gives you service providers that are around your location</p>
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <Image src="/images/padlock-icon.png" alt="" width={61} height={63} className="-mb-10" />
          <div className="">
            <h2 className="text-[32px] font-[600]">Trusted providers</h2>
            <p className="leading-[24px]">Myhandy africa gives you service providers that are around your location</p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-[52px]">
      <div className="flex justify-between">
        <div className="flex-1 mt-[55px]">
          <h1 className="font-poppins font-semibold text-5xl leading-[69.12px]">Building an ecosystem where access to service providers is made easy</h1>
          <div className="w-[300px] h-[100px] bg-primary-900 text-lightBlue font-[600] text-2xl rounded-[20px] grid place-items-center mt-[50px]">Become a  worker</div>
        </div>
        <div className="flex-1 mt-[30px] flex justify-end">
          <Image src="/images/Rectangle 8.png" alt="" width={510} height={490} />
        </div>
      </div>
      <div className="flex flex-col items-end mt-[96px] mb-[56px]">
          <h1 dir="rtl" className="font-poppins font-semibold text-5xl leading-[69.12px] max-w-[1136px]">Are you a service provider join the family let connect you with people who need you</h1>
        <div className="w-[300px] h-[100px] bg-primary-900 text-lightBlue font-[600] text-2xl rounded-[20px] grid place-items-center mt-[50px]">Become a provider</div>
      </div>
    </section>

    <section className="flex justify-between">
      <div className="">
        <h2 className="text-4xl font-semibold">How to use</h2>
        <p className="text-3xl">Easy steps to connect to a service provider</p>
        </div>
    </section>
  </div>)
}
