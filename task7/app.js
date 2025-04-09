document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('#addButton');
    let list = document.querySelector('#taskList');

    button.addEventListener('click', () => {
        let newItem = document.createElement('li'); 
        newItem.textContent = 'Mergi si scrie proiectul React pentru PPW';
        list.appendChild(newItem);
    });
});
