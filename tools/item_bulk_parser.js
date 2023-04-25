import { getItemBulk } from "../src/database/item_db.js";
import fs from "fs";

var items = await getItemBulk()

fs.writeFileSync("./src/data/item_bulk.json", JSON.stringify(items));