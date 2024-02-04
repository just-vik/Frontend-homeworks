
const button = document.querySelector('#target button');
const paragraph = document.querySelector('#target p');

button.addEventListener('click', () => {
    paragraph.textContent = 'Привет, мир!';
});


const formNode = document.querySelector('#form');
formNode.addEventListener('submit', event => {
    event.preventDefault();
    const valueNode = document.querySelector('#value').value;
    console.log(valueNode);
});


function randomNumber() {
    const button = document.querySelector('#random button');
    const number = Math.floor(Math.random() * 11) + 5;
    button.innerText = number;
}


