import { Label } from "./Label.js"

export class Score{
    constructor(){
        var label = new Label("score");
        this.label = label; 
        this.label.setText('Score: ')
        label.setStyle();
    }
    set setScore(score){
        this.label.setTextContent('Score: '+score,'container')
    }
    get getScore(){ return this.label.getText();}
}