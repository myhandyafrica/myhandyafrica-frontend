import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { toast } from 'react-toastify';
import { createWorker } from '../../redux/request';
import Loader from '../../components/Loader';

export default function Hire() {
	const router = useRouter();

	const [userDetails, setUserDetails] = useState({
		fname: '',
		email: '',
		stateOfResidence: '',
		phone: '',
		password: '',
		cpassword: '',
	});
	const [loader, setloader] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showCPassword, setShowCPassword] = useState(false);
	const customId = 'userid';

	const checkUserInput = async () => {
		try {
			let valid = true;
			const {
				fname,
				email,
				stateOfResidence,
				phone,
				password,
				cpassword,
			} = userDetails;
			if (
				fname === '' ||
				email === '' ||
				stateOfResidence === '' ||
				phone === '' ||
				password === '' ||
				cpassword === ''
			) {
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
				const {
					fname,
					email,
					stateOfResidence,
					phone,
					password,
					cpassword,
				} = userDetails;
				const userData = {
					full_name: fname,
					email: email,
					state_of_residence: stateOfResidence,
					mobile: phone,
					password: password,
					user_type: 'provider'
				};
				const response = await createWorker(userData);
				const { success, message, data } = response.data;
				if (success === true) {
					setloader(false);
					toast.success(message, {
						customId: customId,
					});
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

	return (
		<div>
			{loader && <Loader />}
			<Layout>
				<form
					action=""
					className="text-primary-900 w-[255px] md:w-[450px] mx-auto lg:w-2/4"
					onSubmit={handleSubmit}
				>
					<h1 className="font-[500] text-[21px] lg:text-[40px] leading-[31.5px] lg:leading-[60px] text-black">
						Hello,
					</h1>
					<div className="flex flex-col gap-[35px] mt-[24px]">
						<p className="text-[10px] md:text-[15px] lg:text-[20px] text-black">
							Please register to continue to
							{' '}
							<span className="font-bold hover:text-primary-100">work</span>
							{' '}
							or
							click here to{' '}
							<Link
								href="/signup/hire"
								className="font-bold hover:text-primary-100"
							>
								REGISTER TO HIRE
							</Link>
						</p>

						<input
							required
							onChange={e => {
								setUserDetails({ ...userDetails, fname: e.target.value });
							}}
							type="text"
							className="w-full px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px]"
							placeholder="Full name"
						/>

						<input
							required
							onChange={e => {
								setUserDetails({ ...userDetails, email: e.target.value });
							}}
							type="email"
							className="w-full px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px]"
							placeholder="Email"
						/>

						<input
							required
							onChange={e => {
								setUserDetails({
									...userDetails,
									stateOfResidence: e.target.value,
								});
							}}
							type="text"
							className="w-full px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px]"
							placeholder="State of residence"
						/>

						<input
							required
							onChange={e => {
								setUserDetails({ ...userDetails, phone: e.target.value });
							}}
							maxLength={11}
							type="phone"
							className="w-full px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px]"
							placeholder="Phone number "
						/>

						<div className="relative w-full">
							<input
								required
								onChange={e => {
									setUserDetails({ ...userDetails, password: e.target.value });
								}}
								type={!showPassword ? 'password' : 'text'}
								className="px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px] w-full pr-16"
								placeholder="Password "
							/>
							{showPassword
								? <div>
									<Image
										src="/images/hidden.png"
										alt=""
										width={24}
										height={24}
										className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5"
										onClick={() => setShowPassword(false)}
									/>
								</div>
								: <div>
									<Image
										src="/images/eye.png"
										alt=""
										width={24}
										height={24}
										className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5"
										onClick={() => setShowPassword(true)}
									/>
								</div>}
						</div>

						<div className="relative w-full">
							<input
								required
								onChange={e => {
									setUserDetails({ ...userDetails, cpassword: e.target.value });
								}}
								type={!showCPassword ? 'password' : 'text'}
								className="px-[17px] py-[13px] lg:py-[25px] border border-[#3D3D3D] rounded-[10px] text-[15px] lg:text-[20px] w-full pr-16"
								placeholder="Confirm password "
							/>
							{showCPassword
								? <div>
									``
									<Image
										src="/images/hidden.png"
										alt=""
										width={24}
										height={24}
										className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5"
										onClick={() => setShowCPassword(false)}
									/>
								</div>
								: <div>
									<Image
										src="/images/eye.png"
										alt=""
										width={24}
										height={24}
										className="cursor-pointer absolute top-[50%] -translate-y-[50%] right-5"
										onClick={() => setShowCPassword(true)}
									/>
								</div>}
						</div>

						<button
							type="submit"
							className="w-full py-[10px] lg:py-[13px] border border-[#3D3D3D] font-[500] text-center rounded-[10px] text-[18px] lg:text-[36px] text-black"
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
				</form>
			</Layout>
		</div>
	);
}
