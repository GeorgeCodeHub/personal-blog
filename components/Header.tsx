import React, { useContext } from "react";

import Link from "next/link";

const categories = [
	{ name: "About", slug: "about" },
	{ name: "Personal Page", slug: "Personal Page" },
	{ name: "Home", slug: "home" }
];

function Header() {
	return (
		<div>
			<div>
				<div>
					<Link href="/">
						<span>GeorgeCode Blog</span>
					</Link>
				</div>
				<div>
					{categories.map((category, index) => (
						<Link key={index} href={`/category/${category.slug}`}>
							<span>{category.name}</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Header;
