class Game{
    constructor(){

    }
    getState(){
        var gameStateref= database.ref('gameState')
        gameStateref.on('value',function(data){
            gameState= data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState==0){
            player=new Player()
            var playercountref = await database.ref('playerCount').once("value")
            if (playercountref.exists()){
                playerCount = playercountref.val()
                player.getCount()
            }
            form=new Form()
            form.display()
        }
    g1=createSprite(200,400)
    g1.addImage(gun1)
    g1.scale=0.7
    g2=createSprite(550,400)
    g2.addImage(gun2)
    g2.scale=0.4
    g3=createSprite(900,400)
    g3.addImage(gun3)
    g3.scale=0.7
    g4=createSprite(1200,400)
    g4.addImage(gun4)
    guns=[g1,g2,g3,g4]
    gun=createSprite(displayWidth/2,displayHeight/2)
    gun.visible=false
    Robot=createSprite(200,300)
    Robot.addImage(AI)
    Robot.visible=false
    Gamer=createSprite(800,300)
    Gamer.addImage(Person)
    Gamer.visible=false
}
    play(){
        form.hide()
        Player.getplayerinfo()
        if (allplayers != undefined){
            //background(bg)
            //image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            /*var index = 0
            var x = 0
            var y;
            for(var plr in allplayers){
                index=index+1
                x=x+200
                y=y+200
                guns[index-1].x=x
                guns[index-1].y=y
                if (index==player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,60,60)
                    /*guns[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2
                    camera.position.y=guns[index-1].y
                }
            }*/
        }
        if (keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance+=10
            player.update()
        }
        if(player.distance>3860){
            gameState=2
        player.rank+=1
        Player.updatecarsatend(player.rank)
        }
        drawSprites()
        textSize(50)
        fill("white")
        text("Choose your gun! Solider!",displayWidth/2-300,displayHeight/2-300)    
    if(mousePressedOver(g1)){
        gun.addImage(gun1)
        gun.scale=0.5
        gun.visible=true
        g1.visible=false
        g2.visible=false
        g3.visible=false
        g4.visible=false
    }
   else if(mousePressedOver(g2)){
        gun.addImage(gun2)
        gun.scale=0.5
        gun.visible=true
        g1.visible=false
        g2.visible=false
        g3.visible=false
        g4.visible=false
    }
    else if(mousePressedOver(g3)){
        gun.addImage(gun3)
        gun.scale=0.5
        gun.visible=true
        g1.visible=false
        g2.visible=false
        g3.visible=false
        g4.visible=false
    }
    else if(mousePressedOver(g4)){
        gun.addImage(gun4)
        gun.scale=0.5
        gun.visible=true
        g1.visible=false
        g2.visible=false
        g3.visible=false
        g4.visible=false
    }
    }
    play2(){
     background(Background)
        gun.visible=true
        Robot.visible=true
        Gamer.visible=true
    }
    end(){
    console.log("gameover")
    console.log(player.rank)
}
}