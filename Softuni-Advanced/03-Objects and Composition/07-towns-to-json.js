function townsToJSON(arr) {
  let townLocation = [];

  let [town, latitude, longitude] = arr[0]
    .split("|")
    .map((part) => part.trim())
    .filter((part) => part != "");

  for (let i = 1; i < arr.length; i++) {
    let parts = arr[i]
      .split("|")
      .map((part) => part.trim())
      .filter((part) => part != "");

    townLocation.push({
      [town] : parts[0],
      [latitude] : Number(Number(parts[1]).toFixed(2)),
      [longitude] : Number(Number(parts[2]).toFixed(2))
    })
  }
  return JSON.stringify(townLocation)
}

console.log(
  townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
