'use client';

import { Fade } from 'react-awesome-reveal';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
	{
		image: '/work/3.png',
		category: 'Portraits',
		name: 'February 11, 2024',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/5.png',
		category: 'Models',
		name: 'April 22, 2023',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/6.png',
		category: 'Places',
		name: 'Nov 07, 2023',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/7.png',
		category: 'Corporate',
		name: 'Jan 14, 2021',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/8.png',
		category: 'fashion',
		name: 'Jan 31, 2021',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/9.png',
		category: 'fashion',
		name: 'Aug 31, 2021',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/10.png',
		category: 'Corporate',
		name: 'Mar 11, 2013',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/3.png',
		category: 'Models',
		name: 'Oct 23, 2019',
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
						My Gallery
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