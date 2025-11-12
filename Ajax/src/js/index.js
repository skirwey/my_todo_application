import $ from 'jquery';
import '../scss/custom.scss'

let conn = new XMLHttpRequest();

conn.onerror = function() {
    console.log(`Не могу соединиться с целевым сервером`);
}

conn.onload = function() {
    console.log(this);

    if (this.status !== 200) {
        console.log(`Получен статус ответа ;${this.status}. Ошибка!`);
        return;
    }
    
    renderBeerCard(this.response);
}

setInterval(() => {
    conn.open('GET', 'https://punkapi.online/v3/beers/random');
    conn.responseType = 'json';
    conn.send();
}, 5000);

function renderBeerCard(beer) {

    const container = document.getElementById('beer-container');
    container.innerHTML = 
            `<h2>${beer.name}</h2>
            <img style="width:150px" src="https://punkapi.online/v3/images/${beer.image}" alt="${beer.name}" />
            <p>${beer.description}</p>
            <p><strong>ABV:</strong> ${beer.abv}</p>`;
} 



