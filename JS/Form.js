class Form{
    constructor(){
        this.name=createInput('name')
        this.button=createButton('button')
        this.greeting=createElement('h3')
    }
    showForm(){
        this.name.position(210,230)
        this.button.position(210,270)
        this.button.mousePressed(()=> {
            console.log('mouse is pressed')       
            var names=this.name.value()
            playerCount=playerCount+1
            player.writePlayerCount(playerCount)
            player.writePlayerName(names)
        this.greeting.html('hello '+ names)
        this.greeting.position(210,180)
    })
    }
    hideForm(){
       this.name.hide()
       this.button.hide()
    }
}