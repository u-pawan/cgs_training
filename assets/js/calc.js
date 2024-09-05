var display = document.getElementById("display")
var btns = document.getElementsByClassName("btn")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", expression);
    
}

function expression(e){
    var current = e.target
    if (current.innerText == "="){
        var result = eval(display.value)
        display.innerText=result
    }else{
        display.innerText = display.value + current.innerText
    }
}