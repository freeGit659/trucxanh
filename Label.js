
export class Label {
    constructor(id) {
        this.id = id;
        this.labelDOM = document.getElementById(this.id);
    }
    setText(text) {
        this.text = text;
        let _text = document.createElement('div');
        _text.id = this.id;
        // let _txt = document.getElementById(this.id);

        document.body.appendChild(_text);
    }
    getText() { return this.text };

    setTextContent(text){
        document.getElementById(this.id).textContent = text;
    }

    setStyle(){
        this.scorePositionX = 2*(window.innerWidth/4)+15;
        this.scorePositionY = (window.innerHeight/10);
        this.labelDOM = document.getElementById(this.id);
            this.labelDOM.style.backgroundColor =  '#4385ef';
            this.labelDOM.style.padding = "10px 50px 10px 50px";
            this.labelDOM.style.borderRadius = '15px'; 
            this.labelDOM.style.color = '#2c4b7c';
            //this.labelDOM.style.margin = '1000 auto';
            // margin-bottom: 2em;
            // box-shadow: inset 0px -5px 1px #234d8e, 6px 7px 3px rgba(66, 66, 66, 0.5);
            //   font-family: rubik;
            this.labelDOM.style.position = 'relative';
            this.labelDOM.style.fontWeight = '800';
            this.labelDOM.style.width = "30px";
            this.labelDOM.style.display = "flex";
            this.labelDOM.style.zIndex = "1";
            this.labelDOM.style.left = this.scorePositionX+"px";
            this.labelDOM.style.top = this.scorePositionY+"px";
            //   font-size: 50px;
            //   user-select: none;
            //   text-shadow: 2px 2px 2px;
                    // _txt.style.position = 'absolute';
        // _txt.style.fontFamily = "rubik";
        // _txt.style.fontWeight = "800";
        // _txt.style.width = "50px";
    }

    set sizeHeight(height) {
        this.height = height;
        this.lableDOM.style.height = height.toString() + "px";
    }
    get sizeHeight() {
        return this.height;
    }

    set sizeWidth(width) {
        this.width = width;
        this.lableDOM.style.width = width.toString() + "px";
    }
    get sizeWidth() {
        return this.width;
    }

    set positionX(x){
        this.x = x;
        this.lableDOM.style.left = x + "px";
    }
    get positionX(){return this.x}

    set positionY(y){
        this.y = y;
        this.lableDOM.style.top = this.y + "px";
    }
    get positionY(){return this.y}

    set positionZ(z){
        this.z = z;
        this.lableDOM.style.zIndex = z;
    }
    get positionZ(){return this.z}

    get scaleX() {return this._scaleX}

    set scaleX(scale) {
        this._scaleX = scale;
        this.lableDOM.style.transform = `scaleX(` + scale + ")";
    }

    get scaleY() {return this._scaleY}

    set scaleY(scale) {
        this._scaleY = scale;
        this.lableDOM.style.transform = `scaleY(` + scale + ")";
    }

}