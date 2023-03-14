import Image from 'next/image'
import React, { useState } from 'react'
import Header from '../components/Header';

export default function Metadata({ children }) {
    const [options, setOptions] = useState({
        stateOptions: [
            { id: 1, name: 'option 1' },
            { id: 2, name: 'option 2' },
            { id: 3, name: 'option 3' },
        ],
        LGAOptions: [
            { id: 1, name: 'option L1' },
            { id: 2, name: 'option L2' },
            { id: 3, name: 'option L3' },
        ],
        IDTypeOptions: [
            { id: 1, name: 'option ID1' },
            { id: 2, name: 'option ID2' },
            { id: 3, name: 'option ID3' },
        ],
        SkillOptions: [
            { id: 1, name: 'option S1' },
            { id: 2, name: 'option S2' },
            { id: 3, name: 'option S3' },
        ],
        YOEOptions: [
            { id: 1, name: 'option Y1' },
            { id: 2, name: 'option Y2' },
            { id: 3, name: 'option Y3' },
        ],
    })
    const [showStateOptions, setShowStateOptions] = useState(false)
    const [showLGAOptions, setShowLGAOptions] = useState(false)
    const [showIDTypeOptions, setShowIDTypeOptions] = useState(false)
    const [showSkillOptions, setShowSkillOptions] = useState(false)
    const [showYOEOptions, setShowYOEOptions] = useState(false)
    const [inputs, setInputs] = useState({
        state: '',
        LGA: '',
        IDType: '',
        Skill: '',
        YOE: '',
        fullName: '',
        bioPhoneNumber: '',
        email: '',
        address: '',
        contactAltPhoneNumber: '',
        certifications: '',
    })
    const [cert, setCert] = useState(null)
    const [ref, setRef] = useState(null)
    const [idCard, setIdCard] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs, cert, ref, idCard);
    }

    return (
        <div className="max-w-[1650px] mx-auto font-poppins">
            <Header auth={true} />
            <div className="px-3 md:px-12 py-4 bg-primary-900 text-secondary">
                <p className="text-sm">
                    Welcome <br />
                    Kindly submit all document <br className='md:hidden' />correctly so you can be verified
                </p>
            </div>
            <div className="h-10"></div>

            <form className="px-3 md:px-12" onSubmit={handleSubmit}>
                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Biodata information</h1>
                    <div className="mb-8">
                        <input type="text" name="" id="" onChange={(e) => { setInputs({ ...inputs, firstName: e.target.value }) }} value={inputs.firstName}
                            placeholder='Full name' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                    </div>
                    <div className="flex items-center gap-4 md:gap-10 mb-8">
                        <input type="tel" name="" id="" onChange={(e) => { setInputs({ ...inputs, bioPhoneNumber: e.target.value }) }} value={inputs.bioPhoneNumber}
                            placeholder='Phone number' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <input type="tel" name="" id="" onChange={(e) => { setInputs({ ...inputs, contactAltPhoneNumber: e.target.value }) }} value={inputs.contactAltPhoneNumber}
                            placeholder='Alternative phone number' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                    </div>
                    <input type="email" name="" id="" onChange={(e) => { setInputs({ ...inputs, email: e.target.value }) }} value={inputs.email}
                        placeholder='Email' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />

                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Residential information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" onChange={(e) => { setInputs({ ...inputs, address: e.target.value }) }} value={inputs.address}
                            placeholder='Full Address' className='md:flex-1 rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                        <div className="mt-4 md:mt-0 flex-[2] flex items-center gap-4 md:gap-10">
                            <div className="relative w-full">
                                <input type="text" readOnly onClick={() => setShowStateOptions(true)} value={inputs.state}
                                    placeholder='State' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                                <Image src="/images/icons/caret-down.svg" alt="" width={14} height={14} className={`absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer ${showStateOptions && 'rotate-180'}`} onClick={() => setShowStateOptions(!showStateOptions)} />
                                {showStateOptions && <OptionsComp
                                    setValue={setInputs}
                                    inputs={inputs}
                                    setKey={'state'}
                                    setClose={setShowStateOptions}
                                    options={options.stateOptions} />}
                            </div>
                            <div className="relative w-full">
                                <input type="text" readOnly onClick={() => setShowLGAOptions(true)} value={inputs.LGA}
                                    placeholder='Local Government Area' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                                <Image src="/images/icons/caret-down.svg" alt="" width={14} height={14} className={`absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer ${showLGAOptions && 'rotate-180'}`} onClick={() => setShowLGAOptions(!showLGAOptions)} />
                                {showLGAOptions && <OptionsComp
                                    setValue={setInputs}
                                    inputs={inputs}
                                    setKey={'LGA'}
                                    setClose={setShowLGAOptions}
                                    options={options.LGAOptions} />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Identity information</h1>
                    <div className="flex items-center gap-4 md:gap-10">
                        <div className="relative w-full">
                            <input type="text" readOnly onClick={() => setShowIDTypeOptions(true)} value={inputs.IDType}
                                placeholder='Identity type' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                            <Image src="/images/icons/caret-down.svg" alt="" width={14} height={14} className={`absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer ${showIDTypeOptions && 'rotate-180'}`} onClick={() => setShowIDTypeOptions(!showIDTypeOptions)} />
                            {showIDTypeOptions && <OptionsComp
                                setValue={setInputs}
                                inputs={inputs}
                                setKey={'IDType'}
                                setClose={setShowIDTypeOptions}
                                options={options.IDTypeOptions} />}
                        </div>
                        <input type="text" name="" id="" onChange={(e) => { setInputs({ ...inputs, firstName: e.target.value }) }} value={inputs.firstName}
                            placeholder='Identity  Number' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Skill information</h1>
                    <div className="mb-4 md:mb-8 flex flex-col md:flex-row items-center gap-4 md:gap-10">
                        <div className="relative w-full">
                            <input type="text" readOnly onClick={() => setShowSkillOptions(true)} value={inputs.Skill}
                                placeholder='What skills do you have to offer ?' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                            <Image src="/images/icons/caret-down.svg" alt="" width={14} height={14} className={`absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer ${showSkillOptions && 'rotate-180'}`} onClick={() => setShowSkillOptions(!showSkillOptions)} />
                            {showSkillOptions && <OptionsComp
                                setValue={setInputs}
                                inputs={inputs}
                                setKey={'Skill'}
                                setClose={setShowSkillOptions}
                                options={options.SkillOptions} />}
                        </div>

                        <div className="relative w-full hidden md:block">
                            <input type="text" readOnly onClick={() => setShowYOEOptions(true)} value={inputs.YOE}
                                placeholder='Years of experience' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                            <Image src="/images/icons/caret-down.svg" alt="" width={14} height={14} className={`absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer ${showYOEOptions && 'rotate-180'}`} onClick={() => setShowYOEOptions(!showYOEOptions)} />
                            {showYOEOptions && <OptionsComp
                                setValue={setInputs}
                                inputs={inputs}
                                setKey={'YOE'}
                                setClose={setShowYOEOptions}
                                options={options.YOEOptions} />}
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-10">
                        <input type="text" name="" id="" onChange={(e) => { setInputs({ ...inputs, certifications: e.target.value }) }} value={inputs.certifications}
                            placeholder='Certifications' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full md:w-2/3 flex items-center text-sm' />

                        <div className="relative w-full md:hidden">
                            <input type="text" readOnly onClick={() => setShowYOEOptions(true)} value={inputs.YOE}
                                placeholder='Years of experience' className='rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-full flex items-center text-sm' />
                            <Image src="/images/icons/caret-down.svg" alt="" width={14} height={14} className={`absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer ${showYOEOptions && 'rotate-180'}`} onClick={() => setShowYOEOptions(!showYOEOptions)} />
                            {showYOEOptions && <OptionsComp
                                setValue={setInputs}
                                inputs={inputs}
                                setKey={'YOE'}
                                setClose={setShowYOEOptions}
                                options={options.YOEOptions} />}
                        </div>
                    </div>
                </div>

                <div className="hidden mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Uploaded document</h1>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-16 xl:gap-32">
                        <label htmlFor="cert" className='border-2 border-dashed border-primary-900 text-primary-900 text-xs lg:text-sm py-4 px-4 xl:px-8 w-[200px] md:w-full rounded-[10px]'>
                            <h3 className='mb-2'>Certificate of craft {cert?.name && `| ${cert?.name}`}</h3>
                            <div className="flex items-center gap-4">
                                <Image src={'/images/icons/plus-circle.svg'} alt="" width={20} height={20} />
                                <span>Add document</span>
                            </div>
                        </label>
                        <input type="file" name="" id="cert" hidden onChange={(e) => { setCert(e.target.files[0]) }} />

                        <label htmlFor="ref" className='border-2 border-dashed border-primary-900 text-primary-900 text-xs lg:text-sm py-4 px-4 xl:px-8 w-[200px] md:w-full rounded-[10px]'>
                            <h3 className='mb-2 flex overflow-hidden'>Reference from any client letter {ref?.name && `| ${ref?.name}`}</h3>
                            <div className="flex items-center gap-4">
                                <Image src={'/images/icons/plus-circle.svg'} alt="" width={20} height={20} />
                                <span>Add document</span>
                            </div>
                        </label>
                        <input type="file" name="" id="ref" hidden onChange={(e) => { setRef(e.target.files[0]) }} />
                        <label htmlFor="idCard" className='border-2 border-dashed border-primary-900 text-primary-900 text-xs lg:text-sm py-4 px-4 xl:px-8 w-[200px] md:w-full rounded-[10px]'>
                            <h3 className='mb-2'>Picture of identity card {idCard?.name && `| ${idCard?.name}`}</h3>
                            <div className="flex items-center gap-4">
                                <Image src={'/images/icons/plus-circle.svg'} alt="" width={20} height={20} />
                                <span>Add document</span>
                            </div>
                        </label>
                        <input type="file" name="" id="idCard" hidden onChange={(e) => { setIdCard(e.target.files[0]) }} />
                    </div>
                </div>

                <div className="mb-12">
                    <h1 className="text-primary-900 text-lg font-bold mb-7">Uploaded document</h1>
                    <div className="flex items-center gap-2 md:gap-8 lg:gap-16 xl:gap-32">
                        <label htmlFor="cert" className='border-2 border-dashed border-primary-900 text-primary-900 text-[0.5rem] lg:text-sm py-2 md:py-4 px-1 md:px-4 xl:px-8 w-[200px] md:w-full rounded-[10px]'>
                            <h3 className='mb-2'>Certificate of craft {cert?.name && `| ${cert?.name}`}</h3>
                            <div className="flex items-center gap-4">
                                <Image src={'/images/icons/plus-circle.svg'} alt="" width={20} height={20} />
                                <span>Add document</span>
                            </div>
                        </label>
                        <input type="file" name="" id="cert" hidden onChange={(e) => { setCert(e.target.files[0]) }} />

                        <label htmlFor="ref" className='border-2 border-dashed border-primary-900 text-primary-900 text-[0.4rem] lg:text-sm py-2 md:py-4 px-1 md:px-4 xl:px-8 w-[200px] md:w-full rounded-[10px]'>
                            <h3 className='mb-2 flex overflow-hidden'>Reference from any client letter {ref?.name && `| ${ref?.name}`}</h3>
                            <div className="flex items-center gap-4">
                                <Image src={'/images/icons/plus-circle.svg'} alt="" width={20} height={20} />
                                <span>Add document</span>
                            </div>
                        </label>
                        <input type="file" name="" id="ref" hidden onChange={(e) => { setRef(e.target.files[0]) }} />
                        <label htmlFor="idCard" className='border-2 border-dashed border-primary-900 text-primary-900 text-[0.5rem] lg:text-sm py-2 md:py-4 px-1 md:px-4 xl:px-8 w-[200px] md:w-full rounded-[10px]'>
                            <h3 className='mb-2'>Picture of identity card {idCard?.name && `| ${idCard?.name}`}</h3>
                            <div className="flex items-center gap-4">
                                <Image src={'/images/icons/plus-circle.svg'} alt="" width={20} height={20} />
                                <span>Add document</span>
                            </div>
                        </label>
                        <input type="file" name="" id="idCard" hidden onChange={(e) => { setIdCard(e.target.files[0]) }} />
                    </div>
                </div>

                <div className="flex justify-center md:justify-start">
                    <button className="mt-20 mb-10 rounded-[10px] bg-transparent border border-[#131725] to-primary-900 px-4 h-16 w-[200px] flex items-center justify-center text-lg font-bold">Save</button>
                </div>

            </form>
        </div>
    )
}

const OptionsComp = ({ options, setClose, setValue, setKey, inputs }) => {
    return (
        <div className="absolute top-[4rem] z-10 left-0 w-full min-h-[100px] bg-secondary text-primary-900 rounded-[10px] shadow-2xl flex flex-col gap-0 py-4 max-h-52 overflow-y-auto">
            {options?.map(option => {
                return (
                    <div
                        key={option?.id}
                        className="py-2 px-8 hover:bg-primary-100"
                        onClick={() => {
                            setValue({ ...inputs, [setKey]: option?.name })
                            setClose(false);
                        }}
                    >{option?.name}</div>
                )
            })}
        </div>
    )
}