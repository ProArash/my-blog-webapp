import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { appRoutes } from '@/lib/app-routes';

type BlogPostPageProps = {
	params: Promise<{ id: string; slug: string }>;
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
	const { id, slug } = await params;

	return (
		<div className="mx-auto flex max-w-2xl flex-col gap-10 py-16">
			{/* Back */}
			<Button variant="ghost" size="sm" className="w-fit -ml-2" asChild>
				<Link
					href={appRoutes.blogs}
					className="flex items-center gap-1.5 text-muted-foreground">
					<ArrowLeftIcon className="size-3.5" />
					All posts
				</Link>
			</Button>

			{/* Header */}
			<header className="flex flex-col gap-4">
				<Badge variant="secondary" className="w-fit capitalize">
					{id}
				</Badge>
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
					Post title for slug {slug}
				</h1>
				<p className="text-base text-muted-foreground">
					A short excerpt or subtitle for the blog post goes here.
				</p>
				<div className="flex items-center gap-4 text-sm text-muted-foreground">
					<span className="flex items-center gap-1.5">
						<CalendarIcon className="size-3.5" />
						Jun 20, 2026
					</span>
					<span className="flex items-center gap-1.5">
						<ClockIcon className="size-3.5" />
						6 min read
					</span>
				</div>
			</header>

			<Separator />

			{/* Body */}
			<article className="prose prose-neutral dark:prose-invert max-w-none">
				<p>
					This is the prototype layout for a blog post. The content
					will be fetched from the API using the post{' '}
					<code>id</code> and <code>slug</code> from the route
					params.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<h2>Section heading</h2>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</article>
		</div>
	);
};

export default BlogPostPage;
