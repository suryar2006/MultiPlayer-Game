var dataBase;
var game,form,player
var gameState=0
var playerCount=0
function setup(){
    createCanvas(500,500);
    dataBase=firebase.database()    //initialising fire base and data base
    
    game=new Game()
    game.getGameState()
    game.startGame()
}



function draw(){
    background("white");
    drawSprites();
}
