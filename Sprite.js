export class Sprite {
    constructor(id) {
        this.id = id;
    }
    setSprite(sprite, container) {
        this.sprite = sprite;
        let img = document.createElement('img');
        img.src = sprite;
        img.id = this.id;

        img.style.position = 'absolute';
        img.style.border = "2px solid #0000FF"
        img.style.borderRadius = "10px";
        document.getElementById(container).appendChild(img);
        this.idSprite = img.id;
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