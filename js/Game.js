class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
   
    if(gameState === 0){
 
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    console.log("start")
    wormObj = new Worm();
    worms = wormObj.getWormSpritesCreated();
    
// worm1=createSprite(200,200);
// worm1.addImage(wormImg1);
// worm1.scale=0.5;

// worm2=createSprite(200,200);
// worm2.addImage(wormImg2);
// worm2.scale=0.5;

// worms=[worm1,worm2]


  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
  
  
  // if(frameCount%250===0)
  // foodObj.getFoodSprites(); 
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      // image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);

      // image(bgImg,0,0,displayWidth*5,displayHeight)
      
      //var display_position = 100;
      
      //index of the array
      if(frameCount%50===0)
      foodObj.getFoodSprites(); 
      var index = 0;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
      
        if (index === player.index){
          worms[index-1].x = mouseX;
          worms[index-1].y = mouseY;
  
         foodObj.touchFood(worms[index-1]);
         foodObj.touchingBorders(worms[index-1]);
          stroke(10);
          fill("red");
          ellipse(worms[index-1].x,worms[index-1].y,60,60);
          // cars[index - 1].shapeColor = "red";
          // camera.position.x = worms[index-1].x;
          // camera.position.y = displayHeight/2; //worms[index-1].y;
        }else{
          if(frameCount%5==0)
          wormGroup.setVelocityEach(0.01,0.01);
          // worms[index-1].velocityX = 0.01 ;
          // worms[index-1].velocityY = 0.001 ;
        }
       
      }

    }

   
    drawSprites();
    textSize(20);
    fill("yellow")
    text("Score : "+score, width/2,100)
  }

  end(){
    console.log("Game Ended");
  }
}
