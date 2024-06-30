let table = document.getElementById("table");
let data = document.getElementById("data").dataset;
let columns = '';
for (let i = 0; i < parseInt(data.size); i++) {
    columns = columns + '1fr ';
}
table.style.gridTemplateColumns = columns;

if (parseInt(data.size) === 7 || parseInt(data.size) === 9) {
    let labels = document.querySelectorAll(".label");
    labels.forEach(label => {
        label.style.fontSize = "19px";
    });
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.margin = "7px";
        cell.style.padding = "8px";
    });
    document.getElementById("current-letter").style.margin = "10px auto";
    document.getElementById("table").style.padding = "8px";
}

let orderedArray = [];
document.querySelectorAll(".hidden-cell").forEach(letter => {
    orderedArray.push(letter.firstElementChild.innerHTML);
});
let currentLetter = document.getElementById("current-letter");
currentLetter.innerHTML = orderedArray.pop();

let isFinalLetter = false;

function shulteGame(event) {
    clickedLetter = event.target.textContent.trim();
    if (clickedLetter === currentLetter.innerText && orderedArray.length > 0) {
        currentLetter.innerHTML = orderedArray.pop()
    }
    if (orderedArray.length === 0) {
        if (isFinalLetter) {
            currentLetter.innerHTML = "Молодец!";
        } else {
            isFinalLetter = true;
        }
    }
}