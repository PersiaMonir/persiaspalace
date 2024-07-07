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
									Need a Photographer?
								</h2>
							</Fade>

							<Fade
								direction='left'
								delay={600}
								cascade
								damping={1e-1}
								triggerOnce={true}>
								<p className='mt-4 text-lg leading-8 subtitle'>
									But I must explain to you how all this mistaken idea of
									denouncing pleasure and praising pain was born and I will give
									you a complete account of the system, and expound the actual
									teachings of the great explorer of the truth, the
									master-builder of human happiness.
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
										Weekly articles
									</dt>
									<dd className='mt-2 leading-7'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Impedit distinctio incidunt, id officiis
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
										Full Security
									</dt>
									<dd className='mt-2 leading-7'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Impedit distinctio incidunt, id officiis
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
