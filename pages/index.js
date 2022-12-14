import Image from "next/image";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (<>
    <Header />

    <section className="px-[24px] md:px-[49px] pb-[24px] lg:pb-[77px] flex flex-col md:flex-row justify-between">
      <div className="flex-1 lg:mt-[55px]">
        <h1 className="font-poppins font-semibold text-[20px] md:text-[48px] leading-[28.8px] md:leading-[69.12px]">Get access to connect with any service provider </h1>
        <p className="mt-[9px] lg:mt-[20px] max-w-[204px] md:max-w-[400px] font-normal text-[12px] md:text-2xl">Hire any service provider and get one at your door.</p>
        <div className="mt-[28px] lg:mt-[50px]">
          <Button text={'Hire a provider'} bgColor={'bg-primary-900'} textColor={'text-lightBlue'} />
        </div>
      </div>
      <div className="flex-1 hidden md:flex justify-end">
        <Image src="/images/hero image.svg" alt="" width={510} height={326} className="lg:w-[510px] h-[fit-content] " />
      </div>
    </section>

    {/* why use */}
    <section className="py-[42px] px-[56px] bg-primary-900 text-secondary">
      <h1 className="text-[20px] font-[600] text-center md:text-[40px] ">Why use Myhandyafrica</h1>
      <div className="flex flex-col md:flex-row justify-center gap-[35px] lg:gap-[112px] mt-[35px]">
        <div className="flex md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-[15px]">
          <Image src="/images/chat-icon.png" alt="" width={61} height={63} className="w-[30px] h-[30px] md:w-[61px] md:h-[63px] md:mb-1 lg:mb-0" />
          <div className="">
            <h2 className="text-[16px] lg:text-[32px] font-[600]">Fast service</h2>
            <p className="mt-1 text-[10px] lg:text-[16px] leading-[12px] lg:leading-[24px] text-[#F6F6F6]">Myhandy africa gives you service providers that are around your location</p>
          </div>
        </div>
        <div className="flex md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-[15px]">
          <Image src="/images/target-icon.png" alt="" width={61} height={63} className="w-[30px] h-[30px] md:w-[61px] md:h-[63px] md:mb-1 lg:mb-0" />
          <div className="">
            <h2 className="text-[16px] lg:text-[32px] font-[600]">Skilled providers</h2>
            <p className="mt-1 text-[10px] lg:text-[16px] leading-[12px] lg:leading-[24px] text-[#F6F6F6]">Myhandy africa gives you service providers that are around your location</p>
          </div>
        </div>
        <div className="flex md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-[15px]">
          <Image src="/images/padlock-icon.png" alt="" width={61} height={63} className="w-[30px] h-[30px] md:w-[61px] md:h-[63px] md:mb-1 lg:mb-0" />
          <div className="">
            <h2 className="text-[16px] lg:text-[32px] font-[600]">Trusted providers</h2>
            <p className="mt-1 text-[10px] lg:text-[16px] leading-[12px] lg:leading-[24px] text-[#F6F6F6]">Myhandy africa gives you service providers that are around your location</p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-[20px] lg:px-[52px]">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mt-[55px]">
          <h1 className="font-poppins font-semibold text-[20px] md:text-[30px] lg:text-[48px] leading-[28.8px] md:leading-[40px] text-center md:text-start lg:leading-[69.12px]">Building an ecosystem where access to service providers is made easy</h1>
          <div className="hidden md:block md:mt-[24px] lg:mt-[41px]"><Button text={'Become a worker'} bgColor={'bg-primary-900'} textColor={'text-lightBlue'} /></div>
        </div>
        <div className="flex-1 mt-[30px] flex justify-end">
          <Image src="/images/Rectangle 8.svg" alt="" width={516} height={426} className="w-[268px] lg:w-[516px] h-[fit-content]" />
        </div>
        <div className="md:hidden mx-auto mt-[23px]"><Button text={'Become a worker'} bgColor={'bg-primary-900'} textColor={'text-lightBlue'} /></div>
      </div>
      <div className="flex flex-col items-end mt-[96px] mb-[56px]">
        <h1 dir="rtl" className="font-poppins font-[600] md:font-[500] text-[20px] md:text-[32px] lg:text-[48px] leading-[28.8px] md:leading-[48px] lg:leading-[69.12px] max-w-[1136px]">Are you a service provider join the family let connect you with people who need you</h1>
        <div className="mt-[10px] md:mt-[24px] lg:mt-[54px]"><Button text={'Become a provider'} bgColor={'bg-primary-900'} textColor={'text-lightBlue'} /></div>
      </div>
    </section>

    <section className="flex flex-col lg:flex-row justify-between bg-primary-900 text-lightBlue py-[43px] px-[24px] md:px-[56px]">
      <div className="flex-1">
        <h2 className="text-[20px] md:text-4xl font-semibold text-white">How to use</h2>
        <p className="text-[16px] md:text-3xl text-white mt-[10px]">Easy steps to connect to a <br /> service provider</p>
        <div className="mt-[15px]">
          <div className="flex items-center gap-4">
            <Image src="/images/card.svg" alt="" width={65} height={65} className="w-[36px] md:w-[65px] h-[33px] md:h-[65px]" />
            <span className="text-[12px] md:text-2xl font-normal">Create an account</span>
          </div>
          <div className="flex items-center gap-4 my-[24px]">
            <Image src="/images/searchq.svg" alt="" width={65} height={65} className="w-[36px] md:w-[65px] h-[33px] md:h-[65px]" />
            <span className="text-[12px] md:text-2xl font-normal">Search for which provider you need</span>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/images/note.svg" alt="" width={65} height={65} className="w-[36px] md:w-[65px] h-[33px] md:h-[65px]" />
            <span className="text-[12px] md:text-2xl font-normal">Drop your location and expect <br /> a service provider</span>
          </div>
        </div>
      </div>
      <div className="flex-[2] flex justify-center mt-20 lg:mt-0 lg:justify-end">
        <Image src="/images/Vector.png" alt="" width={562} height={533} className="w-[266px] lg:w-[562px] h-[fit-content]" />
      </div>
    </section>

    <Footer />
  </>)
}
