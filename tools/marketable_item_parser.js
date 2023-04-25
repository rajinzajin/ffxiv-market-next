import axios from "axios";
import fs from "fs";

var marketable_items = {}
var res = await axios("https://raw.githubusercontent.com/ffxiv-teamcraft/ffxiv-teamcraft/master/libs/data/src/lib/json/items.json")

var marketable_universalis = await axios("https://universalis.app/api/v2/marketable")

marketable_universalis.data.forEach(id => {
    if(id in res.data){
        marketable_items[id] = res.data[id]
    }
});

fs.writeFileSync("./src/data/marketable_items.json", JSON.stringify(marketable_items));