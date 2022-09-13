import React from "react";

import Header from "./Header";

import Background3D from "./Background3D";

function Layout({ children }: { children: JSX.Element }) {
	return (
		<div className="layout-container">
			<Header />
			<Background3D />
			{children}
		</div>
	);
}

export default Layout;
