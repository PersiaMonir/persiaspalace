import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavProps {
	containerStyles?: string;
	linkStyles?: string;
	underlineStyles?: string;
}

const links = [
	{ path: '/', name: 'home' },
	{ path: '/about', name: 'about' },
	{ path: '/books', name: 'books' },
	{ path: '/pricing', name: 'pricing' },
	{ path: '/contact', name: 'contact' },
];

const Nav = ({
	containerStyles,
	linkStyles,
	underlineStyles,
	...props
}: NavProps) => {
	const path = usePathname();

	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.path}
					className={`capitalize ${linkStyles}`}
					{...props}>
					{link.path === path && (
						<motion.span
							initial={{ y: '-100%' }}
							animate={{ y: 0 }}
							transition={{ type: 'tween' }}
							layoutId='underline'
							className={`${underlineStyles}`}
						/>
					)}
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
