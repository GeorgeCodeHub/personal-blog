export const baseURL = "https://georgecodehub-portfolio-server.herokuapp.com";

export const projectFilters = [
	"All",
	"C#",
	"Firebase",
	"Javascript",
	"PostgreSQL",
	"Python",
	"ReactJS",
	"Tensorflow",
	"Typescript",
	"Unity3D"
];

export const sortByDate = (
	a: { slug: string; frontmatter: { [key: string]: any } },
	b: { slug: string; frontmatter: { [key: string]: any } }
) => {
	return new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf();
};
