class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null

    }
    getPlayerCount(){
        var playerCountRef=dataBase.ref('Car_Racing_Game/playerCount')
        playerCountRef.on('value',this.readPlayerCount,this.showError)
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
        dataBase.ref('Car_Racing_Game/players/player'+ playerCount).update({
        'playerName':name    })
       } 
       getAllPlayerInformation(){
        var playerInformationRef=dataBase.ref('Car_Racing_Game/players')
        playerInformationRef.on('value',(data)=>{
            var getAllPlayerInfo=data.val()
            allPlayerInformation=data.val()
        })
       }
}