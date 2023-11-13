function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  
  
  stroke("rgb(148,7,240)");
  fill("rgb(0,255,0)");
  
   //console.log (mouseIsPressed);
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
