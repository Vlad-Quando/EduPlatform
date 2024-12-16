let size = parseInt(document.getElementById("data-size").dataset.size);
let time = parseFloat(document.getElementById("data-time").dataset.time);
let maxPos = size - 1;
let minPos = 0;
let clicksAvailable = false;
let moveSound;
let countSound;

let joraPos = [];

// Normalizing table's layout
let columns = [];
for (let i = 0; i < size + 1; i++) {
    columns.push('2fr');
}
columns[0] = '1fr'
columnsStr = ''
for (let i = 0; i < size + 1; i++) {
    columnsStr = columnsStr + columns[i].toString() + ' ';
}
document.getElementById("table").style.gridTemplateColumns = columnsStr;
document.getElementById("cord-alpha-container").style.gridTemplateColumns = columnsStr;

// Starting procedure
window.addEventListener("DOMContentLoaded", () => {
    joraPos = startJoraPos();

    moveSound = new Audio("/static/sounds/moveSound1.mp3");
    countSound = new Audio("/static/sounds/countSound.mp3");

    // let timer = document.getElementById("info-label");
    // let timerValue = 4;
    // startTimer = setInterval(() => {
    //     timerValue--;
    //     timer.innerHTML = timerValue.toString();
    //     countSound.play();

    //     if(timerValue == 0) {
    //         clearInterval(startTimer);
    //         let cell = document.getElementById(`${joraPos[0]}-${joraPos[1]}`);
    //         cell.classList.remove("cell-opened");
    //         cell.classList.add("cell-closed");

    //         moveJora(joraPos);
    //     }

    // }, 1000)
})

function startJora() {
    let timer = document.getElementById("info-label");
    let timerValue = 4;
    startTimer = setInterval(() => {
        timerValue--;
        timer.innerHTML = timerValue.toString();
        countSound.play();

        if(timerValue == 0) {
            clearInterval(startTimer);
            let cell = document.getElementById(`${joraPos[0]}-${joraPos[1]}`);
            cell.classList.remove("cell-opened");
            cell.classList.add("cell-closed");

            moveJora(joraPos);
        }

    }, 1000)
}

// Setting the start Jora's position
function startJoraPos() {
    let joraX = parseInt((size - 1) / 2);
    let joraY = parseInt((size - 1) / 2);
    let cellId = `${joraX}-${joraY}`

    let cell = document.getElementById(cellId);
    cell.classList.remove("cell-closed");
    cell.classList.add("cell-opened");

    return [joraX, joraY]
}

// Moves Jora to a random cell
function joraGo(joraPos) {
    clicksAvailable = false;
    let directionCode = Math.floor(Math.random() * (4) + 1);

    switch(directionCode) {
        case 1: // up
            if(joraPos[0] - 1 > minPos) {
                joraPos[0] -= 1;
            } else {
                joraPos[0] += 1;
                directionCode = 2;
            }
            break;
            
        case 2: // down
            if(joraPos[0] + 1 < maxPos) {
                joraPos[0] += 1;
            } else {
                joraPos[0] -= 1;
                directionCode = 1;
            }
            break;

        case 3: // left
            if(joraPos[1] - 1 > minPos) {
                joraPos[1] -= 1;
            } else {
                joraPos[1] += 1;
                directionCode = 4;
            }
            break;

        case 4: // right
            if(joraPos[1] + 1 < maxPos) {
                joraPos[1] += 1;
            } else {
                joraPos[1] -= 1;
                directionCode = 3;
            }
            break;
    }

    moveSound.play();
    showDirection(directionCode);
}

// Prints Jora's direction in a label
function showDirection(directionCode) {
    let label = document.getElementById("info-label");
    let iconCont = document.getElementById("icon-arrow");
    let icon;

    switch(directionCode) {
        case 1: // up
            label.innerHTML = "Вверх";
            
            icon = document.createElement('i');
            icon.classList.add("bx");
            icon.classList.add("bxs-up-arrow");
            icon.style.color = "#ffffff";
            icon.style.fontSize = "38px";

            while (iconCont.firstChild) {
                iconCont.removeChild(iconCont.firstChild);
            }
            iconCont.appendChild(icon);

            break;
        case 2: // down
            label.innerHTML = "Вниз";

            icon = document.createElement('i');
            icon.classList.add("bx");
            icon.classList.add("bxs-down-arrow");
            icon.style.color = "#ffffff";
            icon.style.fontSize = "38px";

            while (iconCont.firstChild) {
                iconCont.removeChild(iconCont.firstChild);
            }
            iconCont.appendChild(icon);

            break;
        case 3: // left
            label.innerHTML = "Влево";

            icon = document.createElement('i');
            icon.classList.add("bx");
            icon.classList.add("bxs-left-arrow");
            icon.style.color = "#ffffff";
            icon.style.fontSize = "38px";

            while (iconCont.firstChild) {
                iconCont.removeChild(iconCont.firstChild);
            }
            iconCont.appendChild(icon);

            break;
        case 4: // right
            label.innerHTML = "Вправо";

            icon = document.createElement('i');
            icon.classList.add("bx");
            icon.classList.add("bxs-right-arrow");
            icon.style.color = "#ffffff";
            icon.style.fontSize = "38px";

            while (iconCont.firstChild) {
                iconCont.removeChild(iconCont.firstChild);
            }
            iconCont.appendChild(icon);

            break;
    }

    label.classList.add("blink");
    icon.classList.add("blink");
    
    setTimeout(() => {
        label.classList.remove("blink");
        icon.classList.remove("blink");
    }, 200);
}

function moveJora(joraPos) {
    clicksAvailable = false;

    let steps = parseInt(document.getElementById("data-steps").dataset.steps);
    
    let joraWalk = setInterval(() => {
        joraGo(joraPos);
        steps--;

        if(steps == 0) {
            clearInterval(joraWalk);
            clicksAvailable = true;
        }
    }, time * 1000);
    
}

function isThere(event) {
    if(clicksAvailable) {
        let clickedCell = event.target;
        let clickedPos = clickedCell.id.split('-').map((x) => parseInt(x));
        
        if(clickedPos[0] == joraPos[0] && clickedPos[1] == joraPos[1]) {
            document.getElementById("info-label").innerHTML = "Молодец!";
            clickedCell.classList.remove("cell-closed");
            clickedCell.classList.add("cell-opened");
        } else {
            clickedCell.classList.remove("cell-closed");
            clickedCell.classList.add("wrong-cell");

            let joraCell = document.getElementById(`${joraPos[0]}-${joraPos[1]}`)
            joraCell.classList.remove("cell-closed");
            joraCell.classList.add("cell-opened");
        }
        clicksAvailable = false;
    }
}