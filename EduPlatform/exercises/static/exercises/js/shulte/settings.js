function setType(event) {
    let val = event.target.value + 'x' + event.target.value
    document.getElementById("tableSize").innerHTML = val;
}

let typeChosen = false;

options = document.querySelectorAll("#type-option");
for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
}

function chooseType(event) {
    let changedIndex = 0;
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            changedIndex = i;
            typeChosen = true;
        }
    }
    if (typeChosen) {
        for (let i = 0; i < options.length; i++) {
            if (changedIndex != i) {
                options[i].disabled = true;
            }
            if (options[i].value === "Буквы" && options[i].checked === true) {
                let input = document.getElementById("inputSize");
                if (parseInt(input.value) > 5) {
                    document.getElementById("tableSize").innerHTML = '5x5';
                    input.value = '5';
                }
                input.max = '5';
            }
        }
        changedIndex = undefined;
        typeChosen = false;
        return;
    }
    else {
        for (let i = 0; i < options.length; i++) {
            options[i].disabled = false;
        }
        let input = document.getElementById("inputSize");
        input.max = '7';
    }
}