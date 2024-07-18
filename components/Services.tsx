'use client';

import { BookCopy } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const servicesData = [
	{
		icon: <BookCopy size={48} strokeWidth={1} />,
		title: 'The Book of Johns',
		link: 'https://www.amazon.ca/Book-Johns-Persia-Monir/dp/0988629704',
		description:
			'A dive into the scandalous world of Persia Monir, where each "John" she met as an exotic dancer reveals life lessons, romance, and unexpected twists.',
	},
	{
		icon: <BookCopy size={48} strokeWidth={1} />,
		title: 'Book 2',
		description:
			'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
	},
	{
		icon: <BookCopy size={48} strokeWidth={1} />,
		title: 'Book 3',
		description:
			'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
	},
];

const Services = () => {
	return (
		<section className='mb-12 xl:mb-36'>
			<div className='container mx-auto'>
				<Fade
					direction='up'
					delay={400}
					cascade
					damping={1e-1}
					triggerOnce={true}>
					<h2 className='mx-auto mb-6 text-center section-title xl:mb-24'>
						My Books
					</h2>
				</Fade>

				{/* Category Items */}
				<div className='grid justify-center xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8'>
					<Fade
						direction='up'
						delay={600}
						cascade
						damping={1e-1}
						triggerOnce={true}>
						{servicesData.map((item, index) => (
							<Link key={index} href={item.link ?? '/'} target='_blank'>
								<Card className='relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700'>
									<CardHeader className='text-primary'>
										<div className='w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6'>
											{item.icon}
										</div>
									</CardHeader>
									<CardContent className='text-center'>
										<CardTitle className='mb-4'>{item.title}</CardTitle>
										<CardDescription className='text-lg'>
											{item.description}
										</CardDescription>
									</CardContent>
								</Card>
							</Link>
						))}
					</Fade>
				</div>
			</div>
		</section>
	);
};

export default Services;
