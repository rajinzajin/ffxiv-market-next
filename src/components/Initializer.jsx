import { setMarketableItemsStore } from "@/store/ffxiv_store";
import {
	setDataCenters,
	setMainDC,
} from "@/store/reducers/data_center_reducer";
import { setWorlds } from "@/store/reducers/world_reducer";
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
		dispatch_(setDataCenters(data_centers.data));

		const worlds = await axios("/json/worlds.json");
		dispatch_(setWorlds(worlds.data));

		const main_dc = data_centers.data[0];
		dispatch_(setMainDC(main_dc));

		const marketable_items = await axios("/json/marketable_items.json");
		dispatch_(setMarketableItemsStore(marketable_items.data));

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
