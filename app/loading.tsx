import Image from 'next/image';

export default function Loading() {
	return (
		<div className='fixed inset-0 bg-blue-500 z-[10000] flex flex-1 items-center justify-center'>
			Loading return{' '}
			<Image alt='logo' src='/logo.png' width={460} height={200} />;
		</div>
	);
}
