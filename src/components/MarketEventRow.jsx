import { getItemName } from "@/lib/item_utils";
import { getWorld } from "@/lib/world";
import { setSelectedMarketEvent } from "@/store/ffxiv_store";
import { selectWorlds } from "@/store/reducers/world_reducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MarketEventRow({ m_event }) {
	const worlds = useSelector(selectWorlds)
	const dispatch = useDispatch()
	const [world_name, setWorldName] = useState("");
	useEffect(() => {
		const world = getWorld(worlds, m_event.world)
		setWorldName(world.name)
	}, [m_event.world, worlds]);
	return (
		<tr onClick={()=>{dispatch(setSelectedMarketEvent(m_event))}} className="bg-primary hover:bg-item cursor-pointer">
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
