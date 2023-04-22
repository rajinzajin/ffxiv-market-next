import { getItemName } from "@/lib/item_utils";
import { getWorld } from "@/lib/world";
import { useEffect, useState } from "react";

export default function MarketEventRow({ m_event }) {
	const [world_name, setWorldName] = useState("");
	useEffect(() => {
		getWorld(m_event.world).then((world) => setWorldName(world.name));
	}, [m_event.world]);
	return (
		<tr className="bg-primary hover:bg-item cursor-pointer">
			<td className="px-6 py-4 font-[100]">
				<span className="text-yellow-300">{m_event.listings.length}</span>
				&nbsp;listings of&nbsp;
				<span className="text-[#71bfff]">{getItemName(m_event.item)}</span>
				&nbsp;added to&nbsp;
				<span className="text-[#2af868]">{world_name}</span>
			</td>
		</tr>
	);
}
