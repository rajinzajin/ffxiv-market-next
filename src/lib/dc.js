import axios from "axios";
import localforage from "localforage";

export async function getDCs() {
	var data_centers = await localforage.getItem("data_centers");
	if (data_centers == null) {
		const res = await axios("/api/datacenters");
		data_centers = res.data;
		await localforage.setItem("data_centers", data_centers);
	}
	return data_centers;
}

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
