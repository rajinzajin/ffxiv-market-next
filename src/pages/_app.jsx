import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import localforage from "localforage";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "@/store/ffxiv_store";
import SideBar from "@/components/SideBar";
import Initializer from "@/components/Initializer";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
	useEffect(() => {
		localforage.config({
			driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
			name: "xivplus",
			version: 1.0,
			storeName: "xivplus", // Should be alphanumeric, with underscores.
			description: "xiv market plus localstorage database",
		});
	}, []);

	return (
		<>
			<Provider store={store}>
				<Initializer />
				<NextNProgress color="#71bfff" />
				<SideBar />
				<div className="sm:ml-[25rem] px-6 py-8 bg-custom-ffxiv min-h-[100vh]">
					<Component {...pageProps} />
					<Footer/>
				</div>
			</Provider>
		</>
	);
}
