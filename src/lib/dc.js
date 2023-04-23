import axios from "axios";
import localforage from "localforage";

export async function getLocalStorageMainDC(data_centers) {
	var main_dc = await localforage.getItem("main_dc");
	if (main_dc != null) return main_dc;

	main_dc = data_centers[0];
	await localforage.setItem("main_dc", main_dc);
	return main_dc;
}

export async function setMainDC(name){
	await localforage.setItem("main_dc", name);
}
