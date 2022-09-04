import fs from "fs";
import path from "path";

import { marked } from "marked";
import hljs from "highlight.js";
import matter from "gray-matter";
import moment from "moment";

import Link from "next/link";

import "highlight.js/styles/base16/edge-dark.css";

// import "highlight.js/styles/stackoverflow-dark.css";

marked.setOptions({
	langPrefix: "hljs language-",
	highlight: function (code, lang) {
		return hljs.highlightAuto(code, [lang]).value;
	}
});

export default function PostPage({
	frontmatter: { title, date, cover_image },
	slug,
	content
}: {
	frontmatter: { title: string; date: string; cover_image: string };
	slug: string;
	content: string;
}) {
	return (
		<div>
			<Link href="/">
				<a className="btn btn-back">Go Back</a>
			</Link>
			<div>
				<img src={cover_image} alt="image" />
			</div>

			<h1>{title}</h1>
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				<span className="align-middle">Posted on {moment(new Date(date)).format("MMM DD, YYYY")}</span>
			</div>

			<div className="mt-8">
				<div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", "")
		}
	}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
	const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content
		}
	};
}
