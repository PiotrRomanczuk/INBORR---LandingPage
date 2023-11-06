import Image from 'next/image';

import { NavBar } from './(components)/NavBar';
import { Footer } from './(components)/Footer';

export default function Home() {
	return (
		<>
			<div className='flex flex-col gap-2 bg-white justify-between relative h-[100vh]'>
				<NavBar />
				<div className='  bg-neutral-500 lg:mx-auto w-full min-h-[60vh] mt-0'>
					<main className='h-98 bg-gradient-radial'>Children</main>
				</div>
				<div className=' bg-neutral-500 lg:mx-auto pt-4 w-full min-h-[80vh] mt-0'>
					<main className='h-98 bg-gradient-radial'>Children</main>
				</div>
				<div className=' bg-neutral-500 lg:mx-auto pt-4 w-full min-h-[80vh] mt-0'>
					<main className='h-98 bg-gradient-radial'>Children</main>
				</div>
				<Footer />
			</div>
		</>
	);
}

const Loader = () => {
	return <Image alt='logo' src='/logo.png' width={460} height={200} />;
};
