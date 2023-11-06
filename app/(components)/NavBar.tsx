import Image from 'next/image';

export const NavBar = () => {
	const NavItems = [
		{ name: 'Home' },
		{ name: 'Apartamenty' },
		{ name: 'Kontakt' },
		{ name: 'Rezerwacje' },
	];

	return (
		<nav className='h-18 bg-transparent flex gap-4 justify-between py-4 mx-6 shadow-xl border-black sticky top-0 text-black'>
			<Image alt='logo' src='/logo.png' width={100} height={60} />
			<div className='flex gap-4'>
				{NavItems.map((item) => {
					return (
						<div key={item.name} className=''>
							{item.name}
						</div>
					);
				})}
			</div>
		</nav>
	);
};
