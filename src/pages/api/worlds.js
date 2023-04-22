import world_names from "@/data/worlds.json";

export default async function handler(req, res) {
	res.status(200).json(world_names);
}
