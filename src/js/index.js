/*class Product{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let storageCart = JSON.parse(window.localStorage.getItem('cart'));
let cart = storageCart ? storageCart : [];

const bread = new Product(1, 'Хлеб');
const tea = new Product(2, 'Черный чай');

cart.push(bread);
cart.push(tea);

let jsonCart= JSON.stringify(cart);

window.localStorage.setItem('cart', jsonCart);*/

import $ from 'jquery';
import { v4 as uuidv4 } from 'uuid';
import Task from './task.js';
import '../scss/custom.scss'
import { render } from 'sass';

let tasks = JSON.parse(window.localStorage.getItem('tasks'));

if(!tasks) {
    tasks = [];
}

function renderList() {
    const list = $(".tasks");
    list.html(null);

    tasks.forEach(function(item){
        addTaskToList(item);
    });
}

function addTaskToList(task) {
    const list = $(".tasks");
    const li = $(`<li class="${task.status}">${task.name}</li>`);
    const doneButton = $('<button>Выполнить</button>');

    doneButton.click(() => {
        tasks.forEach((item, index, tasks) => {
            if(item.id == task.id) {
                tasks[index].status = 'done';
            }
        });
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        renderList();
        
    });

    const removeButton = $('<button>Удалить</button>');
    removeButton.click(() => {
        if(confirm('Вы действительно хотите удалить элемент?')){
        
        tasks.forEach((item, index, tasks) => {
            if(item.id == task.id) {
                tasks.splice(index, 1);
            }
        });
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        renderList();
        }   
    });

    li.append(doneButton);
    li.append(removeButton);
    list.append(li);
    
}
    
    $("#add-task").click(function(){
        let text = $("#task").val();

        $("#task").val(null);

        if(!text) {
            alert('Введите название задачи');
            return;
        }
        const task = new Task(uuidv4(), text, 'in-progress');
        tasks.push(task);
        addTaskToList(task);

        
    });

    renderList();


