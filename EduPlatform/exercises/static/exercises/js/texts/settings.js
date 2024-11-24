window.addEventListener("DOMContentLoaded", function() {
    let textOptions = document.querySelectorAll(".text-option");
    textOptions[0].checked = true;
    let modeOptions = document.querySelectorAll(".mode-option");
    modeOptions[0].checked = true;

    allTexts = Array()

    options = document.querySelectorAll(".search-option");
    for (let i = 0; i < options.length; i++) {
        allTexts.push(options[i].children)
    }
});

let isClearing = false;

function searchText() {
    document.getElementById("body").style.backgroundColor = "rgba(73, 90, 122, 0.826)";
    document.getElementById("form").style.filter = "blur(10px)";
    document.getElementById("search-window").style.display = "block";

    options = document.querySelector(".text-list");
    options.innerHTML = "";
    allTexts.forEach(element => {
        let div = document.createElement('div');
        div.className = "search-option";
        div.setAttribute("onclick", "selectSearch(event)");

        let p = document.createElement('p');
        p.className = "option-label";
        p.innerHTML = element[0].innerHTML;

        let chbox = document.createElement('input');
        chbox.id = "searched-text";
        chbox.name = "text";
        chbox.value = element[1].value;
        chbox.type = "checkbox";
        chbox.setAttribute("onclick", "selectSearch(event)");

        div.appendChild(p);
        div.appendChild(chbox);

        options.appendChild(div);
    });
}
function closeSearch() {
    document.getElementById("search-window").style.display = "none";
    document.getElementById("body").style.backgroundColor = "rgba(45, 80, 144, 0.826)";
    document.getElementById("form").style.filter = "none";
}
function clearSearchField() {
    isClearing = true;
    document.getElementById("search-field").value = "";

    options = document.querySelector(".text-list");
    options.innerHTML = "";
    allTexts.forEach(element => {
        let div = document.createElement('div');
        div.className = "search-option";
        div.setAttribute("onclick", "selectSearch(event)");

        let p = document.createElement('p');
        p.className = "option-label";
        p.innerHTML = element[0].innerHTML;

        let chbox = document.createElement('input');
        chbox.id = "searched-text";
        chbox.name = "text";
        chbox.value = element[1].value;
        chbox.type = "checkbox";
        chbox.setAttribute("onclick", "selectSearch(event)");

        div.appendChild(p);
        div.appendChild(chbox);

        options.appendChild(div);
    });
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
            // document.getElementById("text-selected").innerHTML = "Текст не выбран";
        } else {
            changeMode(chbox.value, false);
            // document.getElementById("mode-selected").innerHTML = "Режим не выбран";
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
    options = document.querySelectorAll("#searched-text");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
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
    let textOptions = document.querySelectorAll(".text-option");
    if (event.target.tagName == "INPUT") {
        chbox = event.target;
        textSelected = document.getElementById("text-selected");
        // let textOptions = document.querySelectorAll(".text-option");
        if(chbox.checked) {
            for(let i = 0; i < textOptions.length; i++) {
                if(textOptions[i].value !== chbox.value) {
                    textOptions[i].checked = false;
                } else {
                    textOptions[i].checked = true;
                    textSelected.innerHTML = chbox.value;
                }
            }
        } else {
            for(let i = 0; i < textOptions.length; i++) {
                textOptions[i].checked = false;
            }
            textOptions[0].checked = true;
            textSelected.innerHTML = textOptions[0].value;
        }
        checkAllSelected();
    } else {
        chbox = event.target.querySelector('input[type="checkbox"]');
        textSelected = document.getElementById("text-selected");
        // let textOptions = document.querySelectorAll(".text-option");
        if (chbox.checked) {
            chbox.checked = false;
            textSelected.innerHTML = textOptions[0].value;
        } else {
            chbox.checked = true;
            textSelected.innerHTML = chbox.value;
        }
    }

    for(let i = 0; i < textOptions.length; i++) {
        if (textSelected.innerHTML === textOptions[i].value) {
            textOptions[i].checked = true;
        }
        else {
            textOptions[i].checked = false;
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


function levensheinLength(str1, str2) {
    let sToReturn = str2;
    let n = str1.length;
    let m = str2.length;
    if (n > m) {
        s1 = str1;
        str1 = str2;
        str2 = s1;
        sToReturn = str1;

        interm_n = n;
        n = m;
        m = interm_n;
    }

    currentRow = [...Array(n + 1).keys()];
    for (let i = 1; i < m + 1; i++) {
        let previousRow = currentRow;
        currentRow = [i].concat([...Array(n).fill(0)]);
        // console.log(currentRow);
        for (let j = 1; j < n + 1; j++) {
            let add_var = previousRow[j] + 1;
            let delete_var = currentRow[j - 1] + 1;
            let change_var = previousRow[j - 1];

            if (str1[j - 1] !== str2[i - 1]) {
                change_var += 3;
            }
            currentRow[j] = Math.min(add_var, delete_var, change_var);
        }
    }
    return [currentRow[n], sToReturn];
}

function handleSearch(field) {
    if (!isClearing) {
        isClearing = false;
        
        let options = document.querySelectorAll(".text-option");
        let levLengths = Array();
        for (let i = 0; i < options.length; i++) {
            let res = levensheinLength(field.value, options[i].value);
            levLengths.push(res);
        }
        
        minLengths = Array()
        minLength = 999;
        for (let i = 0; i < levLengths.length; i++) {
            if (levLengths[i][0] < minLength) {
                minLength = levLengths[i][0];
            }
        }
        for (let i = 0; i < levLengths.length; i++) {
            if (levLengths[i][0] <= minLength + 2) {
                minLengths.push(levLengths[i]);
            }
        }

        options = document.querySelector(".text-list");
        options.innerHTML = "";
        minLengths.forEach(element => {
            let div = document.createElement('div');
            div.className = "search-option";
            div.setAttribute("onclick", "selectSearch(event)");

            let p = document.createElement('p');
            p.className = "option-label";
            p.innerHTML = element[1];

            let chbox = document.createElement('input');
            chbox.id = "searched-text";
            chbox.name = "text";
            chbox.value = element[1];
            chbox.type = "checkbox";
            chbox.setAttribute("onclick", "selectSearch(event)");

            div.appendChild(p);
            div.appendChild(chbox);

            options.appendChild(div);
        });
    }
}