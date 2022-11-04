/* JAVASCRIPT VALIDATE LOGIN */

function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="user"){
        location.href='http://localhost:63342/novi-frontend-eindopdracht/pages/index.html';
        window.alert("Login succesful");
    }
    else{
        window.alert("Username-password combination incorrect");
    }
}