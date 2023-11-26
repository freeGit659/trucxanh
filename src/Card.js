import {Sprite} from "./Sprite.js";

export class Card {
    constructor(id){
        this.id = id;
        let node = document.createElement('div');
        node.id = this.id;
        node.style.position = 'absolute';
        document.body.appendChild(node);
        this.img = document.getElementById(this.id);
    }

    set sizeHeight(height) {
        this.height = height;
        this.img.style.height = height.toString() + "px";
    }
    get sizeHeight() {
        return this.height;
    }

    set sizeWidth(width) {
        this.width = width;
        this.img.style.width = width.toString() + "px";
    }
    get sizeWidth() {
        return this.width;
    }

    set positionX(x){
        this.x = x;
        this.img.style.left = x + "px";
    }
    get positionX(){return this.x}

    set positionY(y){
        this.y = y;
        this.img.style.top = this.y + "px";
    }
    get positionY(){return this.y}

    set positionZ(z){
        this.z = z;
        this.img.style.zIndex = z;
    }
    get positionZ(){return this.z}

    get scaleX() {return this._scaleX}

    set scaleX(scale) {
        this._scaleX = scale;
        this.img.style.transform = `scaleX(` + scale + ")";
    }

    get scaleY() {return this._scaleY}

    set scaleY(scale) {
        this._scaleY = scale;
        this.img.style.transform = `scaleY(` + scale + ")";
    }

    createCard(id, src, width, height, x, y, scaleX){
        var card = new Sprite(id)
        card.setSprite(src,this.id);
        card.sizeWidth = width;
        card.sizeHeight = height;
        card.positionX = x;
        card.positionY = y;
        card.positionZ = 0;
        card.scaleX = scaleX;
    }

}

