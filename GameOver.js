import { Label } from "./Label.js"

export class GameOver{
    constructor(id) {
        this.id = id;
    }
    createGameWinPanel(score){
        this.label = new Label("winPanel");
        var positionX = 2.2*(window.innerWidth/5);
        var positionY = (window.innerHeight/10);
        let overlayPanel = document.createElement('div');
        overlayPanel.style.position = "fixed";
        overlayPanel.style.top = "0";
        overlayPanel.style.left = "0%";
        overlayPanel.style.width = "100%";
        overlayPanel.style.height = "100%";
        overlayPanel.style.backgroundColor = "#DEB887";
        overlayPanel.style.zIndex = "19";
        overlayPanel.id = this.id;
        document.body.appendChild(overlayPanel);
        this.createScoreLabel(score);
        this._panel = document.getElementById(this.id);
    }

    createScoreLabel(score){
        this.label.setLabel();
        var _label = document.getElementById(this.label.id);
        _label.textContent = 'YOU WIN. YOUR SCORE: '+score,'container';
        _label.positionX = "-200px";
        var scorePositionX = 1.5*(window.innerWidth/4);
        var scorePositionY = 1.5*(window.innerHeight/4);
        _label.style.padding = "10px 50px 10px 50px";
        _label.style.borderRadius = '15px'; 
        _label.style.color = '#2c4b7c';
        _label.style.position = 'relative';
        _label.style.fontWeight = '800';
        _label.style.width = "800px";
        _label.style.zIndex = "20";
        _label.style.left = scorePositionX+"px";
        _label.style.top = scorePositionY+"px";
        _label.style.fontFamily = 'Monaco';
        _label.style.fontSize = "30px";
    }
    setStyle(){

    }
}
