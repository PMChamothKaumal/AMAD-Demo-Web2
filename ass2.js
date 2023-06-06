
function add(){
    var number1 = parseInt(document.getElementById("no1").value);
    var number2 = parseInt(document.getElementById("no1").value);   
    var Answer = number1+number2;
    document.getElementById("b5").innerHTML = Answer;

    

}

function sub(){
    var number1 = document.getElementById("no1").value;
    var number2 = document.getElementById("no2").value; 
    var Answer = number1-number2;
    document.getElementById("b5").innerHTML = Answer;

}

function mul(){
    var number1 = document.getElementById("no1").value;
    var number2 = document.getElementById("no2").value; 
    var Answer = number1*number2;
    document.getElementById("b5").innerHTML = Answer;

}

function div(){
    var number1 = document.getElementById("no1").value;
    var number2 = document.getElementById("no2").value; 
    var Answer = number1/number2;
    document.getElementById("b5").innerHTML = Answer;

}
