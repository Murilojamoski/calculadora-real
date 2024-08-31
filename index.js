
let display = document.getElementById("display");

function colocar(x){
    display.value += x;
    document.getElementById("Del").disabled = false;
}   

function limpar(){
    display.value = ""
}   

function calcular(){
    try{
        const corretor = display.value.replace(/\b0+(\d+)/g, '$1'); 
        display.value = eval(corretor);
    }
    catch(error){
        display.value = "ERROR"
    }
    if(display.value === "ERROR"){
        document.getElementById("Del").disabled = true;
    }
}

function apagar(){
    display.value = display.value.slice(0, -1);
}
