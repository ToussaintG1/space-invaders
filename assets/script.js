import EnemyController from "./EnemyController.js";
import Player from "./Player.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


canvas.width = 800;
canvas.height = 800;

const background = new Image();
background.src = "./assets/space.png";

const enemyController = new EnemyController(canvas);
const player = new Player(canvas, 3);

function game() {
    ctx.drawImage(background,0,0,canvas.width,canvas.height)
    enemyController.draw(ctx);
    player.draw(ctx);
}

setInterval(game, 1000/60);