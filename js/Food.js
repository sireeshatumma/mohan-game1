class Food{
    constructor(){
        this.randomX=Math.round(random(100,displayWidth-100))
        this.randomY=Math.round(random(100,displayHeight-100))
    }

   

    touchFood(worm){
        for (var i = 0; i < foodGroup.length; i++) {
          if(foodGroup.get(i).isTouching(worm)){
            // console.log(foodGroup.get(i))
            foodGroup.get(i).destroy();
            score=score+1
            size=size+0.001
          }
        }
      
        for (var i = 0; i < opGroup.length; i++) {
          if(opGroup.get(i).isTouching(worm)){
            // console.log(opGroup.get(i))
            opGroup.get(i).destroy();
            score=score+10
            size=size+0.1
          }
        }
       
      }
      
    touchingBorders(worm){
        edges=createEdgeSprites();
        if(worm.isTouching(edges)){
          size=0.1;
          score=0;
        }
      
      }
      
      createFoodSprites(){
          // console.log(r)
        var foodSprite=createSprite(Math.round(random(100,displayWidth-100)),Math.round(random(100,displayWidth-100)));
        // foodSprite.addImage(foodImg);
        foodSprite.scale=0.3;
        foodSprite.setCollider("circle",0,0,100)
        var r= Math.round(random(0,4));
        console.log(r)
        switch(r){
          case 0:foodSprite.addImage(biscuteimg); break;
          case 1:foodSprite.addImage(cakeimg); break;
          case 2:foodSprite.addImage(panipuriimg); break;
          case 3:foodSprite.addImage(vadapavimg); break;
          case 4:foodSprite.addImage(samosaimg); break;
        }
        
        foodGroup.add(foodSprite)
        return foodSprite;
      }
      getFoodSprites(){        

        this.createFoodSprites();

        this.createOverPoweredFood();
      }

      createOverPoweredFood(){
        if(frameCount%500===0){
            op=createSprite(random(20,width-20),random(20,height-20))
            op.addImage(opimg);
            op.scale=0.2
      
            opGroup.add(op)
          }

      }
   
}