import axios from "axios";
import localforage from "localforage";
export async function getDCs() {
	var data_centers = await localforage.getItem("data_centers");
	if (data_centers == null) {
        console.log("GETTING FROM API")
		const res = await axios("/api/datacenters");
		data_centers = res.data;
        await localforage.setItem("data_centers", data_centers);
	}
	return data_centers;
}
