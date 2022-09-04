import Head from "next/head";

import fs from "fs";
import path from "path";

import { PostCard, CategoriesView, PostWidget } from "../components";
import matter from "gray-matter";

import { sortByDate } from "../utils";

function Home({
	posts
}: {
	posts: {
		title: string;
		excerpt: string;
	}[];
}) {
	return (
		<div>
			<Head>
				<title>GeorgeCode Blog</title>
				<meta
					name="description"
					content="George's Karampelas personal blog containing articles about personal/professional projects and experiences."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<div>
					{posts.map((post, index) => (
						<PostCard key={index} post={post} />
					))}
				</div>
				<div>
					<div>
						<PostWidget />
						<CategoriesView />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

export async function getStaticProps() {
	// Get files form the posts dir
	const files = fs.readdirSync(path.join("posts"));

	const posts = files.map((filename) => {
		// Create slug
		const slug = filename.replace(".md", "");

		// Get frontmatter
		const readFile = fs.readFileSync(path.join("posts", filename), "utf-8");
		const { data: frontmatter } = matter(readFile);

		return {
			slug,
			frontmatter
		};
	});

	return {
		props: {
			posts: posts.sort(sortByDate)
		}
	};
}
