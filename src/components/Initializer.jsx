import { setMarketableItemsStore } from "@/store/ffxiv_store";
import {
	setDataCenters,
	setMainDC,
} from "@/store/reducers/data_center_reducer";
import { setWorlds } from "@/store/reducers/world_reducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAssetPath } from "@/lib/env";
export default function Initializer() {
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (isLoading) {
			loadInitialData(dispatch);
		}
	});

	useEffect(() => {
		if (isLoading == false) {
			const loader = document.getElementById("globalLoader");
			loader.remove();
		}
	}, [isLoading]);

	async function loadInitialData(dispatch_) {
		const data_centers = await axios(`${getAssetPath()}json/data_centers.json`);
		dispatch_(setDataCenters(data_centers.data));

		const worlds = await axios(`${getAssetPath()}json/worlds.json`);
		dispatch_(setWorlds(worlds.data));

		dispatch_(setMainDC(data_centers.data[0]));

		const marketable_items = await axios(
			`${getAssetPath()}json/marketable_items.json`
		);
		dispatch_(setMarketableItemsStore(marketable_items.data));

		setLoading(false);
	}
	return <></>;
}
