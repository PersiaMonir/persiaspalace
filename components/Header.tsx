'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import MobileNav from '@/components/MobileNav';
import Nav from '@/components/Nav';
import ThemeToggler from '@/components/ThemeToggler';

const Header = () => {
	const [header, setHeader] = useState<boolean>(false);
	const pathname = usePathname();

	useEffect(() => {
		const scrollYPos = () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		};

		window.addEventListener('scroll', scrollYPos);

		return () => window.removeEventListener('scroll', scrollYPos);
	}, []);

	return (
		<header
			className={`${
				header
					? 'py-4 bg-white shadow-lg dark:bg-accent'
					: 'py-6 dark:bg-transparent'
			} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}>
			<div className='container mx-auto'>
				<div className='flex items-center justify-between'>
					<Logo />
					<div className='flex items-center gap-x-6'>
						{/* Navigation Section */}
						<Nav
							containerStyles='hidden xl:flex gap-x-8 items-center'
							linkStyles='relative hover:text-primary transition-all'
							underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
						/>

						{/* Theme Toggle */}
						<ThemeToggler />

						{/* Mobile Navigation */}
						<div className='xl:hidden'>
							<MobileNav />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
