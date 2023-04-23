export function formatNumberToGilString(gil) {
	return gil.toLocaleString("en-US", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
		useGrouping: true,
	});
}
