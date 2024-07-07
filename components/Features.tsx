'use client';

import {
	ArrowPathIcon,
	CloudArrowUpIcon,
	FingerPrintIcon,
	LockClosedIcon,
} from '@heroicons/react/24/outline';
import { GiWorld } from 'react-icons/gi';
import { Fade } from 'react-awesome-reveal';

const features = [
	{
		name: 'BOSTON, MA',
		dates: '07/15/2022 - 07/17/2022',
		description:
			'A fun, 2-day event where you can meet me and my friends, take photos, and maybe something more. You never know what might happen!',
		icon: GiWorld,
	},
	{
		name: 'WASHINGTON, DC',
		dates: '08/05/2022 - 08/07/2022',
		description:
			'A fun, 2-day event where you can meet me and my friends, take photos, and maybe something more. You never know what might happen!',
		icon: GiWorld,
	},
	{
		name: 'CHICAGO, IL',
		dates: '09/02/2022 - 09/04/2022',
		description:
			'A fun, 2-day event where you can meet me and my friends, take photos, and maybe something more. You never know what might happen!',
		icon: GiWorld,
	},
	{
		name: 'LONDON, UK',
		dates: '10/21/2022 - 10/23/2022',
		description:
			'A fun, 2-day event where you can meet me and my friends, take photos, and maybe something more. You never know what might happen!',
		icon: GiWorld,
	},
];

const Features = () => {
	return (
		<section className='pb-12 xl:py-24'>
			<div className='container mx-auto'>
				<Fade
					direction='up'
					delay={400}
					cascade
					damping={1e-1}
					triggerOnce={true}>
					<h2 className='mx-auto mb-2 text-center section-title xl:mb-3'>
						Tour Dates
					</h2>
				</Fade>
				<div className='flex flex-col'>
					<div className='mx-auto text-center max-w-7xl'>
						<Fade
							direction='up'
							delay={600}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<p className='mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl'>
								Everything you need to see me in person.
							</p>
						</Fade>
						<Fade
							direction='up'
							delay={800}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<p className='mt-6 text-lg leading-8 text-black dark:text-white'>
								Check out my tour dates to see when I&apos;ll be visiting your
								city and join me and my friends for an unforgettable experience.
								Only for a limited time! Don&apos;t miss out — reserve your spot
								today!
							</p>
						</Fade>
					</div>
				</div>

				{/* Features Lists */}
				<div className='max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl'>
					<dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
						<Fade
							direction='up'
							delay={400}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							{features.map(feature => (
								<div
									key={feature.name}
									className='relative transition-all hover:scale-110'>
									<dt className='justify-center text-base font-semibold leading-7 text-muted-foreground'>
										<div className='flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center'>
											<feature.icon
												className='h-[36px] w-[36px] text-white'
												aria-hidden='true'
											/>
										</div>
										<div className='text-black dark:text-white'>
											{feature.name}
										</div>
									</dt>
									<dd className='mt-2 text-base leading-7'>
										<i>{feature.dates}</i>
										<br />
										{feature.description}
									</dd>
								</div>
							))}
						</Fade>
					</dl>
				</div>
			</div>
		</section>
	);
};

export default Features;
