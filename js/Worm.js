class Worm{
    constructor(){
       
    }
    getWormSpritesCreated(){
        worm1 = this.createWormSprites(wormImg1);
        worm2 = this.createWormSprites(wormImg2);
        worm3 = this.createWormSprites(wormImg3);
        worm4 = this.createWormSprites(wormImg4);
        worm5 = this.createWormSprites(wormImg5);

        worm6 = this.createWormSprites(wormImg6);
        worm7 = this.createWormSprites(wormImg7);
        worm8 = this.createWormSprites(wormImg8);
        worm9 = this.createWormSprites(wormImg9);
        worm10 = this.createWormSprites(wormImg10);

        var wormsArray=[worm1, worm2, worm3, worm4, worm5, worm6, worm7, worm8, worm9, worm10]
        // var wormsArray=[worm1, worm2]
        return wormsArray
    }
    createWormSprites(wormImg){
        var rand=Math.round(random(100,displayHeight-100));
        var wormSprite=createSprite(rand,rand);
        wormSprite.addImage(wormImg);
        wormSprite.scale=0.1;
        wormSprite.setCollider("rectangle",0,0,550,100)
        wormGroup.add(wormSprite)
        return wormSprite;
    }
}