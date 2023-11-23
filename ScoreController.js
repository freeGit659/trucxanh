import { ScoreTxt } from "./ScoreTxt.js";
import { CardController } from "./CardController.js";

export class ScoreController{
    constructor(){
        this.scoreController = new ScoreTxt();
        this.cardController = new CardController();
        this.scoreController.scoreCurrent(this.cardController.score);
    }
}