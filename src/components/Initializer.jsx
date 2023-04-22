import { getWorlds } from "@/lib/world";
import { setWorldsStore } from "@/store/ffxiv_store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Initializer() {
	const dispatch = useDispatch();
	useEffect(() => {
		getWorlds().then((worlds) => dispatch(setWorldsStore(worlds)));
	}, [dispatch]);
	return <></>;
}
