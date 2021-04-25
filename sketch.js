const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var background_img, backgr;
var scm_img, scm
var stars=[];
var engine, world;
function preload() {
  background_img = loadImage("images/Space.png");

  scm_img = loadImage("images/Scm.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
    world = engine.world;


  backgr = createSprite(windowWidth/2,400,50,50);
  backgr.addImage(background_img);
  backgr.scale=2;

  scm = createSprite(windowWidth/2, windowHeight, 10, 10);
  scm.addImage(scm_img);
  scm.scale=.8;
  if(frameCount%300===0){
    for(var i=0; i<5; i++) {
      stars.push(new Star(random(0, windowWidth),random(0, 200)));
    }
  }

}

function draw() {
  Engine.update(engine);
  backgr.velocityY=3
  if(backgr.y>650) {
    backgr.y=windowHeight/2;
  }

  if(keyWentDown(LEFT_ARROW)) {
    scm.velocityX=-10;
  }
  if(keyWentUp(LEFT_ARROW)) {
    scm.velocityX=0;
  }
  if(keyWentDown(RIGHT_ARROW)) {
    scm.velocityX=10;
  }
  if(keyWentUp(RIGHT_ARROW)) {
    scm.velocityX=0;
  }
  if(scm.x<=0||scm.x>=windowWidth) {
    scm.x=windowWidth/2;
  }

  drawSprites();
  for(var i=0; i<5; i++) {
    stars[i].display();
    stars[i].updateY();
  }


 
}

