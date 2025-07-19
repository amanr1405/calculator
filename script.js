let input = "";


function one(val) { updateInput(val); }
function two(val) { updateInput(val); }
function three(val) { updateInput(val); }
function four(val) { updateInput(val); }
function five(val) { updateInput(val); }
function six(val) { updateInput(val); }
function seven(val) { updateInput(val); }
function eight(val) { updateInput(val); }
function nine(val) { updateInput(val); }
function zero(val) { updateInput(val); }
function add(val) { updateInput(val); }
function sub(val) { updateInput(val); }
function mul(val) { updateInput(val); }
function div(val) { updateInput(val); }
function mod(val) { updateInput(val); }

function updateInput(val) {
    input += val;
    document.getElementById("result").innerText = input;
}

function del() {
    input = "";
    document.getElementById("result").innerText = "0";
}


function result() {
    try {
        let output = eval(input); 
        document.getElementById("result").innerText = output;
        input = output.toString();
    } catch (e) {
        document.getElementById("result").innerText = "Error";
        input = "";
    }
}
