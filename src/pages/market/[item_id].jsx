import ItemSearchBar from "@/components/ItemSearchBar";
import LowHighPriceCard from "@/components/LowHighPriceCard";
import { getItem } from "@/database/item_db";
import { filterArray } from "@/lib/array_function";
import { getItemImageUrl } from "@/lib/item_utils";
import { getHighestPriceItem, getLowestPriceItem } from "@/lib/listings";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Market({ item }) {
	const router = useRouter();
	const dc_from_query = router.query.dc;
	const item_id_query = router.query.item_id;
	const [
		{ listings, nqLowest, nqHighest, hqLowest, hqHighest },
		setMarketData,
	] = useState({});

	useEffect(() => {
		if (dc_from_query == null) return;

		loadMarketData(dc_from_query, item_id_query)
			.then((market_data) => setMarketData(market_data))
			.catch(() => {});
	}, [dc_from_query, item_id_query]);
	return (
		<div>
			<div className="grid grid-cols-12 gap-y-6 gap-x-4">
				<div className="col-span-12 2xl:col-span-9 flex items-center">
					<div className="relative h-[6rem] w-[6rem] min-h-[6rem] min-w-[6rem]">
						<Image
							className="w-full h-full"
							width={96}
							height={96}
							src={getItemImageUrl(item.id)}
							onError="this.src='/img/error.png';"
							alt={item.Name}
						/>
					</div>
					<div className="ml-5 font-display">
						<h1 className="text-white text-4xl font-black">{item.Name}</h1>
						<h1 className="text-gray-400 text-lg font-black">
							{item.Description !== null ? item.Description : ""}
						</h1>
					</div>
				</div>
				<div className="col-span-12 2xl:col-span-3 px-2 w-full h-[3.7rem] items-center justify-center">
					<div className="w-full h-full flex items-center">
						<ItemSearchBar />
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-x-8 mt-6">
				<div className="col-span-12 2xl:col-span-4">
					<h1 className="text-white w-full text-2xl font-[700] text-center">
						{dc_from_query}
					</h1>
					<div className="h-100 mt-4 p-5 w-full max-w-full items-center justify-center rounded-2xl bg-item">
						<div className="flex justify-between">
							<h1 className="text-white font-display text-2xl font-bold">
								Lowest Price
							</h1>
							<svg
								className="{marketLoading
							? 'animate-spin'
							: ''} text-white select-none cursor-pointer text-3xl font-black"
								xmlns="http://www.w3.org/2000/svg"
								height="30"
								width="30"
								viewBox="0 0 24 24"
								fill="white"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path
									stroke="white"
									strokeWidth="1"
									d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
								/>
							</svg>
						</div>

						<div className="relative">
							{/* <CardLoading show={marketLoading} /> */}
							<LowHighPriceCard
								item={nqLowest}
								title={"Normal Quality"}
								color={"text-money"}
							/>
							<LowHighPriceCard
								item={hqLowest}
								title={"High Quality"}
								color={"text-money"}
							/>
						</div>
					</div>
					<div className="h-100 p-5 w-full max-w-full items-center justify-center rounded-2xl bg-item mt-6">
						<h1 className="text-white font-display text-2xl font-bold">
							Highest Price
						</h1>

						<div className="relative">
							{/* <CardLoading show={marketLoading} /> */}
							<LowHighPriceCard
								item={nqHighest}
								title={"Normal Quality"}
								color={"text-money2"}
							/>
							<LowHighPriceCard
								item={hqHighest}
								title={"High Quality"}
								color={"text-money2"}
							/>
						</div>
					</div>
				</div>
				<div className="col-span-12 2xl:col-span-8">
					<h1 className="text-white w-full text-2xl font-[700] text-center">
						&nbsp;
					</h1>
					<div className="mt-4">{/* <MarketTable {listings} /> */}</div>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const data = await getItem(parseInt(params.item_id));
	return { props: { item: data } };
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

async function loadMarketData(dc, item_id) {
	const fields =
		"listings.pricePerUnit,listings.hq,listings.quantity,listings.worldName";
	const res = await axios(
		`https://universalis.app/api/${dc}/${item_id}?entries=1800&fields=${fields}`
	);
	const market_data = res.data;

	const listings = market_data.listings;

	const hqList = filterArray(listings, { hq: true });
	const nqList = filterArray(listings, { hq: false });

	const hqLowest = getLowestPriceItem(hqList);
	const nqLowest = getLowestPriceItem(nqList);

	const hqHighest = getHighestPriceItem(hqList);
	const nqHighest = getHighestPriceItem(nqList);

	return { listings, nqLowest, nqHighest, hqLowest, hqHighest };
}
