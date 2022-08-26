import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>GeorgeCode Blog</title>
				<meta
					name="description"
					content="George's Karampelas personal blog containing articles about personal/professional projects and experiences."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	);
};

export default Home;
