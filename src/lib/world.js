export function getWorld(world_list, id) {
	var filteredWorld = world_list.filter((world) => world["id"] === id);
	return filteredWorld.length > 0 ? filteredWorld[0] : null;
}