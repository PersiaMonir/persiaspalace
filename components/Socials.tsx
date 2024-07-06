'use client';

import Link from 'next/link';
import {
	RiPaypalFill,
	RiSnapchatFill,
	RiSkypeFill,
	RiFacebookFill,
	RiInstagramFill,
} from 'react-icons/ri';

interface SocialsProps {
	containerStyles?: string;
	iconStyles?: string;
}

const icons = [
	{ path: '/', name: <RiPaypalFill /> },
	{ path: '/', name: <RiSnapchatFill /> },
	{ path: '/', name: <RiSkypeFill /> },
	{ path: '/', name: <RiFacebookFill /> },
	{ path: '/', name: <RiInstagramFill /> },
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => (
				<Link key={index} href={icon.path}>
					<div className={`${iconStyles}`}>{icon.name}</div>
				</Link>
			))}
		</div>
	);
};

export default Socials;
