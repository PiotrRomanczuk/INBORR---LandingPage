'use client';

import Image from 'next/image';
import { useState } from 'react';

export const NavBar = () => {
	const NavItems = [
		{ name: 'Home' },
		{ name: 'Apartamenty' },
		{ name: 'Kontakt' },
		{ name: 'Rezerwacje' },
	];

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<nav className='bg-transparent py-4 mx-6 shadow-xl border-black sticky top-0 text-black'>
			<div className='container mx-auto flex justify-between items-center'>
				<Image alt='logo' src='/logo.png' width={100} height={60} />

				<div className='hidden md:flex gap-4'>
					{NavItems.map((item) => (
						<div key={item.name}>{item.name}</div>
					))}
				</div>

				<div className='md:hidden'>
					<button className='text-xl' onClick={toggleMobileMenu}>
						☰
					</button>
				</div>

				{mobileMenuOpen && (
					<div className='md:hidden absolute top-16 right-6 bg-white border shadow-md py-4 px-6 flex flex-col gap-4'>
						{NavItems.map((item) => (
							<div key={item.name}>{item.name}</div>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};
