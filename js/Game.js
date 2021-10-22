class Game {
  constructor() {}

  getState(){
    database.ref("gameState").on("value",data=>{
      gameState=data.val()
    })
  }
  //write the gameState to the database
  updateState(num){
    database.ref("/").update({
     gameState:num
    })
  }
  

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount()
    car1 = createSprite(width/2-150,height-100)
    car2 = createSprite(width/2+150,height-100)
    car1.addImage(car1Img)
    car2.addImage(car2Img)
    car1.scale = 0.07
    car2.scale = 0.07
    cars = [car1,car2]
  }

  play(){
    form.remove()
    Player.getPlayersInfo()
    if(players!==undefined){
      background("black")
      image(trackImg,0,-height*5,width,height*6)
      var index = 0
      for(var i in players){
        index = index+1
        var x=players[i].positionX
        var y=players[i].positionY
        cars[index-1].position.x = x
        cars[index-1].position.y = y+500
        if(index===player.index){
          camera.position.y = cars[index-1].position.y
        }
      }
      if(keyIsDown(UP_ARROW)){
        player.positionY = player.positionY-10
        player.updateDistance()
      }
      drawSprites()
    }

  }
}
