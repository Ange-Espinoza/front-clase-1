function setup() {
  createCanvas(windowWidth, windowHeight).position(0.0).style("z-index,-1");
  createA("https://github.com/Ange-Espinoza", "➡ ¡Mi súper cuenta! ⬅", "_blank").id(
    "mio");
  textSize(80);
}

function draw() {
  if (mouseIsPressed === true) {
   text("🌞", mouseX, mouseY);
  } else {
    text("🌊", mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
