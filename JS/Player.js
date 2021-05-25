class Player{
    constructor(){}
    getPlayerCount(){
        var playerCountRef=dataBase.ref('Car_Racing_Game/playerCount')
        playerCountRef.on('value',this.readGameState,this.showError)
    }
    readPlayerCount(data){
       playerCount=data.val() 
       console.log(playerCount)
   }

   showError(){}

   writePlayerCount(count){
       dataBase.ref('Car_Racing_Game/').update({
       'playerCount':count    })
       }
       writePlayerName(name){
        dataBase.ref('Car_Racing_Game/players').update({
        'playerName':name    })
       } 
}