import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { Provider } from "react-redux";
import SideBar from "@/components/SideBar";
import Initializer from "@/components/Initializer";
import Footer from "@/components/Footer";
import { store } from "@/store/ffxiv_store";
import Head from "next/head";
export default function App({ Component, pageProps }) {
	useEffect(() => {}, []);
	return (
		<>
			<Head>
				<title>XIVMarket+</title>
			</Head>
			<Provider store={store}>
				<Initializer />
				<NextNProgress color="#71bfff" />
				<SideBar />
				<div className="sm:ml-[25rem] px-6 py-8 min-h-[100vh]">
					<div className="min-h-[45rem]">
						<Component {...pageProps} />
					</div>
					<Footer />
				</div>
			</Provider>
		</>
	);
}
