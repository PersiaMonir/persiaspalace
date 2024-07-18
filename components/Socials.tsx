import Link from 'next/link';
import { RiLinkedinFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

interface SocialsProps {
	containerStyles?: string;
	iconStyles?: string;
}

const icons = [
	{ path: 'https://x.com/persiamonir', name: <RiTwitterFill /> },
	{
		path: 'https://www.instagram.com/persia_monir1/',
		name: <RiInstagramFill />,
	},
	{
		path: 'https://www.linkedin.com/in/persia-monir-b00711287',
		name: <RiLinkedinFill />,
	},
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => (
				<Link key={index} href={icon.path} target='_blank'>
					<div className={`${iconStyles}`}>{icon.name}</div>
				</Link>
			))}
			<Link href='https://onlyfans.com/persiamonir' target='_blank'>
				<div className={`${iconStyles}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='1em'
						height='1em'
						viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173c0 0-2.399.585-4.43 0c4.018-.777 6.333-3.037 7.005-5.995M5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996a7.996 7.996 0 0 0-7.996-7.996m0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z'></path>
					</svg>
				</div>
			</Link>
		</div>
	);
};

export default Socials;
