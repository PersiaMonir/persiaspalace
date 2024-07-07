'use client';

import { RiSendPlaneFill, RiUserHeartFill } from 'react-icons/ri';
import { Fade } from 'react-awesome-reveal';
import HeroImg from '@/components/HeroImg';

const infoData = [
	{ icon: <RiUserHeartFill size={20} />, text: 'Persia Monir' },
	{ icon: <RiSendPlaneFill size={20} />, text: 'Oklahoma City, Oklahoma' },
	{ icon: <RiUserHeartFill size={20} />, text: 'persiamonir@gmail.com' },
	{ icon: <RiUserHeartFill size={20} />, text: 'Born on 27 Sep, 1958' },
];

const About = () => {
	return (
		<section className='min-h-screen pb-12 pt-8 md:pt-0 xl:py-24'>
			<div className='container mx-auto'>
				<Fade
					direction='up'
					delay={400}
					cascade
					damping={1e-1}
					triggerOnce={true}>
					<h2 className='mx-auto mb-8 text-center section-title xl:mb-16'>
						About me
					</h2>
				</Fade>

				<div className='flex flex-col xl:flex-row'>
					{/* Image */}
					<div className='relative flex-1 xl:flex'>
						<Fade
							direction='left'
							delay={600}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<HeroImg
								containerStyles='w-[400px] h-[400px] lg:w-[505px] lg:h-[505px] bg-no-repeat relative'
								imgSrc='/profile.jpg'
							/>
						</Fade>
					</div>

					<div className='flex-1'>
						{/* Content */}
						<div className='mt-12 text-lg xl:mt-3'>
							<div className='text-center xl:text-left'>
								<Fade
									direction='right'
									delay={400}
									cascade
									damping={1e-1}
									triggerOnce={true}>
									<h3 className='mb-4 h3'>
										Let&apos;s tell you a little about me
									</h3>
								</Fade>

								<Fade
									direction='right'
									delay={600}
									cascade
									damping={1e-1}
									triggerOnce={true}>
									<p className='max-w-xl mx-auto subtitle xl:mx-0'>
										I am your favorite mature, busty film star with the great
										big hairy bush! As you know, I love the adult industry and
										love what I do i.e. filming and meeting my fans in different
										cities.
									</p>
								</Fade>

								<Fade
									direction='right'
									delay={800}
									cascade
									damping={1e-1}
									triggerOnce={true}>
									<p className='max-w-xl mx-auto subtitle xl:mx-0'>
										My hobbies are golf, writing, dancing, cooking, gardening
										and any outdoor activities. I haven’t tried the Pickle Ball
										sport as I know I will get addicted and I just don’t have
										time.
									</p>
								</Fade>

								{/* Icons */}
								<div className='grid gap-4 mb-12 xl:grid-cols-2'>
									<Fade
										direction='right'
										delay={1000}
										cascade
										damping={1e-1}
										triggerOnce={true}>
										{infoData.map((item, index) => (
											<div
												key={index}
												className='flex items-center mx-auto gap-x-4 xl:mx-0'>
												<div className='text-primary'>{item.icon}</div>
												<div>{item.text}</div>
											</div>
										))}
									</Fade>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
