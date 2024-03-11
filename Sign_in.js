function goToLogin(){
    var gmail = document.getElementById("gmail").value;
    var pass = document.getElementById("password").value;
    console.log(gmail+pass)
    if(gmail == "Andres@gmail.com" && pass == "1234"){
        window.location.href = 'calendar.html';
    }
    else{
        window.location.href = 'login.html';
    }
}