import { Label } from "./Label.js"
import { Main } from "./main.js";

export class GameOver{
    constructor(id) {
        this.id = id;
        let gameOver = document.createElement('div');
        gameOver.id = id;
        gameOver.style.textAlign = 'center';
        document.body.appendChild(gameOver);
    }
    createGameWinPanel(score){
        this.label = new Label("winPanel");
        var positionX = 2.2*(window.innerWidth/5);
        var positionY = (window.innerHeight/10);
        let overlayPanel = document.createElement('div');
        overlayPanel.style.display = 'inline-block';
        overlayPanel.style.backgroundImage = 'url(./img/win.jpg)';
        overlayPanel.style.backgroundRepeat = 'no-repeat';
        overlayPanel.style.backgroundSize = 'cover';
        overlayPanel.style.position = "fixed";
        overlayPanel.style.top = "0";
        overlayPanel.style.left = "0%";
        overlayPanel.style.width = "100%";
        overlayPanel.style.height = "100%";
        overlayPanel.style.zIndex = "19";
        overlayPanel.id = 'panel';
        document.getElementById('gameWin').appendChild(overlayPanel);
        this.createScoreNotification(score);
        this.restartButton('win','-13%');
    }

    createScoreNotification(score){
        this.label.setLabel();
        var _label = document.getElementById(this.label.id);
        document.getElementById('gameWin').appendChild(_label);
        _label.textContent = 'YOUR SCORE: '+score;
        var scorePositionY = (window.innerHeight/20);
        _label.style.padding = "10px 50px 10px 50px";
        _label.style.border = '3px solid';
        _label.style.background = 'radial-gradient(circle, rgba(194,27,47,1) 0%, rgba(148,215,233,1) 100%)';
        _label.style.width = '400px';
        _label.style.borderRadius = '15px'; 
        _label.style.color = '#2c4b7c';
        _label.style.position = 'relative';
        _label.style.fontWeight = '800';
        _label.style.zIndex = "20";
        _label.style.top = scorePositionY+"px";
        _label.style.fontFamily = 'Monaco';
        _label.style.fontSize = "50px";
        _label.style.textAlign = 'center';
        _label.style.display = 'inline-block';
        _label.style.left = "5%"
    }
    restartButton(status, left){
        var restartLabel = new Label("restart");
        restartLabel.setLabel();
        var _label = document.getElementById("restart");
        _label.textContent = 'RESTART';
        _label.positionX = "-200px";
        var scorePositionX = 1.5*(window.innerWidth/4);
        var scorePositionY = 2*(window.innerHeight/4)+50;
        _label.style.border = '5px solid';
        _label.style.display = 'inline-block';
        _label.style.width = '200px'
        _label.style.background = 'radial-gradient(circle, rgba(27,30,194,1) 0%, rgba(233,221,148,1) 100%)';
        _label.style.borderRadius = '15px'; 
        _label.style.color = '#33CC33';
        _label.style.position = 'relative';
        _label.style.fontWeight = '800';
        _label.style.zIndex = "21";
        _label.style.top = scorePositionY+"px";
        _label.style.fontFamily = 'Monaco';
        _label.style.fontSize = "30px";
        _label.style.textAlign = 'center';
        _label.style.cursor = 'pointer';
        _label.style.left = left;
        if(status === 'win') {
            document.getElementById('gameWin').appendChild(_label);
            _label.addEventListener("click", event => {
                this.restartGame('win');
            });
        }
        else if (status ==='lost') {
            document.getElementById('gameLost').appendChild(_label);
            _label.addEventListener("click", event => {
                this.restartGame('lost');
            });
        }
    }

    createGameLostPanel(){
        this.label = new Label("lostPanel");
        let overlayPanel = document.createElement('div');
        overlayPanel.style.display = 'inline-block';
        overlayPanel.style.backgroundImage = 'url(./img/lost.png)';
        overlayPanel.style.backgroundRepeat = 'no-repeat';
        overlayPanel.style.backgroundSize = 'cover';
        overlayPanel.style.position = "fixed";
        overlayPanel.style.top = "0";
        overlayPanel.style.left = "0%";
        overlayPanel.style.width = "100%";
        overlayPanel.style.height = "100%";
        overlayPanel.style.zIndex = "19";
        overlayPanel.id = 'lost-panel';
        document.getElementById('gameLost').appendChild(overlayPanel);
        this.restartButton('lost', '0%');
    }
    restartGame(status){
        var main = new Main();
        main.restartGame();
        if(status === 'win'){
            var winPanel = document.getElementById('gameWin');
            winPanel.remove();
        }
        else if (status === "lost"){
            var lostPanel = document.getElementById('gameLost');
            lostPanel.remove();
        }

    }
}
