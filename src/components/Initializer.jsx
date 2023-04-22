import { getDCs, getLocalStorageMainDC } from "@/lib/dc";
import { getWorlds } from "@/lib/world";
import { setDCRedux, setDataCentersStore, setWorldsStore } from "@/store/ffxiv_store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Initializer() {
	const dispatch = useDispatch();
	useEffect(() => {
		getWorlds().then((worlds) => dispatch(setWorldsStore(worlds)));
        getDCs().then((data_centers) => {
            dispatch(setDataCentersStore(data_centers))
			getLocalStorageMainDC(data_centers).then(main_dc=>dispatch(setDCRedux(main_dc)))
		});
	}, [dispatch]);
	return <></>;
}
