'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Fade } from 'react-awesome-reveal';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
	{
		image: '/work/3.png',
		category: 'portraits',
		name: 'Portrait: Macro Allian',
		description: 'Shoot Date: 08/01/2024',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/9.png',
		category: 'portraits',
		name: 'Portrait: Mark Adam',
		description: 'Shoot Date: 11/01/2017',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/2.png',
		category: 'Products',
		name: 'Product: Cosmetics',
		description: 'Shoot Date: 14/01/2018',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/1.png',
		category: 'portraits',
		name: 'Portrait: Lucy Aln',
		description: 'Shoot Date: 16/07/2023',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/8.png',
		category: 'fashion',
		name: 'Fashion: Susee',
		description: 'Shoot Date: 28/07/2024',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/4.png',
		category: 'Products',
		name: 'Canteen Website',
		description: 'Shoot Date: 09/03/2024',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/5.png',
		category: 'portraits',
		name: 'Portrait: Elsa Liv',
		description: 'Shoot Date: 09/03/2024',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/11.png',
		category: 'fashion',
		name: 'Fashion: Adam',
		description: 'Shoot Date: 13/02/2021',
		link: '/',
		codepen: '/',
	},
];

const uniqueCategories = [
	'all projects',
	...Array.from(new Set(projectData.map(item => item.category))),
];

const Portfolio = () => {
	const [categories, setCategories] = useState<string[]>(uniqueCategories);
	const [category, setCategory] = useState<string>('all projects');

	const filteredProjects = projectData.filter(project => {
		return category === 'all projects'
			? project
			: project.category === category;
	});

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
						My Portfolio
					</h2>
				</Fade>

				{/* Tabs */}
				<Tabs defaultValue={category} className='mb-24 xl:mb-48'>
					<Fade
						direction='up'
						delay={600}
						cascade
						damping={1e-1}
						triggerOnce={true}>
						<TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none'>
							{categories.map((category, index) => (
								<TabsTrigger
									key={index}
									value={category}
									onClick={() => setCategory(category)}
									className='capitalize w-[162px] md:w-auto'>
									{category}
								</TabsTrigger>
							))}
						</TabsList>
					</Fade>

					{/* Tabs Content */}
					<div className='grid grid-cols-1 text-lg xl:mt-8 lg:grid-cols-3'>
						<Fade
							direction='up'
							delay={800}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							{filteredProjects.map((project, index) => (
								<TabsContent key={index} value={category}>
									<ProjectCard project={project} />
								</TabsContent>
							))}
						</Fade>
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default Portfolio;
