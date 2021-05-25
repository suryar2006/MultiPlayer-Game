class Form{
    constructor(){}
    showForm(){
        var name=createInput('name')
        var button=createButton('button')

        name.position(210,230)
        button.position(210,250)
        button.mousePressed(function() {
            console.log('mouse is pressed')       
            var names=name.value()
            playerCount=playerCount+1
            player.writePlayerCount(playerCount)
            player.writePlayerName(names)
             })
    }
clicked(){
 console.log('mouse is pressed')       
 var name=input.value()
 playerCount=playerCount+1
 player.writePlayerCount(playerCount)
 player.writePlayerName(name)
  }
}