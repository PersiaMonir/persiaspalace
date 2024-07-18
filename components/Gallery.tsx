'use client';

import { Fade } from 'react-awesome-reveal';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
	{
		image: '/work/angelica-raven.jpg',
		category: 'Models',
		name: 'Angelica Raven',
		position: 'top-0',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/kimora-klein.jpg',
		category: 'Models',
		name: 'Kimora Klein',
		position: 'top-0',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/jessie-palmer.jpg',
		category: 'Models',
		name: 'Jessie Palmer',
		position: '-top-32',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/rachel-steele.jpg',
		category: 'Models',
		name: 'Rachel Steele',
		position: '-top-12',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
];

const Gallery = () => {
	return (
		<section className='relative mb-12 xl:mb-48'>
			<div className='container mx-auto'>
				<Fade
					direction='up'
					delay={400}
					cascade
					damping={1e-1}
					triggerOnce={true}>
					<h2 className='mx-auto mb-8 text-center section-title xl:mb-16'>
						My Friends
					</h2>
				</Fade>
				<div className='grid grid-cols-1 gap-4 text-lg xl:mt-8 lg:grid-cols-3'>
					<Fade
						direction='up'
						delay={600}
						cascade
						damping={1e-1}
						triggerOnce={true}>
						{projectData.map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</Fade>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
