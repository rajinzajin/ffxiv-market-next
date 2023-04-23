import { getLocalStorageMainDC } from "@/lib/dc";
import {
	setDCRedux,
	setDataCentersStore,
	setMarketableItemsStore,
	setWorldsStore,
} from "@/store/ffxiv_store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Initializer() {
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		loadInitialData(dispatch);
	}, [dispatch]);

	async function loadInitialData(dispatch_) {
		setLoading(true);

		const data_centers = await axios("/json/data_centers.json");
		dispatch_(setDataCentersStore(data_centers.data));

		const worlds = await axios("/json/worlds.json");
		dispatch_(setWorldsStore(worlds.data));

		const main_dc = await getLocalStorageMainDC(data_centers.data);
		dispatch_(setDCRedux(main_dc));

		const marketable_items = await axios("/json/marketable_items.json")
		dispatch_(setMarketableItemsStore(marketable_items.data))

		setLoading(false);
	}

	if (isLoading)
		return (
			<div className="fixed z-[50] w-full h-full bg-secondary">
				<div className="fixed w-full h-full bg-custom-ffxiv">&nbsp;</div>
				<div className="fixed w-full h-full flex items-center justify-center">
					<h1 className="font-bold text-xl">LOADING . . .</h1>
				</div>
			</div>
		);
	else return <></>;
}
