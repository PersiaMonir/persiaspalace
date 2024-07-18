'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HandRaisedIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon } from 'lucide-react';
import { RiMenFill } from 'react-icons/ri';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const Newsletter = () => {
	return (
		<section>
			<div className='relative py-16 overflow-hidden bg-tertiary sm:py-24 lg:py-32'>
				<div className='px-6 mx-auto max-w-7xl lg:px-8'>
					<div className='grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2'>
						<div className='max-w-xl lg:max-w-lg'>
							<Fade
								direction='left'
								delay={400}
								cascade
								damping={1e-1}
								triggerOnce={true}>
								<h2 className='text-3xl font-bold tracking-tight section-title sm:text-4xl'>
									Need a Model?
								</h2>
							</Fade>

							<Fade
								direction='left'
								delay={600}
								cascade
								damping={1e-1}
								triggerOnce={true}>
								<p className='mt-4 text-lg leading-8 subtitle'>
									Looking for a dynamic and experienced model to bring your
									vision to life? Persia Monir is here to make every moment
									unforgettable. Whether you need a model for photoshoots,
									events, or personal projects, Persia&apos;s experience and
									passion ensure a memorable experience.
								</p>
							</Fade>

							<Fade
								direction='left'
								delay={800}
								cascade
								damping={1e-1}
								triggerOnce={true}>
								<div className='flex max-w-md mt-6 gap-x-4'>
									<Input
										id='email-address'
										name='email'
										type='email'
										autoComplete='email'
										placeholder='Enter your email'
										required
									/>
									<Link href='/contact'>
										<Button>
											Subscribe <RiMenFill size={18} />
										</Button>
									</Link>
								</div>
							</Fade>
						</div>

						<dl className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
							<Fade
								direction='right'
								delay={400}
								cascade
								damping={1e-1}
								triggerOnce={true}>
								<div className='flex flex-col items-start'>
									<div className='p-2 rounded-full bg-primary ring-1 ring-white/10'>
										<CalendarDaysIcon className='w-6 h-6 text-white' />
									</div>

									<dt className='mt-4 font-semibold text-muted-foreground'>
										Weekly posts
									</dt>
									<dd className='mt-2 leading-7'>
										Get weekly updates from Persia Monir with exclusive looks
										and special content just for subscribers.
									</dd>
								</div>
							</Fade>

							<Fade
								direction='right'
								delay={600}
								cascade
								damping={1e-1}
								triggerOnce={true}>
								<div className='flex flex-col items-start'>
									<div className='p-2 rounded-full bg-primary ring-1 ring-white/10'>
										<HandRaisedIcon className='w-6 h-6 text-white' />
									</div>

									<dt className='mt-4 font-semibold text-muted-foreground'>
										Full Privacy
									</dt>
									<dd className='mt-2 leading-7'>
										We value and respect your privacy. Enjoy full
										confidentiality with all interactions and content shared.
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

export default Newsletter;
