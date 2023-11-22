export class Label {
    constructor(id) {
        this.id = id;
    }
    setSprite(label, container) {
        this.sprite = label;
        let text = document.createElement('div');
        text.src = label;
        text.id = this.id;

        text.style.position = 'absolute';
        text.style.border = "2px solid #0000FF"
        text.style.borderRadius = "10px";
        document.getElementById(container).appendChild(text);
        this.idSprite = text.id;
    }
    getSprite() { return this.sprite };

    setSize(width, height) {
        this.width = width;
        this.height = height;
        var img = document.getElementById(this.idSprite);
        img.style.width = width.toString() + "px";
        img.style.height = height.toString() + "px";
    }
    getSize() {
        return [this.width, this.height];
    }

    set positionX(x){
        this.x = x;
        var img = document.getElementById(this.idSprite);
        img.style.left = x + "px";
    }
    get positionX(){return this.x}

    set positionY(y){
        this.y = y;
        var img = document.getElementById(this.idSprite);
        img.style.top = this.y + "px";
    }
    get positionY(){return this.y}

    set positionZ(z){
        this.z = z;
        var img = document.getElementById(this.idSprite);
        img.style.zIndex = z;
    }
    get positionZ(){return this.z}

    get scaleX() {return this._scaleX}

    set scaleX(scale) {
        this._scaleX = scale;
        var img = document.getElementById(this.idSprite);
        img.style.transform = `scaleX(` + scale + ")";
    }

    get scaleY() {return this._scaleY}

    set scaleY(scale) {
        this._scaleY = scale;
        var img = document.getElementById(this.idSprite);
        img.style.transform = `scaleY(` + scale + ")";
    }

}