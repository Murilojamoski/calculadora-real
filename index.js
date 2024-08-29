
let display = document.getElementById("display");

function colocar(x){
    display.value += x;
}   

function limpar(){
    display.value = ""
}   

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR"
    }
}