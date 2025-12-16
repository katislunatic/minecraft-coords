// ===== Coordinate Conversion =====
function convert() {
  let x = Number(document.getElementById("x").value);
  let y = Number(document.getElementById("y").value);
  let z = Number(document.getElementById("z").value);

  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  if (from !== to) {
    if ((from === "Overworld" || from === "End") && to === "Nether") {
      x /= 8;
      z /= 8;
    } else if (from === "Nether" && (to === "Overworld" || to === "End")) {
      x *= 8;
      z *= 8;
    }
  }

  document.getElementById("result").innerText =
    `X: ${Math.round(x)}  Y: ${y}  Z: ${Math.round(z)}`;
}

// ===== iOS Zoom Prevention =====
document.addEventListener("gesturestart", e => e.preventDefault());
document.addEventListener("gesturechange", e => e.preventDefault());
document.addEventListener("gestureend", e => e.preventDefault());

let lastTouchEnd = 0;
document.addEventListener("touchend", event => {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);