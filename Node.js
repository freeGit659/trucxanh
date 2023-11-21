import {Sprite} from "./Sprite.js";

export class Node{
    constructor(id){
        this.id = id;
        let node = document.createElement('div');
        node.id = this.id;
        node.style.position = 'absolute';
        document.body.appendChild(node);
    }

    setSize(width, height){
        this.width = width;
        this.height = height;
        var img = document.getElementById(this.id);
        img.style.width = width.toString()+"px";
        img.style.height = height.toString()+"px";
    }
    getSize(){
        return [this.width, this.height];
    }

    setTranslate(scaleX, scaleY, rotation){
        this.scaleX = scaleX
        this.scaleY = scaleY;
        this.rotation = rotation;
        var img = document.getElementById(this.id);
        img.style.transform = "scale("+this.scaleX+","+this.scaleY+")";
        img.style.transform = "rotation("+this.rotation+")";
    }

    getTranslate(){
        return [this.scaleX,this.scaleY, this.rotation];
    }

    setPosition(x, y){
        this.x = x;
        this.y = y;
        var img = document.getElementById(this.id);
        img.style.left = this.x+"px";
        img.style.top = this.y+"px";
    }
    getPosition(){
        return [this.x, this.y];
    }

    setDefault(){
        this.setTranslate(100,100,1,0);
        this.setPosition(0,0,0);
    }

    createCard(id, src, width, height, x, y, scaleX){
        var card = new Sprite(id)
        card.setSprite(src, this.id);
        card.setSize(width,height);
        card.positionX = x;
        card.positionY = y;
        card.positionZ = 0;
        card.scaleX = scaleX;
    }

}

