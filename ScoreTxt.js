import { Label } from "./Label.js"

export class ScoreTxt{
    constructor(){
        var label = new Label("score");
        this.label = label;
        label.sizeWidth = 100;
        label.sizeHeight = 100;
        label.positionX = 50;
        label.positionY = 20; 
        label.setText("Score:",'container');    
    }
    set scoreCurrent(score){
        this.label.setText('Score:'+score,'container')
    }
    get scoreCurrent(){ return this.label.getText();}
}