export interface postType {
	frontmatter: {
		cover_image: string;
		date: string;
		categories: string[];
		excerpt: string;
		title: string;
	};
	slug: string;
}
