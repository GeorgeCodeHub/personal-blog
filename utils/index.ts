export const sortByDate = (
	a: { slug: string; frontmatter: { [key: string]: any } },
	b: { slug: string; frontmatter: { [key: string]: any } }
) => {
	return new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf();
};
