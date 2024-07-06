import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href='/'>
			<Image src='/logo.svg' alt='' width={55} height={55} priority />
		</Link>
	);
};

export default Logo;
