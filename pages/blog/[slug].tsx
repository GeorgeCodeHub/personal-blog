import fs from "fs";
import path from "path";

import { marked } from "marked";
import hljs from "highlight.js";
import matter from "gray-matter";
import moment from "moment";

import { Button } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

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
		<div className="post-details-container">
			<div className="post-details-title-container">
				<div className="post-details-title">{title}</div>
				<div className="post-details-date">
					<EventIcon style={{ paddingRight: 5, fontSize: 31, color: "#4fbdba" }} />
					<span className="align-middle">Posted on {moment(new Date(date)).format("DD/MM/YYYY")}</span>
				</div>
			</div>

			<img className="post-details-image" src={cover_image} alt={title} />

			<div className="post-details-content mt-8">
				<div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
			</div>
			<Button className="post-details-button" variant="contained">
				<Link href="/">
					<span>RETURN TO MAIN PAGE</span>
				</Link>
			</Button>
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
