import dc_names from "@/data/data_centers.json";

export default async function handler(req, res) {
	res.status(200).json(dc_names);
}
