
export class StartManager{
        constructor(id) {
            this.id = id;
        }
        createStartPanel(){
            let panel = document.createElement('div');
            panel.id = this.id;
            document.body.appendChild(panel);
            this.createButtonStart("buttonStart");
        }

        createButtonStart(id){
            let button = document.createElement('div');
            button.id = id;
            let panel = document.getElementById(this.id);
            document.panel.appendChild(button);
        }
    }