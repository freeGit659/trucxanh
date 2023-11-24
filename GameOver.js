import { Label } from "./Label.js"

export class GameOver{
    constructor(id) {
        this.id = id;
        var label = new Label("score");
        this.label = label; 
        this.label.setText('Score: ')
    }
    createGameWinPanel(score){
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
        this.label.setTextContent('Chúc mừng bạn đã thắng. Điểm của bạn: '+score,'container')
        this.label.positionX = "-200px";
        this.setStyle();
    }
    setStyle(){

    }
}
