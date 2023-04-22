import data_centers from "@/data/data_centers.json";

export default async function handler(req, res) {
	res.status(200).json(data_centers);
}
