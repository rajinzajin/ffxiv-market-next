// const fs = require("fs");

const axios = require("axios");

// getItemBulk().then((items) => {
// 	fs.writeFileSync("./src/data/item_bulk.json", JSON.stringify(items));
// });

axios(
	"https://raw.githubusercontent.com/rajinzajin/ffxiv-data-csv/master/csv/ClassJobCategory.csv"
).then((res) => {
	console.log(JSON.parse(csvToJson(res.data))[1]);
});

function csvToJson(csvString) {
	const lines = csvString.split("\r\n");
	const headers = lines[1].split(",");
	const result = [];
	for (let i = 4; i < lines.length; i++) {
		const obj = {};
		const currentLine = lines[i].split(",");
		for (let j = 0; j < headers.length; j++) {
			obj[headers[j]] = currentLine[j];
		}
		result.push(obj);
	}
	return JSON.stringify(result);
}
