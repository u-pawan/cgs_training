var display = document.getElementById("display")
var btns = document.getElementsByClassName("btns")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", exp);
    
}

function exp(e){
    var current = e.target
    if (current.innerText == "="){
        var result = eval(display.value)
        display.value=result
    }else{
        display.value = display.value + current.innerText
    }
}