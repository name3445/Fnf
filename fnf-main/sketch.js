var bg, bgImg;
var player, shooterImg, shooter_shooting;
var score = 0;
var arrow1;

var PLAY = 2;
var gamestate = PLAY;
function preload() {
  downarrow = loadImage("assets/down.png");
  uparrow = loadImage("assets/up.png");
  leftarrow = loadImage("assets/left.png");
  rightarrow = loadImage("assets/right.png");
  bfRight = loadImage("assets/BfRight.png")
  bfLeft = loadImage("assets/BfLeft.png")
  bfDown = loadImage("assets/BfDown.png")
  bfUp = loadImage("assets/BfUp.png")
  bfIdle = loadImage("assets/BfIdle.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  arrowdownGroup = new Group();
  arrowupGroup = new Group();
  arrowleftGroup = new Group();
  arrowrightGroup = new Group();
  
  
  arrowPlayerLEFT = createSprite(width / 2 -200, height/2-150, 40, 40);
  arrowPlayerLEFT.addImage(leftarrow);
  arrowPlayerLEFT.scale=0.04
  arrowPlayerLEFT.visible=false

  arrowPlayerDOWN = createSprite(width / 2 -50, height/2-150, 40, 40);
  arrowPlayerDOWN.addImage(downarrow);
  arrowPlayerDOWN.scale=0.6
  arrowPlayerDOWN.visible=false

  arrowPlayerUP = createSprite(width / 2 +50, height/2-150, 40, 40);
  arrowPlayerUP.addImage(uparrow);
  arrowPlayerUP.scale=0.4
  arrowPlayerUP.visible=false

  arrowPlayerRIGHT = createSprite(width / 2 +200, height/2-150, 40, 40);
  arrowPlayerRIGHT.addImage(rightarrow);
  arrowPlayerRIGHT.scale=0.2
  arrowPlayerRIGHT.visible=false
  
  
}

function draw() {
  background(0);
    
  

if(gamestate=== PLAY){
  arrowPlayerUP.visible=true
  arrowPlayerRIGHT.visible=true
  arrowPlayerLEFT.visible=true
  arrowPlayerDOWN.visible=true

  if (keyWentDown("k")) {
   if(arrowupGroup.isTouching(arrowPlayerUP)){
    for(var i=0;i<arrowupGroup.length; i++){
     if(arrowupGroup[i].isTouching(arrowPlayerUP)){
      console.log("foi")
      score+=1925
      arrowupGroup[i].destroy()
      bfUp=createImg("assets/bfUp.png")
      bfUp.position(width/2+350,height/2)
     bfUp.size(250,350)
     setTimeout(()=>{
      bfUp.remove()
     },900)
     setTimeout(()=>{
      bfIdle.remove()
     bfRight.remove()
       bfDown.remove()
       bfLeft.remove()
     },100)
     

     }
    }
   }
  }
  if (keyWentDown("l")) {
    if(arrowrightGroup.isTouching(arrowPlayerRIGHT)){
      for(var i=0;i<arrowrightGroup.length; i++){
       if(arrowrightGroup[i].isTouching(arrowPlayerRIGHT)){
        console.log("foi")
        score+=1843
        arrowrightGroup[i].destroy()
        bfRight=createImg("assets/bfRight.png")
        bfRight.position(width/2+350,height/2)
       bfRight.size(250,350)
       setTimeout(()=>{
        bfRight.remove()
       },900)
       setTimeout(()=>{
        bfIdle.remove()
       bfUp.remove()
         bfDown.remove()
         bfLeft.remove()
       },100)
  
       }
      }
     }
   }
   if (keyWentDown("a")) {
    if(arrowleftGroup.isTouching(arrowPlayerLEFT)){
      for(var i=0;i<arrowleftGroup.length; i++){
       if(arrowleftGroup[i].isTouching(arrowPlayerLEFT)){
        console.log("foi")
        score+=434
        arrowleftGroup[i].destroy()
        bfLeft=createImg("assets/bfLeft.png")
        bfLeft.position(width/2+350,height/2)
       bfLeft.size(250,350)
       setTimeout(()=>{
        bfLeft.remove()
       },900)
       setTimeout(()=>{
        bfIdle.remove()
       bfRight.remove()
         bfDown.remove()
         bfUp.remove()
       },100)
  
       }
      }
     }
   }
   if (keyWentDown("s")) {
    if(arrowdownGroup.isTouching(arrowPlayerDOWN)){
      for(var i=0;i<arrowdownGroup.length; i++){
       if(arrowdownGroup[i].isTouching(arrowPlayerDOWN)){
        console.log("foi")
        score+=172
        arrowdownGroup[i].destroy()
        bfDown=createImg("assets/bfDown.png")
        bfDown.position(width/2+350,height/2)
       bfDown.size(250,350)
       setTimeout(()=>{
        bfDown.remove()
       },900)
       setTimeout(()=>{
        bfIdle.remove()
       bfRight.remove()
         bfUp.remove()
         bfLeft.remove()
       },100)
  
       }
      }
     }
   }

  textSize(50)
  text("score: " +score, width/2-100, height/2-250)
  HandleArrowLeft()
  HandleArrowRight()
  HandleArrowUp()
  HandleArrowDown()
  }
  
  bfIdle = createImg("assets/BfIdle.png")
  bfIdle.position(width/2+350,height/2)
  bfIdle.size(250,350)

  bfIdle.depth = bfLeft.depth 
  bfIdle.depth +=1 

  bfIdle.depth = bfRight.depth 
  bfIdle.depth +=1 

  bfIdle.depth = bfUp.depth 
  bfIdle.depth +=1 

  bfIdle.depth = bfDown.depth 
  bfIdle.depth +=1 

  
  drawSprites();
 
}


function HandleArrowLeft() {
  if (frameCount % 100 === 0) {
    arrowleft = createSprite(width / 2 -200, height, 40, 40);
    arrowleft.addImage("left", leftarrow); 
    arrowleft.velocityY = random(-9,-30)
    arrowleft.scale=0.04
    arrowleft.setCollider("rectangle",0,0,10,10)
    arrowleft.lifetime=200
    arrowleftGroup.add(arrowleft);
  }
}
function HandleArrowDown() {
  if (frameCount % 100 === 0) {
    arrowdown = createSprite(width / 2-50, height, 40, 40);
    arrowdown.addImage("down", downarrow);
    arrowdown.velocityY = random(-9,-30)
    
    arrowdown.scale=0.6
    arrowdown.lifetime=200
    arrowdownGroup.add(arrowdown);
  }
}
function HandleArrowUp() {
  if (frameCount % 100 === 0) {
    arrowup = createSprite(width / 2 + 50, height, 40, 40);
    arrowup.addImage("down", uparrow);
    arrowup.scale=0.4
    arrowup.velocityY = random(-9,-30)

    arrowup.lifetime=200
    arrowupGroup.add(arrowup);
  }
}

function HandleArrowRight() {
  if (frameCount % 100 === 0) {
    arrowright = createSprite(width / 2 +200, height, 40, 40);
    arrowright.addImage("right", rightarrow);    
    arrowright.velocityY = random(-9,-30)
    arrowright.scale=0.2
 
    arrowright.lifetime=200
    arrowrightGroup.add(arrowright);
  }
}
