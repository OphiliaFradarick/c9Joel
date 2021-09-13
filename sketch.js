//global variables
var box;

function setup(){
  createCanvas(600, 400);

  box = createSprite(300,200,30,100);
  box.shapeColor = "orange"
}

function draw(){
  background(0);

  drawSprites();
}