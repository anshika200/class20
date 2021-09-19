  var fixedRect,movingRect;
  var go1,go2,go3,go4;

function setup() {
  createCanvas(1200,800);
 movingRect= createSprite(400, 200, 80, 30);
 movingRect.shapeColor="blue"

 fixedRect= createSprite(600, 400, 50, 80);
 fixedRect.shapeColor="green"

  go1= createSprite(100, 100, 50, 50);
 go1.shapeColor="blue"
 go1.velocityY=-5
 go2= createSprite(200, 100, 50, 50);
 movingRect.shapeColor="blue"
 go2.velocityY=5
 go3= createSprite(300, 100, 50, 50);
 go3.shapeColor="blue"
 go4= createSprite(400, 100, 50,50);
 go4.shapeColor="blue"


}

function draw() {  
  background(0);  
  go1.x=World.mouseX
  go1.y=World.mouseY

if (isTouching(go1,go2)){
    go1.shapeColor="red"
    go2.shapeColor="red"
}
else{
    go2.shapeColor="green"
    go1.shapeColor="green"
}

bounceOff(go1,go2)

  drawSprites();
}
