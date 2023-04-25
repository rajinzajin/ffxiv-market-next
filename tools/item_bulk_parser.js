const { getItemBulk } = require("../src/database/item_db.js");
const fs = require("fs");

getItemBulk().then((items) => {
	fs.writeFileSync("./src/data/item_bulk.json", JSON.stringify(items));
});
