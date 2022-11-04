<script src="https://smtpjs.com/v3/smtp.js"></script>

    function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "smtp username",
        Password : "smtp password",
        To : "lotte.nijzink@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}