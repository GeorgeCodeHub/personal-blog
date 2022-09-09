import React from "react";

import { postType } from "../utils/types";

function PostWidget({ mostRecentPosts }: { mostRecentPosts: postType[] }) {
	return (
		<div>
			{mostRecentPosts.map((post, index) => (
				<p key={index}>{post.frontmatter.title}</p>
			))}
		</div>
	);
}

export default PostWidget;
