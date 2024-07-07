'use client';

import { RiSendPlaneFill, RiUserHeartFill } from 'react-icons/ri';
import { Fade } from 'react-awesome-reveal';
import HeroImg from '@/components/HeroImg';

const infoData = [
	{ icon: <RiUserHeartFill size={20} />, text: 'Mrs Smith' },
	{ icon: <RiSendPlaneFill size={20} />, text: '+91 99 787 7761' },
	{ icon: <RiUserHeartFill size={20} />, text: 'photography@gmail.com' },
	{ icon: <RiUserHeartFill size={20} />, text: 'Born on 23 Jan, 2000' },
	{ icon: <RiUserHeartFill size={20} />, text: 'Master Degree' },
	{ icon: <RiUserHeartFill size={20} />, text: '22, Ella Statu, Texas, US' },
];

const About = () => {
	return (
		<section className='min-h-screen pb-12 xl:py-24'>
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
								imgSrc='/about/profile.png'
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
										Let&apos;s plan your perfect photoshoot
									</h3>
								</Fade>

								<Fade
									direction='right'
									delay={600}
									cascade
									damping={1e-1}
									triggerOnce={true}>
									<p className='max-w-xl mx-auto subtitle xl:mx-0'>
										Our mission is to further develop the overall excellence of
										photography and to capture memories that will be cherised
										for a lifetime, in the timeless photographs.
									</p>
								</Fade>

								<Fade
									direction='right'
									delay={800}
									cascade
									damping={1e-1}
									triggerOnce={true}>
									<p className='max-w-xl mx-auto subtitle xl:mx-0'>
										Professional photography services combine the classic
										knowledge of traditional photographic portraiture and
										contemporary style.
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
