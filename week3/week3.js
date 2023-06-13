function average(){
    var weight1 = parseInt(document.getElementById("1st").value);
    var weight2 = parseInt(document.getElementById("2nd").value);
    var weight3 = parseInt(document.getElementById("3rd").value);
    var average = (weight1+weight2+weight3)/3;
    alert("your average weight is: "+average);
}

function login(){
    var email="chamoth@gmail.com";
    var pw = "ch1234";
    var mail1 = document.getElementById("mail").value;
    var pw1 = document.getElementById("pw").value;

    if((email==mail1)&&(pw==pw1)){
        alert("login succesfully");

    }
    else{
        alert("Login fail");
    }
}

function month(){
    var month1=document.getElementById("month").value;
    switch(month1){
        case january:
            alert("Duruthu");
            break;
        case february:
            alert("Navam");
            break;
        case march:
            alert("Madin");
            break;
        case april:
            alert("Bak")
            break;
        case may:
            alert("wesak")
            break;
        default:
            alert("Invalid input try again;")
            break;
    }
}

    for(var i=0;i<5;i++){
        console.log("error")

    }
