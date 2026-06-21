import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { appRoutes } from '@/lib/app-routes';
import type { Category } from '@/lib/dto/category.dto';
import BlogCard from '@/app/blog/_components/blog-card';

type CategoryCarouselProps = {
	category: Category;
	icon: React.ElementType;
	postHref: (slug: string) => string;
};

const CategoryCarousel = ({
	category,
	icon: Icon,
	postHref,
}: CategoryCarouselProps) => {
	return (
		<section className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Icon className="size-4 text-muted-foreground" />
					<h2 className="text-lg font-medium">{category.label}</h2>
				</div>
				<Button variant="ghost" size="sm" asChild>
					<Link
						href={appRoutes.blogs}
						className="flex items-center gap-1 text-sm text-muted-foreground">
						See all
						<ArrowRightIcon className="size-3.5" />
					</Link>
				</Button>
			</div>

			<div className="px-10">
				<Carousel opts={{ align: 'start', dragFree: true }}>
					<CarouselContent>
						{category.posts.map((post) => (
							<CarouselItem
								key={post.slug}
								className="basis-72 sm:basis-80">
								<BlogCard
									post={post}
									href={postHref(post.slug)}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
};

export default CategoryCarousel;
