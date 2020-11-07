var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 400, 100, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(300,200,100,30);
  movingRect.shapeColor = "green";
  
}


function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
     fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
    {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }
  
    else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }
  drawSprites();
}