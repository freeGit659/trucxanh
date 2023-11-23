import {CardController} from "./CardController.js"
import {Spawn} from "./Spawn.js"
import {Score} from "./Score.js";

let lastTime;
var cardCtrl = new CardController();
var scoreCtrl = new Score();
export class Main{
    constructor(){

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
        console.log(this.score);
    }
    update(dt) {
        if (!isUpdating || isFinished) return;
        timer += dt;
        this.getScore();
        console.log(dt);
    }

}

var main = new Main();

main.spawnCard();

function updateGame() {
   main.getScore();
  }

function gameLoop() {
    updateGame();
    requestAnimationFrame(gameLoop);
}
gameLoop();







