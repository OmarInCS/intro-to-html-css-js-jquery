
 var x, y;


 function generateQuestion() {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);
    var qTag = document.getElementById("question");
    // qTag.innerHTML = "What's " + x + " * " + y + " ?";
    qTag.innerHTML = `What's ${x} * ${y} ?`;
 }

 function checkAnswer() {
    var userAnswer = parseInt(document.getElementById("answer").value);
    // var annualSalary = userAnswer * 12;
    if (userAnswer == x*y) {
        document.getElementById("message").innerHTML = "Correct";
    }
    else {
        document.getElementById("message").innerHTML = "Wrong";
    }
 }