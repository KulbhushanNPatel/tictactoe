var canvas;
var backgroundImage, formBgbox, x, o, boxes;
var box1, box2, box3, box4, box5, box6 ,box7, box8, box9;
var gameState, playerCount, allPlayers;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  formBg = loadImage("./assets/tttbg.jpg");
  backgroundImage = loadImage("./assets/bg.jpg");
  x = loadImage("./assets/x.png");
  o = loadImage("./assets/o.png");
  box = loadImage("./assets/box.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  boxes = [];

  

}

function draw() {
  background(formBg);

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
