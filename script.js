function convert() {
  let x = Number(document.getElementById("x").value);
  let y = Number(document.getElementById("y").value);
  let z = Number(document.getElementById("z").value);

  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  if (from === to) {
    result(x, y, z);
    return;
  }

  // Nether scaling rules
  if (from === "Overworld" && to === "Nether") {
    x /= 8;
    z /= 8;
  } else if (from === "Nether" && to === "Overworld") {
    x *= 8;
    z *= 8;
  } else if (from === "Nether" && to === "End") {
    x *= 8;
    z *= 8;
  } else if (from === "End" && to === "Nether") {
    x /= 8;
    z /= 8;
  }
  // Overworld ↔ End = no change

  result(x, y, z);
}

function result(x, y, z) {
  document.getElementById("result").innerText =
    `Converted Coords: ${Math.round(x)}, ${y}, ${Math.round(z)}`;
}