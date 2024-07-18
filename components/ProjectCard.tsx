import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Group, Link2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
	project: {
		image: string;
		category: string;
		name: string;
		position: string;
		description: string;
		link: string;
		codepen: string;
	};
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Card className='relative overflow-hidden group'>
			<CardHeader className='p-0'>
				{/* Image */}
				<div className='relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden'>
					<Image
						src={project.image}
						width={440}
						height={200}
						alt=''
						priority
						className={cn(
							'absolute transition-all shadow-2xl hover:scale-110',
							project.position
						)}
					/>

					{/* Link Button */}
					<div className='flex gap-x-4'>
						<Link
							href={project.link}
							className='bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all'>
							<Link2Icon />
						</Link>
						<Link
							href={project.codepen}
							className='bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all'>
							<Group />
						</Link>
					</div>
				</div>
			</CardHeader>
			<div className='h-full px-8 py-6'>
				<Badge className='absolute mb-2 text-sm font-medium uppercase top-4 left-5'>
					{project.category}
				</Badge>
				<h4 className='mb-1 h4'>{project.name}</h4>
				<p className='text-lg text-muted-foreground'>{project.description}</p>
			</div>
		</Card>
	);
};

export default ProjectCard;
