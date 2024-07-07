import Image from 'next/image';

interface HeroImgProps {
	containerStyles?: string;
	imgSrc: string;
}

const HeroImg = ({ containerStyles, imgSrc }: HeroImgProps) => {
	return (
		<div className={`${containerStyles}`}>
			<Image src={imgSrc} alt='' fill priority />
		</div>
	);
};

export default HeroImg;
