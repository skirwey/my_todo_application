import Element from "./element";

class ImageElement extends Element {
    constructor(elementName) {
        super(elementName);
        this.src = null;
    }

    setSrc(src){
        this.src = src;
    }

    setAlt(alt){
        this.alt = alt;
    }

    setTitle(title){
        this.title = title;
    }

    createDomElement(){
        let img = super.createDomElement();
        img.src = this.src;

        if(this.title){
            img.title = this.title;
        }

        img.alt = this.alt;

        return img;
    }
}

export default ImageElement;