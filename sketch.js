drawing = true;
function setup() {
  can = createCanvas(windowWidth,windowHeight);
  can.mousePressed(adding)
  background(0,125,150);
}

function draw() {
  if (!drawing) {
  circle(mouseX,mouseY,100)
}
}
function adding() {
  drawing = !drawing;
}