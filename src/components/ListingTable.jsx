import { formatNumberToGilString } from "@/lib/format_function";

export default function ListingTable({ listings = [] }) {
	if (listings.length == 0) return <></>;

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg h-full">
			<table className="w-full font-display text-sm text-left text-gray-400">
				<thead className=" sticky top-0 bg-item text-sm font-body text-gray-700 uppercase dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							{" "}
							Retainer name{" "}
						</th>
						<th scope="col" className="px-6 py-3">
							{" "}
							Quantity{" "}
						</th>
						<th scope="col" className="px-6 py-3">
							{" "}
							Quality{" "}
						</th>
						<th scope="col" className="px-6 py-3">
							{" "}
							Price{" "}
						</th>
					</tr>
				</thead>
				<tbody className="max-h-[10rem] font-body text-gray-300">
					{listings.map((listing) => (
						<tr
							key={listing.listingID}
							className="bg-primary text-base border-b border-gray-700 hover:bg-item"
						>
							<th
								scope="row"
								className="px-6 py-4 font-medium text-white whitespace-nowrap"
							>
								{listing.retainerName}
							</th>
							<td className="px-6 py-4"> {listing.quantity} </td>
							<td className="px-6 py-4"> {listing.hq ? "High" : "Normal"} </td>
							<td className="px-6 py-4 text-yellow-300">
								{formatNumberToGilString(listing.pricePerUnit)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
