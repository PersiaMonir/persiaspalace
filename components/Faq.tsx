'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Fade } from 'react-awesome-reveal';

const Faq = () => {
	return (
		<section>
			<div className='container mx-auto'>
				<div className='w-full pt-12 mb-6 xl:mb-24'>
					<Fade
						direction='up'
						delay={400}
						cascade
						damping={1e-1}
						triggerOnce={true}>
						<h2 className='mx-auto mb-12 text-center section-title'>
							Frequently Asked
						</h2>
					</Fade>

					<div>
						<Fade
							direction='up'
							delay={600}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							{/* Accordion */}
							<Accordion type='single' collapsible className='w-full'>
								<AccordionItem value='item-1'>
									<AccordionTrigger>
										<div className='ms-3'>
											01. What type of content can I expect on your OnlyFans?
										</div>
									</AccordionTrigger>
									<AccordionContent>
										You&apos;ll find a diverse range of exclusive content on my
										OnlyFans, including intimate videos, steamy
										behind-the-scenes footage, and interactive live streams
										where we can chat and connect in real time. I also share
										personalized messages and custom content tailored to your
										desires, ensuring you get a truly unique and engaging
										experience.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-2'>
									<AccordionTrigger>
										<div className='ms-3'>
											02. Can I meet you during your tours?
										</div>
									</AccordionTrigger>
									<AccordionContent>
										Absolutely! I love meeting my fans in person. During my
										tours, I offer special meet-and-greet sessions where we can
										spend some quality time together. Check out my tour dates to
										see when I&apos;ll be visiting your city, and make sure to
										book your spot early. These encounters are always a
										highlight for me, and I can&apos;t wait to create
										unforgettable memories with you.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-3'>
									<AccordionTrigger>
										<div className='ms-3'>
											03. How long have you been in the adult entertainment
											industry?
										</div>
									</AccordionTrigger>
									<AccordionContent>
										I&apos;ve been captivating fans and creating unforgettable
										content in the adult entertainment industry for over a
										decade. My journey started with a passion for expressing my
										sensuality and connecting with fans on a deeper level.
										Throughout the years, I&apos;ve enjoyed every moment of this
										exciting career, constantly evolving and exploring new ways
										to entertain and engage with my audience.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
