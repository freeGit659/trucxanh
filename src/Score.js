import { Label } from "./Label.js"

export class Score{
    constructor(){
        var label = new Label("score");
        this.label = label; 
        this.label.setLabel('Score: ')
        label.setStyle();
    }
    set setScore(score){
        this.label.setTextContent('Score: '+score)
    }
    get getScore(){ return this.label.getText();}
}