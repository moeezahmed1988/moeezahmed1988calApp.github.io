
function getNumber (num) {
    var input = document.getElementById("input")
    input.value += num;

}

function clearNumber () {
    var input = document.getElementById("input")
    input.value = " ";

}

function getResult () {
var input = document.getElementById("input")
input.value = eval(input.value);

}

