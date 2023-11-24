import {CardController} from "./CardController.js"
import {Spawn} from "./Spawn.js"
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
    gameLoop(timeStamp) {
    lastTime = lastTime || timeStamp;
    let dt = (timeStamp - lastTime)/1000;
    lastTime = timeStamp;
    this.update(dt);
    window.requestAnimationFrame(this.gameLoop(0.17));
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

}

var main = new Main();
gameMain();
function gameMain(){
    if(main.isGameOver) return;

    main.spawnCard(20);

    function updateGame() {
        main.getScore();
    if(cardCtrl.updateNumCard() <= 18) {
        gameWin.createGameWinPanel(main.score);
        main.isGameOver = true;
    }
}

    function gameLoop() {
        updateGame();
        requestAnimationFrame(gameLoop);
    }
    gameLoop();
}







