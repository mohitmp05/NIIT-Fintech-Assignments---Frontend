function signup(){
    // alert();
    var name = document.getElementById('name').value;
    // alert(name);

    var username = document.getElementById('username').value;
    // alert(username);

    var email = document.getElementById('email').value;
    // alert(email);

    var number = document.getElementById('number').value;
    // alert(number);

    var password = document.getElementById('password').value;
    // alert(password);

    var cpassword = document.getElementById('cpassword').value;
    // alert(password);

    localStorage.setItem("name",name);
    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
    localStorage.setItem("number",number);
    localStorage.setItem("password",password);
    localStorage.setItem("cpassword",cpassword);
    
    window.open('index-login.html');

}