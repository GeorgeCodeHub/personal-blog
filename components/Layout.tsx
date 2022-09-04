import React from "react";
import Header from "./Header";

function Layout({ children }: { children: JSX.Element }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default Layout;