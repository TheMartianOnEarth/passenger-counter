let countElement = document.getElementById('js-count-el');
let saveElement = document.getElementById('js-save-el');

let count = 0;

function increment () {
    count += 1;
    countElement.innerText = count;
}

function save () {
    let countString = ` ${count} - `;
    saveElement.innerText += countString;
    countElement.textContent = 0;
    count = 0; 
}