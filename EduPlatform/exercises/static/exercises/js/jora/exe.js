let size = parseInt(document.getElementById("data-size").dataset.size);
let time = parseFloat(document.getElementById("data-time").dataset.time);
let maxPos = size - 1;
let minPos = 0;
let clicksAvailable = false;

let joraPos = [];

// Normalizing table's layout
let columns = '';
for (let i = 0; i < parseInt(size); i++) {
    columns = columns + '1fr ';
}
document.getElementById("table").style.gridTemplateColumns = columns;

// Starting procedure
window.addEventListener("DOMContentLoaded", () => {
    joraPos = startJoraPos();

    let timer = document.getElementById("info-label");
    let timerValue = 4;
    startTimer = setInterval(() => {
        timerValue--;
        timer.innerHTML = timerValue.toString();

        if(timerValue == 0) {
            clearInterval(startTimer);
            let cell = document.getElementById(`${joraPos[0]}-${joraPos[1]}`);
            cell.classList.remove("cell-opened");
            cell.classList.add("cell-closed");

            moveJora(joraPos);
        }

    }, 1000)
})

// Setting the start Jora's position
function startJoraPos() {
    let joraX = Math.floor(Math.random() * (maxPos - minPos + 1) + minPos);
    let joraY = Math.floor(Math.random() * (maxPos - minPos + 1) + minPos);
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

    showDirection(directionCode);
}

// Prints Jora's direction in a label
function showDirection(directionCode) {
    let label = document.getElementById("info-label");

    switch(directionCode) {
        case 1: // up
            label.innerHTML = "Вверх";
            break;
        case 2: // down
            label.innerHTML = "Вниз";
            break;
        case 3: // left
            label.innerHTML = "Влево";
            break;
        case 4: // right
            label.innerHTML = "Вправо";
            break;
    }

    label.classList.add("blink");
    
    setTimeout(() => {
        label.classList.remove("blink");
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