import {CardController} from "./CardController.js"
import {Spawn} from "./Spawner.js"
import {Score} from "./Score.js";
import { GameOver } from "./GameOver.js";

let lastTime;
var cardCtrl = new CardController();
var scoreCtrl = new Score();
var gameWin = new GameOver("gameWin");
var gameLost = new GameOver("gameLost");


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
    restartGame(win){
        cardCtrl.resetScore();
        main.isGameOver = false;
        var spawn = new Spawn();
        if(win) gameMain(true);
        else {
            spawn.respawnCard();
            gameMain(false);
        }
        gameWin = new GameOver("gameWin");
        gameLost  = new GameOver("gameLost");
    }

}

var main = new Main();
gameMain(true);
function gameMain(begin){
    if(main.isGameOver) return;
    if(begin) main.spawnCard(20);

    function updateGame() {
    if(main.getScore() <= 0 && !main.isGameOver) {
            main.isGameOver = true;
            gameLost.createGameLostPanel();
        };
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







