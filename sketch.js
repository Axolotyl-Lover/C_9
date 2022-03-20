var box

function setup() {
  createCanvas(600,600);
  box = createSprite(450,350,70,70)
  box.shapeColor = "lightblue"
}

function draw() 
{
  background(30);
  if (keyDown(LEFT_ARROW)) {
    box.x -= 3
  }

  if (keyDown(RIGHT_ARROW)) {
    box.x += 3
  }

  if (keyDown(UP_ARROW)) {
    box.y -= 3
  }

  if (keyDown(DOWN_ARROW)) {
    box.y += 3
  }

  drawSprites()
}




