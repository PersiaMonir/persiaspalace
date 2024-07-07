'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	RiMenFill,
	RiBookmark3Fill,
	RiBodyScanFill,
	RiVideoFill,
} from 'react-icons/ri';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Socials from '@/components/Socials';
import HeroImg from '@/components/HeroImg';
import Badge from '@/components/Badge';

const Hero = () => {
	return (
		<section className='py-12 xl:py-24 h-[auto] bg-bottom'>
			<div className='container mx-auto'>
				<div className='flex justify-between gap-x-8'>
					{/* Left Side Content */}
					<div className='flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
						<Fade
							direction='up'
							delay={400}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
								Model
							</div>
						</Fade>

						<Fade
							direction='up'
							delay={600}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<h1 className='uppercase h1'>Let&apos;s make magic !</h1>
						</Fade>

						<Fade
							direction='up'
							delay={800}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<p className='subtitle max-w-[590px] mt-4 mx-auto xl:mx-0'>
								I’m your favorite mature, busty film star with a wild side and a
								love for adventure. Dive into my world of passion and
								excitement, where every moment is unforgettable.
							</p>
						</Fade>

						{/* Subscribe Button */}
						<Fade
							direction='up'
							delay={1000}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<div className='flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0'>
								<div className='flex w-full gap-x-4'>
									<label htmlFor='email-address' className='sr-only'>
										Email Address
									</label>
									<Input type='email' id='email' placeholder='Email' />
									<Link href='/contact'>
										<Button className='bg-black gap-x-2'>
											Subscribe <RiMenFill size={18} />
										</Button>
									</Link>
								</div>
							</div>
						</Fade>

						{/* Social Icons */}
						<Fade
							direction='up'
							delay={1200}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<Socials
								containerStyles='flex justify-center gap-x-6 mx-auto md:justify-start xl:mx-0'
								iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
							/>
						</Fade>
					</div>

					{/* Banner Image */}
					<Fade
						direction='right'
						delay={600}
						cascade
						damping={1e-1}
						triggerOnce={true}>
						<div className='relative hidden xl:flex'>
							{/* https://persiaspalace.com/images/slide1.jpg */}
							{/* /profile.jpg */}
							<HeroImg
								imgSrc='https://persiaspalace.com/images/slide1.jpg'
								containerStyles='w-[550px] h-[475px] bg-no-repeat relative bg-bottom'
							/>
						</div>
					</Fade>
				</div>

				{/* Badge Section */}
				<div className='py-24 sm:py-32'>
					<div className='px-6 mx-auto max-w-7xl lg:px-8'>
						<dl className='grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3'>
							<Fade
								direction='right'
								delay={800}
								cascade
								damping={1e-1}
								triggerOnce={true}>
								{/* Badge 1 */}
								<div className='flex flex-col items-center md:items-stretch max-w-xs mx-auto gap-y-4'>
									<dt className='text-base leading-7 text-muted-foreground'>
										Years of Experience
									</dt>
									<dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
										<Badge
											icon={<RiBookmark3Fill />}
											endCountNum={12}
											endCountText='+'
										/>
									</dd>
								</div>

								{/* Badge 2 */}
								<div className='flex flex-col items-center md:items-stretch max-w-xs mx-auto gap-y-4'>
									<dt className='text-base leading-7 text-muted-foreground'>
										Followers
									</dt>
									<dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
										<Badge
											icon={<RiBodyScanFill />}
											endCountNum={967}
											endCountText='k'
										/>
									</dd>
								</div>

								{/* Badge 3 */}
								<div className='flex flex-col items-center md:items-stretch max-w-xs mx-auto gap-y-4'>
									<dt className='text-base leading-7 text-muted-foreground'>
										Videos
									</dt>
									<dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
										<Badge
											icon={<RiVideoFill />}
											endCountNum={79}
											endCountText='+'
										/>
									</dd>
								</div>
							</Fade>
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
