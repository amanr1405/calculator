var input="";

function one(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function two(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function three(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function four(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function five(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function six(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function seven(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function eight(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function nine(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function zero(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function add(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function sub(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function mul(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function div(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function del(){
    document.getElementById("result").innerText = "0";
    input=0;
}

function mod(val){
    input=input+val;
    document.getElementById("result").innerText = input;
}

function result(){
    var sym="";
    var num1=0;
    var num2=0;
    var arr=input.split(/([+\-*/%])/);
    for(var i=0;i<arr.length;i++){
        if(arr[i]=='+'||arr[i]=='-'||arr[i]=='*'||arr[i]=='/'||arr[i]=='%'){
            if(arr[i=='+']){
                num1=parseInt(arr[i]);
            }
        }
    }
    console.log(input);
    console.log(sym);
    console.log(arr);
}
