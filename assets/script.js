import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletConroller.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


canvas.width = 800;
canvas.height = 800;

const background = new Image();
background.src = "./assets/space.png";

const playerBulletController = new BulletController(canvas, 12, "red", true);
const enemyBulletController = new BulletController(canvas, 8, 'white', false);
const enemyController = new EnemyController(
    canvas, 
    enemyBulletController, 
    playerBulletController
    );
const player = new Player(canvas, 3, playerBulletController);

function game() {
    ctx.drawImage(background,0,0,canvas.width,canvas.height)
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
}

setInterval(game, 1000/60);