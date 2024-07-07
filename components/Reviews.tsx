'use client';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Card,
	CardHeader,
	CardDescription,
	CardTitle,
} from '@/components/ui/card';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const reviewsData = [
	{
		avatar: '/reviews/avatar-1.png',
		name: 'Jennifer',
		job: '2-Month Subscriber',
		review:
			'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.',
	},
	{
		avatar: '/reviews/avatar-2.png',
		name: 'Lopez Chris',
		job: '3-Month Subscriber',
		review:
			'You how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account, and expound',
	},
	{
		avatar: '/reviews/avatar-3.png',
		name: 'Hamilton',
		job: '6-Month Subscriber',
		review:
			'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.',
	},
	{
		avatar: '/reviews/avatar-4.png',
		name: 'Lucifer',
		job: '1-Month Subscriber',
		review:
			'You how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account, and expound',
	},
	{
		avatar: '/reviews/avatar-6.png',
		name: 'Stork Gem',
		job: '4-Month Subscriber',
		review:
			'You how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account, and expound',
	},
];

const Reviews = () => {
	return (
		<section className='mb-12 xl:mb-32'>
			<div className='container mx-auto'>
				<Fade
					direction='up'
					delay={400}
					cascade
					damping={1e-1}
					triggerOnce={true}>
					<h2 className='mx-auto mb-12 text-center section-title'>
						Hear from my fans
					</h2>
				</Fade>

				{/* Slider */}
				<Fade
					direction='up'
					delay={600}
					cascade
					damping={1e-1}
					triggerOnce={true}>
					<Swiper
						slidesPerView={1}
						breakpoints={{
							640: { slidesPerView: 2 },
							1400: { slidesPerView: 3 },
						}}
						spaceBetween={30}
						modules={[Pagination]}
						pagination={{
							clickable: true,
						}}
						className='h-[350px]'>
						{reviewsData.map((person, index) => (
							<SwiperSlide key={index}>
								<Card className='p-8 min-h-[300px] hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-300 cursor-pointer'>
									<CardHeader className='p-0 mb-3'>
										<div className='flex flex-col items-start gap-x-4'>
											{/* Avatar */}
											<Image
												src={person.avatar}
												width={70}
												height={70}
												alt=''
												priority
												className='mb-2'
											/>
											{/* Name */}
											<div className='flex flex-col'>
												<CardTitle>{person.name}</CardTitle>
												<p>{person.job}</p>
											</div>
										</div>
									</CardHeader>
									<CardDescription className='text-lg text-muted-foreground'>
										{person.review}
									</CardDescription>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				</Fade>
			</div>
		</section>
	);
};

export default Reviews;
