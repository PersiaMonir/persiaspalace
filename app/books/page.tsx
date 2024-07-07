'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Fade } from 'react-awesome-reveal';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
	{
		image: '/work/3.png',
		category: 'fiction',
		name: 'Fiction: Book 1',
		description: 'Price: $20.00',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/9.png',
		category: 'fiction',
		name: 'Fiction: Book 2',
		description: 'Price: $25.00',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/2.png',
		category: 'Non-Fiction',
		name: 'Non-Fiction: Book 3',
		description: 'Price: $30.00',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/1.png',
		category: 'fiction',
		name: 'Fiction: Book 4',
		description: 'Price: $15.00',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/8.png',
		category: 'Biographies',
		name: 'Biography: Book 5',
		description: 'Price: $35.00',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/4.png',
		category: 'Non-Fiction',
		name: 'Non-Fiction: Book 6',
		description: 'Price: $40.00',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/5.png',
		category: 'fiction',
		name: 'Fiction: Book 7',
		description: 'Price: $45.00',
		link: '/',
		codepen: '/',
	},
	{
		image: '/work/11.png',
		category: 'Biographies',
		name: 'Biography: Book 8',
		description: 'Price: $50.00',
		link: '/',
		codepen: '/',
	},
];

const uniqueCategories = [
	'all books',
	...Array.from(new Set(projectData.map(item => item.category))),
];

const Portfolio = () => {
	const [categories, setCategories] = useState<string[]>(uniqueCategories);
	const [category, setCategory] = useState<string>('all books');

	const filteredProjects = projectData.filter(project => {
		return category === 'all books' ? project : project.category === category;
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
						My Books
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
						{filteredProjects.map((project, index) => (
							<TabsContent key={index} value={category}>
								<ProjectCard project={project} />
							</TabsContent>
						))}
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default Portfolio;
