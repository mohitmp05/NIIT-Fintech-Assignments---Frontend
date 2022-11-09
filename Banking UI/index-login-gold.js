function login(){
    var email=document.getElementById("email").value;
    //  alert(email);

     var password=document.getElementById("password").value;
    //  alert(password);


   var lemail= localStorage.getItem("email");
   var lpassword= localStorage.getItem("password");

if(email==lemail){
    
if(password==lpassword){
    var number=0 ;
    localStorage.setItem('number',number);
    window.open('goldloan.html');
}else
alert('wrong password')

}else


alert('wrong auth')


}