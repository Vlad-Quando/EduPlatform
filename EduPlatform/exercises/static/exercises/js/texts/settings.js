let textChosen = false;
let modeChosen = false;

options = document.querySelectorAll("#text-option");
for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
}
options = document.querySelectorAll("#mode-option");
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

function chooseMode(event) {
    options = document.querySelectorAll("#mode-option");
    let changedIndex = 0;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            changedIndex = i;
            modeChosen = true;
        }
     }
    if (modeChosen) {
        for (let i = 0; i < options.length; i++) {
            if (changedIndex != i) {
                options[i].disabled = true;
            }
        }
        changedIndex = undefined;
        modeChosen = false;
        return;
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = false;
        }
    }
}