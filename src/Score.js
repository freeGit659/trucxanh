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

    createScorePopup(score,color){
        var _scorePopup = new Label("scorePopup");
        _scorePopup.setLabel();
        _scorePopup.setTextContent(score);
        var scorePopup = document.getElementById("scorePopup");;
        scorePopup.style.display = 'inline-block';
        scorePopup.style.color = color;
        scorePopup.style.position = "fixed";
        scorePopup.style.width = "100px";
        scorePopup.style.zIndex = "19";
        scorePopup.style.fontFamily = 'Monaco';
        scorePopup.style.fontSize = "20px";
        this.popUpAnimation(1);
    }
    popUpAnimation(delay){
        var duration = 1;
        var element = document.getElementById("scorePopup")
        gsap.to(element, {
            scaleX: 2 , scaleY : 2, zIndex : 10, x: 0, y: -100,
            duration,
            onComplete: () => {
                element.remove();
            }
        });
    }
}