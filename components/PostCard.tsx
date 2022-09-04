import React from "react";

import moment from "moment";

import Link from "next/link";
import Image from "next/image";

function PostCard({ post }: { post: any }) {
	return (
		<div>
			<div>
				<img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
			</div>
			<h1>
				<Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
			</h1>

			<div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 inline mr-2 text-pink-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<span className="align-middle">{moment(post.createdAt).format("MMM DD, YYYY")}</span>
				</div>
			</div>
			<p>{post.frontmatter.excerpt}</p>
			<div>
				<Link href={`/blog/${post.slug}`}>
					<span>Continue Reading</span>
				</Link>
			</div>
		</div>
	);
}

export default PostCard;
