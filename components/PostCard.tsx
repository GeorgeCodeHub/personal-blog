import React from "react";

import moment from "moment";

import EventIcon from "@mui/icons-material/Event";

import Link from "next/link";
import Router from "next/router";

function PostCard({ post }: { post: any }) {
	const onCardClick = () => {
		Router.push(`/blog/${post.slug}`);
	};

	return (
		<div className="card" onClick={onCardClick}>
			<div className="card-body">
				<img src={post.frontmatter.cover_image} className="card-image" />
				<div className="card-title">{post.frontmatter.title}</div>
				<div className="card-date">
					<EventIcon style={{ paddingRight: 5, fontSize: 31, color: "#4fbdba" }} />
					<span>{moment(new Date(post.createdAt)).format("DD/MM/YYYY")}</span>
				</div>
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
