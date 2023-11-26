
export class Sprite {
    constructor(id) {
        this.id = id;
    }
    setSprite(sprite, container) {
        this.sprite = sprite;
        let _img = document.createElement('img');
        _img.src = sprite;
        _img.id = this.id;
        _img.style.cursor = 'pointer';
        _img.style.position = 'absolute';
        _img.style.border = "2px solid #0000FF"
        _img.style.borderRadius = "10px";
        document.getElementById(container).appendChild(_img);
        this.img = document.getElementById(this.id);
    }
    getSprite() { return this.sprite };

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

}