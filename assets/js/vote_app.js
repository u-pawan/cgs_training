
function incrementScore(e) {
    var button = e.target
    var sid = button.getAttribute("data-score");

    var score = document.getElementById(sid);
    var currentVotes = parseInt(score.innerText);
    score.innerText = currentVotes + 1;
}

btn1.addEventListener("click",incrementScore);
btn2.addEventListener("click",incrementScore);
btn3.addEventListener("click",incrementScore);
btn4.addEventListener("click",incrementScore);

function endGame() {
    var s1 = parseInt(document.getElementById("s1").innerText);
    var s2 = parseInt(document.getElementById("s2").innerText);
    var s3 = parseInt(document.getElementById("s3").innerText);
    var s4 = parseInt(document.getElementById("s4").innerText);
    
    var maxScore = s1;
    var winner = "BJP";  

    if (s2 > maxScore) {
        maxScore = s2;
        winner = "Congress";
    }

    if (s3 > maxScore) {
        maxScore = s3;
        winner = "Jansena";
    }

    if (s4 > maxScore) {
        maxScore = s4;
        winner = "SP";
    }

    alert("The highest score is " + maxScore + " by " + winner);
}
