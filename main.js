import {CardController} from "./CardController.js"
import {Spawn} from "./Spawner.js"
import {Score} from "./Score.js";
import { GameOver } from "./GameOver.js";

let lastTime;
var cardCtrl = new CardController();
var scoreCtrl = new Score();
var gameWin = new GameOver("gameWin");


export class Main{
    constructor(){
        this.isGameOver = false;
    }
    
    spawnCard(){
        var spawn = new Spawn();
        spawn.spawnCard(20);
    }
    getScore(){
        this.score = cardCtrl.updateScore();
        scoreCtrl.setScore = this.score
        return this.score;
    }
    update(dt) {
        if (!isUpdating || isFinished) return;
        timer += dt;
        this.getScore();
    }
    restartGame(){
        cardCtrl.resetScore();
        main.isGameOver = false;
        gameMain();
        gameWin = new GameOver("gameWin");
    }

}

var main = new Main();
gameMain();
function gameMain(){
    if(main.isGameOver) return;
    main.spawnCard(20);

    function updateGame() {
        main.getScore();
    if(cardCtrl.updateNumCard() <= 0 && !main.isGameOver) {
        main.isGameOver = true;
        gameWin.createGameWinPanel(main.score);
    }
}

    function gameLoop() {
        updateGame();
        requestAnimationFrame(gameLoop);
    }
    gameLoop();
}







