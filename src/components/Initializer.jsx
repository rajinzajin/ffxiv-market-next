import { getDCs, getLocalStorageMainDC } from "@/lib/dc";
import { getWorlds } from "@/lib/world";
import {
	setDCRedux,
	setDataCentersStore,
	setWorldsStore,
} from "@/store/ffxiv_store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Initializer() {
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		getWorlds().then((worlds) => dispatch(setWorldsStore(worlds)));
		getDCs().then((data_centers) => {
			dispatch(setDataCentersStore(data_centers));
			getLocalStorageMainDC(data_centers).then((main_dc) => {
				dispatch(setDCRedux(main_dc));
				setLoading(false);
			});
		});
	}, [dispatch]);

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
