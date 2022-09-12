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

export interface projectType {
	id: number;
	title: string;
	description: string;
	images: string[];
	githubURL: string;
	technologies: string[];
}
