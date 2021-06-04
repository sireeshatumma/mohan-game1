// for food
var worm,orangeWorm,blueWorm;
var worm1, worm2, worm3, worm4, worm5, worm6, worm7, worm8, worm9, worm10, worms,wormGroup;
var wormImg1, wormImg2, wormImg3, wormImg4, wormImg5, wormImg6, wormImg7, wormImg8, wormImg9, wormImg10;

var biscute,cake,op,panipuri,vadapav,samosa
var foodGroup,opGroup;
var biscuteimg,cakeimg,opimg,panipuriimg,vadapavimg,samosaimg,bgImg
var score=0;
var size=0.1
var database,gameState=0,playerCount=0,allPlayers ;
var player,game,form,foodObj,wormObj;
var edges;
function loadWormImages(){
  wormImg1=loadImage("images/blue worm.png")
  wormImg2=loadImage("images/orange worm.png")
  wormImg3=loadImage("images/paeteen blue worm.png")
  wormImg4=loadImage("images/paeteen pink worm.png")
  wormImg5=loadImage("images/paeteen green worm.png")
  wormImg6=loadImage("images/parten worm.png")
  wormImg7=loadImage("images/pink worm.png")
  wormImg8=loadImage("images/red worm.png")
  wormImg9=loadImage("images/yelllow worm.png")
  wormImg10=loadImage("images/green worm.png")
}
function preload() {
  loadWormImages();
  bgImg=loadImage("images/bgImg.jpg")
  wormImg=loadImage("images/blue worm.png")
  biscuteimg=loadImage("images/biscute.png")
  cakeimg=loadImage("images/cake.png")
  opimg=loadImage("images/op.png")
  panipuriimg=loadImage("images/panipuri.png")
  vadapavimg=loadImage("images/vada pav.png")
  samosaimg=loadImage("images/samosa.png")
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-20);
  database=firebase.database();
 
 
foodGroup=new Group();
opGroup=new Group();
wormGroup=new Group();

foodObj= new Food();
// foodObj.getFoodSprites();


game = new Game();
game.getState();
game.start();

} 

function draw() {
  

  if(playerCount === 10){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 
}



