
export class Label {
    constructor(id) {
        this.id = id;
        this.img = document.getElementById(this.id);
    }
    setText(text, container) {
        this.text = text;
        let _text = document.createElement('div');
        _text.id = this.id;
        let _container = document.getElementById(container);
        _container.style.position = 'absolute';
        _container.style.fontFamily = "rubik";
        _container.style.fontWeight = "800";
        _container.style.width = "50px";
        document.getElementById(container).appendChild(_text);
        this.img = document.getElementById(this.id);
    }
    getText() { return this.text };

    setTextContent(text, container){
        document.getElementById(container).textContent = text;
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

}