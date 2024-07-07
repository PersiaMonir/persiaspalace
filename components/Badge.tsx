'use client';

import { ReactNode } from 'react';
import CountUp from 'react-countup';

interface BadgeProps {
	containerStyles?: string;
	icon: ReactNode;
	endCountNum: number;
	endCountText: string;
	badgeText?: string;
}

const Badge = ({
	containerStyles,
	icon,
	endCountNum,
	endCountText,
	badgeText,
}: BadgeProps) => {
	return (
		<div className={`badge ${containerStyles}`}>
			<div className='text-3xl text-white'>{icon}</div>
			<div className='flex items-center gap-x-2'>
				<div className='text-4xl font-bold leading-none text-white'>
					<CountUp end={endCountNum} delay={1} duration={4} />
					{endCountText}
				</div>
				<div className='max-w-[70px] text-[15px] leading-none font-medium text-black'>
					{badgeText}
				</div>
			</div>
		</div>
	);
};

export default Badge;
