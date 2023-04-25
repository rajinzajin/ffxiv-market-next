import fs from "fs"

// Read the JSON file
fs.readFile('./src/data/item_names.json', 'utf8', (err, data) => {
  if (err) throw err;
  const jsonData = JSON.parse(data);

  // Minify the JSON
  const minifiedJson = JSON.stringify(jsonData);

  // Write the minified JSON to a new file
  fs.writeFile('./src/data/item_names_min.json', minifiedJson, 'utf8', (err) => {
    if (err) throw err;
    console.log('Minified JSON written to ./src/data/item_names_min.json');
  });
});