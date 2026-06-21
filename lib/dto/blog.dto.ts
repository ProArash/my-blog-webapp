export type CreateBlogDto = {
	title: string;
	slug: string;
	description: string;
	canonical_url?: string;
	status?: 'draft' | 'published' | 'archived';
	featured_image_id?: number;
	mediaIds?: number[];
};

export type Blog = {
	id: number;
	slug: string;
	title: string;
	status: string;
	published_at: string;
	updatedAt: string;
	featured_image: {
		title: string;
		url: string;
		disable: boolean;
	};
};
