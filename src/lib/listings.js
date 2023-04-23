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