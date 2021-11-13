var happyplant, happyplantImg, sadplant, sadplantImg;
var ground, invisibleGround, groundImage;


var  plasticbottle, plasticbottleImg;
var banana, bananaImg;

var score;

function preload(){
  groundImage= loadImage("ground.png");
  happyplantImg = loadImage("Happy plant.png");
  sadplantImg = loadImage("sad plant.png");
  bananaImg = loadImage("banana.png");
  plasticbottleImg = loadImage("wow.png");
  }

  function setup(){
    createCanvas(700,400);

ground=createSprite(200,200);
ground.addImage(groundImage);
ground.velocityX = 4;
happyplant=createSprite(600,200)
happyplant.addImage(happyplantImg)
happyplant.scale=0.3
score = 0
}

  function draw(){
    if(ground.x > 400 ){
      ground.x = height/2;
    }

    if(happyplant.isTouching(banana) ){
      score=score+5;
    }

    if(keyDown("space")&& happyplant.y > 100){
      happyplant.velocityY = -12;
    }
    bottlo()
    banaos() 
    
    happyplant.setCollider("circle",10,10,150);
    happyplant.debug = true;
       
    
    invisibleGround = createSprite(200,290,1000,10);
  invisibleGround.visible = true;
   
  happyplant.velocityY = happyplant.velocityY + 0.8

  happyplant.collide(invisibleGround);

  var select_sprites = Math.round(random(1,3));

if (select_sprites == 1){
  banaos();
}
else if (select_sprites == 2){
  bottlo();
}

    drawSprites();
  }

  function banaos() { 
    if (frameCount % 60 ==0 ) {
    var banana = createSprite(0,Math.round(random(270,270)), 10, 10);
    banana.addImage(bananaImg);
    banana.velocityX = 3;
    banana.lifetime = 180;
    banana.scale = 0.2
    banana.setCollider("circle",0,0,40);
    banana.debug = false
   }}
  
   function bottlo() {
    if (frameCount % 100 ==0 ) {
    var bottles = createSprite(0,Math.round(random(270,270)), 10, 10);
    bottles.addImage(plasticbottleImg);
    bottles.velocityX = 3;
    bottles.lifetime = 180;
    bottles.scale = 0.1
   }}
  
