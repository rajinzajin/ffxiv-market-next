import axios from "axios";
import item_names from "@/data/item_names_min.json"
export function convertToArray(jsonObjects) {
	var itemsArray = Object.entries(jsonObjects).map(([key, value]) => {
		return {
			_id: key,
			...value,
		};
	});
	return itemsArray;
}

export function filterItemJsonObjects(items_json, item_name, max_result = -1) {
	const filteredJson = {};
	var result_count = 0;
	Object.keys(items_json).forEach((key) => {
		if (max_result != -1 && result_count >= max_result) {
			return;
		}
		if (items_json[key].en.toLowerCase().includes(item_name.toLowerCase())) {
			filteredJson[key] = items_json[key];
			result_count++;
		}
	});

	return filteredJson;
}

export function getItemNameByID(list_item, item_id) {
	if (list_item[item_id] == null) return "";

	return list_item[item_id].en;
}
export function getItemName(item_id){
	if (item_names[item_id] == null) return "";

	return item_names[item_id].en;
}
export function getItemImageUrl(item_id) {
	return `https://rajinzajin.github.io/ffxiv-assets/icon2x/${item_id}.png`;
}

export function separateHqNq(entries) {
	const hqList = [];
	const nqList = [];

	for (const entry of entries) {
		if (entry.hq) {
			hqList.push(entry);
		} else {
			nqList.push(entry);
		}
	}

	return {
		hqList,
		nqList,
	};
}

export function getLowestPriceItem(entries) {
	let lowestPriceItem = null;
	for (let purchase of entries) {
		if (
			lowestPriceItem === null ||
			purchase.pricePerUnit < lowestPriceItem.pricePerUnit
		) {
			lowestPriceItem = purchase;
		}
	}
	return lowestPriceItem;
}

export function getHighestPriceItem(entries) {
	let highestPriceItem = null;
	for (let purchase of entries) {
		if (
			highestPriceItem === null ||
			purchase.pricePerUnit > highestPriceItem.pricePerUnit
		) {
			highestPriceItem = purchase;
		}
	}
	return highestPriceItem;
}