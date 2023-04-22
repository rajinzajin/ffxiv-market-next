import React, { useEffect, useState } from "react";
import { BSON } from "bson";
import { Provider, useSelector } from "react-redux";
import store, { selectDCRedux } from "@/store/ffxiv_store";
import { getItemName } from "@/lib/item_utils";
import { getWorld } from "@/lib/world";
import MarketEventRow from "./MarketEventRow";

export default function MarketEventsWrapper() {
	return (
		<Provider store={store}>
			<MarketEvents />
		</Provider>
	);
}
export function MarketEvents() {
	const main_dc = useSelector(selectDCRedux);
	const addr = "wss://universalis.app/api/ws";
	const [marketEvents, setMarketEvents] = useState([]);
	useEffect(() => {
		if (main_dc == null) return;

		const socket = new WebSocket(addr);
		socket.onopen = function () {
			main_dc.worlds.forEach((world_id) => {
				socket.send(
					BSON.serialize({
						event: "subscribe",
						channel: `listings/add{world=${world_id}}`,
					})
				);
			});
		};

		socket.onmessage = function (event) {
			var reader = new FileReader();
			reader.onload = function () {
				var uint8Array = new Uint8Array(this.result);
				var bsonData = BSON.deserialize(uint8Array);
				setMarketEvents((prev_m_events) => {
					var new_m_events = [...prev_m_events, bsonData];
					if (new_m_events.length > 9) {
						new_m_events.shift();
					}
					return new_m_events;
				});
			};
			reader.readAsArrayBuffer(event.data);
		};

		return () => {
			socket.close();
		};
	}, [main_dc]);

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg h-full">
			<table className="w-full text-sm text-left">
				<thead className="text-xl text-center font-display text-white bg-item">
					<tr>
						<th scope="col" className="px-6 py-3 font-[400]">
							{" "}
							Recent activity - {main_dc != null && main_dc.name}
						</th>
					</tr>
				</thead>
				<tbody className="text-base font-body text-white">
					{React.Children.toArray(
						[...marketEvents]
							.reverse()
							.map((m_event) => <MarketEventRow m_event={m_event} />)
					)}
				</tbody>
			</table>
		</div>
	);
}
