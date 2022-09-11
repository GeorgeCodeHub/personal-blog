import React from "react";

import moment from "moment";

import EventIcon from "@mui/icons-material/Event";

import Link from "next/link";
import Image from "next/image";

function PostCard({ post }: { post: any }) {
	return (
		<div className="card">
			<div className="card-date">
				<EventIcon style={{ paddingRight: 5, fontSize: 31, color: "#4fbdba" }} />
				<span>{moment(post.createdAt).format("DD/MM/YYYY")}</span>
			</div>
			<div className="card-body">
				<img src={post.frontmatter.cover_image} className="card-image" />
				<div className="card-title">{post.frontmatter.title}</div>
				<p className="card-description">{post.frontmatter.excerpt}</p>
			</div>
			<button className="card-button">
				<Link href={`/blog/${post.slug}`}>
					<span>READ MORE</span>
				</Link>
			</button>
		</div>
	);
}

export default PostCard;
