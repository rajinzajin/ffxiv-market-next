import axios from "axios";
import localforage from "localforage";
export async function getWorlds() {
	var worlds = await localforage.getItem("worlds");
	if (worlds == null) {
		const res = await axios("/api/worlds");
		worlds = res.data;
        await localforage.setItem("worlds", worlds);
	}
	return worlds;
}