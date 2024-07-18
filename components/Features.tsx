'use client';

import { GiWorld } from 'react-icons/gi';
import { Fade } from 'react-awesome-reveal';

const features = [
	{
		name: 'BOSTON, MA',
		dates: '06/28/2024 - 06/30/2024',
		description:
			'Join me for an exciting 3-day weekend in Boston! Enjoy exclusive meet-and-greets, memorable photos, and experience unexpected surprises!',
		icon: GiWorld,
	},
	{
		name: 'WASHINGTON, DC',
		dates: '07/20/2024 - 07/23/2024',
		description:
			"Spend four fantastic days in the nation's capital with me! From intimate gatherings to thrilling adventures, I promise unforgettable moments along the way!",
		icon: GiWorld,
	},
	{
		name: 'CHICAGO, IL',
		dates: '07/23/2024 - 07/28/2024',
		description:
			'Get ready for a fun-filled five-day event in Chicago! Meet me and my friends with spontaneous fun and exciting experiences. Anything can happen!',
		icon: GiWorld,
	},
	{
		name: 'JERSEY CITY, NJ',
		dates: '08/04/2024 - 08/08/2024',
		description:
			"Join me in Jersey City for four days of dynamic events! Connect with me and my friends and take stunning photos. Don't miss out!",
		icon: GiWorld,
	},
	{
		name: 'LONDON, UK',
		dates: '09/11/2024 - 09/13/2024',
		description:
			'Come to London for an unforgettable 3-day experience! Meet me, take incredible photos, and enjoy a mix of planned activities. You never know what awaits!',
		icon: GiWorld,
	},
	{
		name: 'MUNICH, GERMANY',
		dates: '09/13/2024 - 09/18/2024',
		description:
			"Join me in Munich for a jam-packed, six-day event! We'll have a series of exciting and unpredictable adventures. Tickets are running out!",
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
