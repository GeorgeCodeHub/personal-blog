import { useEffect } from "react";

import type { AppProps } from "next/app";
import { Layout } from "../components";

import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";

import Palette from "../utils/Palette";

import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

import "../styles/Header.scss";
import "../styles/PostCard.scss";

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function createEmotionCache() {
	return createCache({ key: "css", prepend: true });
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}
	}, []);

	return (
		<CacheProvider value={emotionCache}>
			<Palette>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Palette>
		</CacheProvider>
	);
}

export default MyApp;
