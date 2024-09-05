var output = document.getElementById("output")
var textarea = document.getElementById("input")
var btn = document.getElementById("update")

btn1.addEventListener("click",changeText)

function changeText() {
    const content = textarea.value;
    output.innerText = content;
}