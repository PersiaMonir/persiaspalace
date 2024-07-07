'use client';

import { Button } from '@/components/ui/button';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Fade } from 'react-awesome-reveal';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';

const includedFeatures = [
	'Private forum access',
	'Member Resources',
	'Direct messaging with me',
	'Cancel anytime',
];

const Pricing = () => {
	const { toast } = useToast();

	return (
		<section className='min-h-screen pt-12'>
			<div className='container mx-auto'>
				<Fade
					direction='up'
					delay={400}
					cascade
					damping={1e-1}
					triggerOnce={true}>
					<h2 className='mx-auto mb-8 text-center section-title xl:mb-16'>
						My Pricing
					</h2>
				</Fade>

				<div className='max-w-2xl mx-auto sm:text-center'>
					<Fade
						direction='up'
						delay={600}
						cascade
						damping={1e-1}
						triggerOnce={true}>
						<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
							Moments that last a lifetime
						</h2>
					</Fade>

					<Fade
						direction='up'
						delay={800}
						cascade
						damping={1e-1}
						triggerOnce={true}>
						<p className='mt-6 text-lg leading-8'>
							Create unforgettable experiences and celebrate the magic with
							exclusive content and intimate interactions on my OnlyFans.
						</p>
					</Fade>
				</div>

				{/* Pricing Data */}
				<Fade
					direction='up'
					delay={1000}
					cascade
					damping={1e-1}
					triggerOnce={true}>
					<div className='max-w-2xl mx-auto mt-16 ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
						{/* Left Section */}
						<div className='p-8 sm:p-10 lg:flex-auto'>
							<h3 className='text-2xl font-bold tracking-tight'>
								1-Month Membership
							</h3>
							<p className='mt-6 text-base leading-7'>
								Create unforgettable experiences and celebrate the magic with
								exclusive content and intimate interactions on my OnlyFans.
							</p>

							<div className='flex items-center mt-10 gap-x-4'>
								<h4 className='flex-none text-sm font-semibold leading-6 text-primary'>
									What&apos;s included
								</h4>
								<div className='flex-auto h-px bg-gray-100'></div>
							</div>

							<ul
								role='list'
								className='grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
								{includedFeatures.map(feature => (
									<li
										key={feature}
										className='flex text-muted-foreground gap-x-3'>
										<CheckIcon
											className='flex-none w-5 h-6 text-primary'
											aria-hidden='true'
										/>
										{feature}
									</li>
								))}
							</ul>
						</div>

						{/* Right Section */}
						<div className='p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
							<div className='py-10 text-center bg-tertiary rounded-2xl ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
								<div className='max-w-xs px-8 mx-auto'>
									<p className='text-base font-semibold'>
										Pay once, own it for 31 days
									</p>
									<p className='flex items-baseline justify-center mt-6 gap-x-2'>
										<span className='text-5xl font-bold tracking-tight'>
											$4.20
										</span>
										<span className='text-sm font-semibold leading-6 tracking-wide'>
											USD
										</span>
									</p>

									<Link href='https://onlyfans.com/persiamonir'>
										<Button className='mt-3 gap-x-2'>Purchase</Button>
									</Link>

									<p className='mt-6 text-xs leading-5'>
										Invoices and receipts available for easy expense tracking.
									</p>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default Pricing;
