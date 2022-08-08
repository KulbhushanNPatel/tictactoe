class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state){
    database.ref("/").update({
      gameState: state
    })
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    box1 = createSprite(width / 2 - 100, height / 2 - 100);
    box2 = createSprite(width / 2, height / 2 - 100);
    box3 = createSprite(width / 2 + 100, height / 2 - 100);
    box4 = createSprite(width / 2 - 100, height / 2);
    box5 = createSprite(width / 2, height / 2);
    box6 = createSprite(width / 2 + 100, height / 2);
    box7 = createSprite(width / 2 - 100, height / 2 + 100);
    box8 = createSprite(width / 2, height / 2 + 100);
    box9 = createSprite(width / 2 + 100, height / 2 + 100);
    box1.addImage("topLeftBox", box);
    box1.scale = 3
    box2.addImage("topMiddleBox", box);
    box2.scale = 3
    box3.addImage("topRightBox", box);
    box3.scale = 3
    box4.addImage("MiddleLeftBox", box);
    box4.scale = 3
    box5.addImage("CenterBox", box);
    box5.scale = 3
    box6.addImage("MiddleRightBox", box);
    box6.scale = 3
    box7.addImage("BottomLeftBox", box);
    box7.scale = 3
    box8.addImage("BottomMiddleBox", box);
    box8.scale = 3
    box9.addImage("BottomRightBox", box);
    box9.scale = 3

    boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();
    Player.getPlayersInfo();

    if (allPlayers !== undefined){
      image(backgroundImage, 0, 0, width, height);

      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        // var x = allPlayers[plr].positionX;
        // var y = height - allPlayers[plr].positionY;

        if (index == player.index){
          pass
        }
      }

      drawSprites();
    }
  }
}
