import Head from "next/head";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Typography } from "@mui/material";

import { PostCard } from "../components";

import { sortByDate } from "../utils";
import { postType } from "../utils/types";

function Home({ posts, mostRecentPosts }: { posts: postType[]; mostRecentPosts: postType[] }) {
	return (
		<>
			<Head>
				<title>Rocket Code Blog</title>
				<meta
					name="description"
					content="George's Karampelas personal blog containing articles about personal/professional projects and experiences."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Typography
				style={{ marginTop: "1.5em", fontWeight: "lighter !important", letterSpacing: "1rem !important" }}
				variant="h2"
				gutterBottom
			>
				CAPTAIN'S LOG
			</Typography>

			<div className="cards-container">
				{posts.map((post, index) => (
					<PostCard key={index} post={post} />
				))}
			</div>
		</>
	);
}

export default Home;

export async function getStaticProps() {
	// Get files form the posts dir
	const files = fs.readdirSync(path.join("posts"));

	const posts = files
		.map((filename) => {
			// Create slug
			const slug = filename.replace(".md", "");

			// Get frontmatter
			const readFile = fs.readFileSync(path.join("posts", filename), "utf-8");
			const { data: frontmatter } = matter(readFile);

			return {
				slug,
				frontmatter
			};
		})
		.sort(sortByDate);

	const mostRecentPosts = posts.slice(0, 5);

	return {
		props: {
			posts: posts,
			mostRecentPosts: mostRecentPosts
		}
	};
}
