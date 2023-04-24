import "@/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { Provider } from "react-redux";
import SideBar from "@/components/SideBar";
import Initializer from "@/components/Initializer";
import Footer from "@/components/Footer";
import { PersistGate } from "redux-persist/integration/react";
import { store, persiststore } from "@/store/ffxiv_store";
export default function App({ Component, pageProps }) {
	useEffect(() => {}, []);
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persiststore}>
				<Initializer />
				<NextNProgress color="#71bfff" />
				<SideBar />
				<div className="sm:ml-[25rem] px-6 py-8 min-h-[100vh]">
					<div className="min-h-[45rem]">
						<Component {...pageProps} />
					</div>
					<Footer />
				</div>
				</PersistGate>
			</Provider>
		</>
	);
}
