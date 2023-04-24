import { setMarketableItemsStore } from "@/store/ffxiv_store";
import {
	selectMainDC,
	setDataCenters,
	setMainDC,
} from "@/store/reducers/data_center_reducer";
import { setWorlds } from "@/store/reducers/world_reducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Initializer() {
	const dispatch = useDispatch();
	const main_dc = useSelector(selectMainDC);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		if (isLoading) {
			loadInitialData(dispatch, main_dc);
		}
	});

	useEffect(() => {
		if (isLoading == false) {
			const loader = document.getElementById("globalLoader");
			loader.remove();
		}
	}, [isLoading]);

	async function loadInitialData(dispatch_, dc_) {
		const data_centers = await axios("/json/data_centers.json");
		dispatch_(setDataCenters(data_centers.data));

		const worlds = await axios("/json/worlds.json");
		dispatch_(setWorlds(worlds.data));

		//if main dc not detected from redux persist, set first data center as main dc
		if (Object.keys(dc_).length == 0) {
			dispatch_(setMainDC(data_centers.data[0]));
		}

		const marketable_items = await axios("/json/marketable_items.json");
		dispatch_(setMarketableItemsStore(marketable_items.data));

		setLoading(false);
	}
	return <></>;
}
