import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link
			href='/'
			className='text-2xl tracking-widest uppercase hover:text-primary md:text-3xl xl:text-4xl'>
			Persia Monir
		</Link>
	);
};

export default Logo;
