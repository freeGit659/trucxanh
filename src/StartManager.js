import { Main } from "./main.js";

export class StartManager{
        constructor(id) {
            this.id = id;
        }
        createStartPanel(){
            let panel = document.createElement('div');
            panel.id = this.id;
            document.body.appendChild(panel);
            panel.style.display = 'inline-block';
            panel.style.backgroundImage = 'url(././images/startBackground.jpg)';
            panel.style.backgroundRepeat = 'no-repeat';
            panel.style.backgroundSize = 'cover';
            panel.style.position = "fixed";
            panel.style.top = "0";
            panel.style.left = "0%";
            panel.style.width = "100%";
            panel.style.height = "100%";
            panel.style.zIndex = "19";
            this.createButtonStart("buttonStart");
        }

        createButtonStart(id){
            let _label = document.createElement('p');
            _label.id = id;
            _label.textContent = 'START';
            _label.positionX = "-200px";
            var scorePositionY = 2*(window.innerHeight/4);
            _label.style.border = '5px solid';
            _label.style.display = 'inline-block';
            _label.style.width = '300px'
            _label.style.background = 'radial-gradient(circle, rgba(27,30,194,1) 0%, rgba(233,221,148,1) 100%)';
            _label.style.borderRadius = '15px'; 
            _label.style.color = '#33CC33';
            _label.style.position = 'relative';
            _label.style.fontWeight = '800';
            _label.style.zIndex = "21";
            _label.style.top = scorePositionY+"px";
            _label.style.fontFamily = 'Monaco';
            _label.style.fontSize = "70px";
            _label.style.textAlign = 'center';
            _label.style.cursor = 'pointer';
            _label.style.left = '0%';
            document.getElementById(this.id).appendChild(_label);
            _label.addEventListener("click", event => {
                this.startGame();
            });
        }
        startGame(){
            var main = new Main();
            main.startGame();
            var panel = document.getElementById(this.id);
            panel.remove();
        }
}