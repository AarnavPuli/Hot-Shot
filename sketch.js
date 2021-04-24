var gameState=0, playerCount, database, form, player, game
var allplayers
var gun1,gun2,gun3,gun4,bg, AI, Background, Person
var g1,g2,g3,g4
var guns,gun, Robot, Gamer
function preload(){
bg = loadImage("Shooting Background.jpg")
gun1 = loadImage("gun1.png")
gun2 = loadImage("gun2.png")
gun3 = loadImage("gun3.png")
gun4 = loadImage("gun4.png")
AI = loadImage("AI.png")
Background = loadImage("Background.jpg")
Person = loadImage("Player.png")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background(bg)
    if (playerCount==1){
        game.update(1)
    }
    if (gameState==1){
        game.play()
    }
    if(gameState==2){
        game.play2()
    }
}