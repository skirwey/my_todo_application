import Element from './element';
import ImageElement from './image';

const el = new Element('div');

el.setId('block');
el.addClasses("border", "flex");
el.addStyles({
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: "pink"
});



const link = new Element('a');
const img = new ImageElement('img');
img.setSrc('https://www.youloveit.ru/uploads/posts/2017-05/1494861564_youloveit_ru_kot_pushin01.png');
img.setAlt("Это пушин");
img.addStyles({
    width: "100%",
    height: "100%",
    objectFit: "cover"
});


console.log(img);

link.appendChilds(img);
el.appendChilds(link);



document.body.append(el.createDomElement());
