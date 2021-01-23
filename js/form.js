class Form{constructor(){}
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(150, 20)
        var input = createInput('name')
        input.position(150,80)
        var button = createButton('Play')
        button.position(150, 140)
        var greeting = createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            greeting.html('Hello '+name)
            greeting.position(150,140)
        })
    }    


}