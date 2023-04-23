export function filterArray(array, filterParams) {
	return array.filter((obj) =>
		Object.entries(filterParams).every(([key, value]) => obj[key] === value)
	);
}
