import Link from 'next/link';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import type { Post } from '@/lib/dto/post.dto';

type BlogCardProps = {
	post: Post;
	href: string;
};

const BlogCard = ({ post, href }: BlogCardProps) => {
	return (
		<Link href={href} className="block h-full">
			<Card className="h-full shadow">
				<div className={`h-36 w-full`} />
				<CardHeader>
					<CardTitle className="line-clamp-2 text-sm">
						{post.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="line-clamp-2 text-xs text-muted-foreground">
						{post.excerpt}
					</p>
				</CardContent>
				<CardFooter className="gap-3 text-xs text-muted-foreground">
					<span className="flex items-center gap-1">
						<CalendarIcon className="size-3" />
						{post.date}
					</span>
					<span className="flex items-center gap-1">
						<ClockIcon className="size-3" />
						{post.readTime}
					</span>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default BlogCard;
