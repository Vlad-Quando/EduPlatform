let maxSize = 7;

function showModeOptions() {
    let options = document.getElementById("mode-options");
    if (options.classList.contains("show")) {
        options.classList.remove("show");
        document.getElementById("mode-button").style.borderBottomRightRadius = "7px";
        document.getElementById("mode-button-icon").className = "bx bxs-down-arrow";
    } else {
        options.classList.toggle("show");
        document.getElementById("mode-button").style.borderBottomRightRadius = "0";
        document.getElementById("mode-button-icon").className = "bx bxs-up-arrow"; 
    }
}
function changeMode(element) {
    if (element.checked == true) {
        if (element.id == "check1") {
            document.getElementById("check2").checked = false;
            document.getElementById("mode-selected").innerText = "Цифры"
            maxSize = 7;
            document.getElementById("mode-options").classList.remove("show");
        } else {
            document.getElementById("check1").checked = false;
            document.getElementById("mode-selected").innerText = "Буквы"
            maxSize = 5;
            if (parseInt(document.getElementById("size").value) > 5) {
                document.getElementById("size").value = 5;
            }
            document.getElementById("mode-options").classList.remove("show");
        }
    }
}

function plus() {
    let value = parseInt(document.getElementById("size").value);
    if (value < maxSize) {
        value += 1;
        document.getElementById("size").value = value;
    }
}

function minus() {
    let value = parseInt(document.getElementById("size").value);
    if (value > 3) {
        value -= 1;
        document.getElementById("size").value = value;
    }
}
