let textChosen = false;

options = document.querySelectorAll("#text-option");
for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
}

function chooseText(event) {
    options = document.querySelectorAll("#text-option");
    let changedIndex = 0;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            changedIndex = i;
            textChosen = true;
        }
    }
    if (textChosen) {
        for (let i = 0; i < options.length; i++) {
            if (changedIndex != i) {
                options[i].disabled = true;
            }
        }
        changedIndex = undefined;
        textChosen = false;
        return;
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = false;
        }
    }
}

function setTimer(event) {
    const value = document.querySelector(".value");
    let time = event.target.value;
    if (parseInt(time) >= 60) {
        secs = parseInt(time) - 60;
        if (secs === 0) {
            time = '1м';
        } else {
            time = '1м ' + secs + 'с';
        }
    } else {
        time += 'с';
    }
    value.innerHTML =  time;
}