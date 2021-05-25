class Game{
   constructor(){}

   getGameState() {
    var gameStateRef=dataBase.ref('Car_Racing_Game/GameState')
    gameStateRef.on('value',this.readGameState,this.showError)
   }

   readGameState(data){
         gameState=data.val() 
       console.log(gameState)
    }

    showError(){}
    
    writeGameState(state){
        dataBase.ref('Car_Racing_Game/').update({
       'GameState':state     })
    }

    startGame(){
        if(gameState===0){
            form=new Form()
            form.showForm() 
            player=new Player()
            player.getPlayerCount()
        }
    }
}