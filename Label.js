
export class Label {
    constructor(id) {
        this.id = id;
        this.labelDOM = document.getElementById(this.id);
    }
    setLabel() {
        let _text = document.createElement('div');
        _text.id = this.id;
        document.body.appendChild(_text);
    }
    getText() { return this.text };

    setTextContent(text){
        document.getElementById(this.id).textContent = text;
    }

    setStyle(){
            this.scorePositionX = 2.2*(window.innerWidth/5);
            this.scorePositionY = (window.innerHeight/10);
            this.labelDOM = document.getElementById(this.id);
            this.labelDOM.style.padding = "10px 50px 10px 50px";
            this.labelDOM.style.borderRadius = '15px'; 
            this.labelDOM.style.color = '#2c4b7c';
            this.labelDOM.style.position = 'relative';
            this.labelDOM.style.fontWeight = '800';
            this.labelDOM.style.width = "800px";
            this.labelDOM.style.zIndex = "10";
            this.labelDOM.style.left = this.scorePositionX+"px";
            this.labelDOM.style.top = this.scorePositionY+"px";
            this.labelDOM.style.fontFamily = 'Monaco';
            this.labelDOM.style.fontSize = "30px";
    }

    set sizeHeight(height) {
        this.height = height;
        this.labelDOM.style.height = height.toString() + "px";
    }
    get sizeHeight() {
        return this.height;
    }

    set sizeWidth(width) {
        this.width = width;
        this.labelDOM.style.width = width.toString() + "px";
    }
    get sizeWidth() {
        return this.width;
    }

    set positionX(x){
        this.x = x;
        this.labelDOM.style.left = x + "px";
    }
    get positionX(){return this.x}

    set positionY(y){
        this.y = y;
        this.labelDOM.style.top = this.y + "px";
    }
    get positionY(){return this.y}

    set positionZ(z){
        this.z = z;
        this.labelDOM.style.zIndex = z;
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