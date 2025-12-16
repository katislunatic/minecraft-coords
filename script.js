// ===== Coordinate Conversion =====
function convert() {
  let x = Number(document.getElementById("x").value);
  let y = Number(document.getElementById("y").value);
  let z = Number(document.getElementById("z").value);

  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  if (from !== to) {
    // Overworld / End → Nether
    if ((from === "Overworld" || from === "End") && to === "Nether") {
      x /= 8;
      z /= 8;
    }

    // Nether → Overworld / End
    else if (from === "Nether" && (to === "Overworld" || to === "End")) {
      x *= 8;
      z *= 8;
    }
  }

  document.getElementById("result").innerText =
    `X: ${Math.round(x)}  Y: ${y}  Z: ${Math.round(z)}`;
}

// ===== iOS Zoom Prevention =====

// Prevent pinch zoom
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

document.addEventListener("gesturechange", function (e) {
  e.preventDefault();
});

document.addEventListener("gestureend", function (e) {
  e.preventDefault();
});

// Prevent double-tap zoom
let lastTouchEnd = 0;
document.addEventListener("touchend", function (event) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);