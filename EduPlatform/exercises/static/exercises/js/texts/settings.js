window.addEventListener("DOMContentLoaded", function() {
    let textOptions = document.querySelectorAll(".text-option");
    textOptions[0].checked = true;
    let modeOptions = document.querySelectorAll(".mode-option");
    modeOptions[0].checked = true;
});

function searchText() {
    document.getElementById("body").style.backgroundColor = "rgba(73, 90, 122, 0.826)";
    document.getElementById("form").style.filter = "blur(10px)";
    document.getElementById("search-window").style.display = "block";
}
function closeSearch() {
    document.getElementById("search-window").style.display = "none";
    document.getElementById("body").style.backgroundColor = "rgba(45, 80, 144, 0.826)";
    document.getElementById("form").style.filter = "none";
}

function showTextOptions() {
    let options = document.getElementById("text-options");
    if (options.classList.contains("show")) {
        options.classList.remove("show");
        document.getElementById("search-button").style.borderBottomRightRadius = "7px";
        document.getElementById("text-label").style.borderBottomLeftRadius = "7px";
        document.getElementById("text-button-icon").className = "bx bxs-down-arrow";
        // document.getElementById("mode-button").setAttribute('onclick', 'showModeOptions()');
    } else {
        options.classList.toggle("show");
        document.getElementById("search-button").style.borderBottomRightRadius = "0";
        document.getElementById("text-label").style.borderBottomLeftRadius = "0";
        document.getElementById("text-button-icon").className = "bx bxs-up-arrow";
        // document.getElementById("mode-button").setAttribute('onclick', '');
    }
}
function showModeOptions() {
    let options = document.getElementById("mode-options");
    if (options.classList.contains("show")) {
        options.classList.remove("show");
        document.getElementById("mode-button").style.borderBottomRightRadius = "7px";
        document.getElementById("mode-label").style.borderBottomLeftRadius = "7px";
        document.getElementById("mode-button-icon").className = "bx bxs-down-arrow";
        // document.getElementById("text-button").setAttribute('onclick', 'showTextOptions()');
    } else {
        options.classList.toggle("show");
        document.getElementById("mode-button").style.borderBottomRightRadius = "0";
        document.getElementById("mode-label").style.borderBottomLeftRadius = "0";
        document.getElementById("mode-button-icon").className = "bx bxs-up-arrow";
        // document.getElementById("text-button").setAttribute('onclick', '');
    }
}
function handleChange(chbox) {
    if(chbox.checked) {
        if(chbox.name === "text") {
            changeText(chbox.value, true);
            document.getElementById("text-selected").innerHTML = chbox.value;
        } else {
            changeMode(chbox.value, true);
            document.getElementById("mode-selected").innerHTML = chbox.value;
        }
    } else {
        if(chbox.name === "text") {
            changeText(chbox.value, false);
        } else {
            changeMode(chbox.value, false);
        }
    }
}
function changeText(value, checked) {
    let options = document.querySelectorAll(".text-option");
    if(checked) {
        for(let i = 0; i < options.length; i++) {
            if(options[i].value !== value) {
                options[i].checked = false;
            }
        }
    } else {
        for(let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
        options[0].checked = true;
        document.getElementById("text-selected").innerHTML = options[0].value;
    }
    checkAllSelected();
}
function changeMode(value, checked) {
    let options = document.querySelectorAll(".mode-option");
    if(checked) {
        for(let i = 0; i < options.length; i++) {
            if(options[i].value !== value) {
                options[i].checked = false;
            }
        }
    } else {
        for(let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
        options[0].checked = true;
        document.getElementById("mode-selected").innerHTML = options[0].value;
    }
    checkAllSelected();
}

function checkAllSelected() {
    let options = document.querySelectorAll(".text-option");
    textChecked = false;
    modeChecked = false;
    for(let i = 0; i < options.length; i++) {
        if(options[i].checked) {
            textChecked = true;
        }
    }
    options = document.querySelectorAll(".mode-option");
    for(let i = 0; i < options.length; i++) {
        if(options[i].checked) {
            modeChecked = true;
        }
    }
    let button = document.getElementById("start-button");
    if(!textChecked || !modeChecked) {
        button.setAttribute('type', 'button');
        button.setAttribute('onclick', 'alertRequired()');
    } 
    else if(textChecked && modeChecked) {
        button.setAttribute('type', 'submit');
        button.setAttribute('onclick', '');
    }
}

function alertRequired() {
    alert("Текст или режим не выбраны!");
}

function selectSearch(event) {
    let chbox;
    if (event.target.tagName == "INPUT") {
        chbox = event.target;
    } else {
        chbox = event.target.querySelector('input[type="checkbox"]');
        if (chbox.checked) {
            chbox.checked = false;
        } else {
            chbox.checked = true;
        }
    }
    let options = document.querySelectorAll("#searched-text");
    if (chbox.checked) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].value != chbox.value) {
                options[i].checked = false;
            }
        }
    }
}


// let textChosen = false;
// let modeChosen = false;

// options = document.querySelectorAll("#text-option");
// for (let i = 0; i < options.length; i++) {
//     options[i].checked = false;
// }
// options = document.querySelectorAll("#mode-option");
// for (let i = 0; i < options.length; i++) {
//     options[i].checked = false;
// }

// function chooseText(event) {
//     options = document.querySelectorAll("#text-option");
//     let changedIndex = 0;
//     for (let i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             changedIndex = i;
//             textChosen = true;
//         }
//     }
//     if (textChosen) {
//         for (let i = 0; i < options.length; i++) {
//             if (changedIndex != i) {
//                 options[i].disabled = true;
//             }
//         }
//         changedIndex = undefined;
//         textChosen = false;
//         return;
//     }
//     else {
//         for (let i = 0; i < options.length; i++) {
//             options[i].disabled = false;
//         }
//     } 
// }

// function chooseMode(event) {
//     options = document.querySelectorAll("#mode-option");
//     let changedIndex = 0;
//     for (let i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             changedIndex = i;
//             modeChosen = true;
//         }
//      }
//     if (modeChosen) {
//         for (let i = 0; i < options.length; i++) {
//             if (changedIndex != i) {
//                 options[i].disabled = true;
//             }
//         }
//         changedIndex = undefined;
//         modeChosen = false;
//         return;
//     }
//     else {
//         for (let i = 0; i < options.length; i++) {
//             options[i].disabled = false;
//         }
//     }
// }