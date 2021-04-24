class Form{
    constructor(){
        this.input = createInput('name')
        this.button = createButton('play')
        this.greeting = createElement('h3')
        this.title = createElement('h2')
        //this.reset = createButton('reset')
    this.next=createButton('next')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
    }
    display(){
        this.title.html("Arsenal 2.0")
        this.title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        //this.reset.position(displayWidth-100,20)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+= 1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/2)
            var reset = createButton('reset')
            reset.position(displayWidth-100,20)
            reset.mousePressed(()=>{
                player.updateCount(0)
                game.update(0)
            })
        })
       this.next.position(displayWidth/2,displayHeight/2-60)
       this.next.mousePressed(()=>{
           //game.play2()
           game.update(2)
       })
    }
}