
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
    var s1 = parseInt(document.getElementById("s1").value);
    var s2 = parseInt(document.getElementById("s2").value);
    var s3 = parseInt(document.getElementById("s3").value);
    var s4 = parseInt(document.getElementById("s4").value);
    var maxScore = s1;
    var winner = "s1";

    if (s2 > maxScore) {
        maxScore = s2;
        winner = "s2";
    }

    if (s3 > maxScore) {
        maxScore = s3;
        winner = "s3";
    }

    if (s4 > maxScore) {
        maxScore = s4;
        winner = "s4";
    }

    alert("The highest score is " + maxScore + " by " + winner);
}

var parties = {
    "BJP": 0,
    "CONGRESS":0,
    "JANSENA":0,
    "SP":0
}