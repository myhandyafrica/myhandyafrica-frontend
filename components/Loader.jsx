import React from 'react';
import { ThreeDots,Audio } from 'react-loader-spinner';

export default function Loader() {
	return (
		<div
			style={{
				backgroundColor: 'rgb(255,255,255)',
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				width: '100vw',
				zIndex: 9999,
				overflow: 'hidden',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Audio
				height="80"
				width="800"
				radius="9"
				color="#000"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</div>
	);
}
