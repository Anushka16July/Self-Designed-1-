var BackG,BackImg; 
var rocket,rocketImg;
var ufoImg,ufo;
var rock,rockImg;
var blast,blastImg;



function preload (){
  BackImg = loadImage("images/space.png");
  rocketImg = loadImage("images/rocket.png");
  ufoImg = loadImage("images/ufo.png");
  rockImg = loadImage("images/rock1.png");
  blastImg = loadImage("images/blast.png")
}
function setup() {
  createCanvas(800,400);

 BackG = createSprite(400,200,100,100);
 BackG.addImage(BackImg);

 

rocket = createSprite(100,200,100,100);
rocket.addImage(blastImg);
rocket.addImage(rocketImg);
 rocket.scale = 0.2;
 
 
 ufo = createSprite(700,200,100,100);
 ufo.addImage(ufoImg);
 ufo.scale = 0.2;

 


 //blast = createSprite(700,200,100,100);
 
 //blast.scale = 0.5;

 


 
 
 
 
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  spawnObstacles();

  fill("red")
 text(mouseX + "," + mouseY,100,100);

 //rocket.x = mouseX;
 //rocket.y = mouseY;

 if(keyDown("UP_ARROW")){
   rocket.velocityY = -2
 }
 if(keyDown("DOWN_ARROW")){
  rocket.velocityY = 2
}
if(keyDown("RIGHT_ARROW")){
  rocket.velocityX = 2
}
if(keyDown("LEFT_ARROW")){
  rocket.velocityX = -2}

  if(rocket.isTouching(rock)){
    rocket.changeImage(blastImg);
    console.log("abc")
  }










 
}

function spawnObstacles() {
  if(frameCount % 120 === 0) {
    rock = createSprite(850,200,100,100);
 rock.addImage(rockImg);
 rock.scale = 0.2;
 rock.velocityX = -4

 rock.y = Math.round(random(80,120));
 //rock.scale = 0.1;


  }}