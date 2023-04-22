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
export function getWorld(world_list, id) {
	var filteredWorld = world_list.filter((world) => world["id"] === id);
	return filteredWorld.length > 0 ? filteredWorld[0] : null;
}