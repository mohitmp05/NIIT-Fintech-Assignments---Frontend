$(document).ready(function () {
    var emii = localStorage.getItem("bemi");
    var bamount = localStorage.getItem("bamount");
    var btenure = localStorage.getItem("btenure");
    var amount = document.getElementById("amount");
    var tenure = document.getElementById("tenure");
    var emi = document.getElementById("emi");
    amount.innerHTML = bamount;
    tenure.innerHTML = btenure;
    emi.innerHTML = emii;
  })


  $("#check").click(function () {
    var numbero = parseInt(document.getElementById("num1").value);
    var numbert = parseInt(document.getElementById("num2").value);
    var qty = parseInt(document.getElementById("num3").value);
    // var karat = parseInt(document.getElementById("num4").value);
    var status = document.getElementById("stat").value;
    var amount = document.getElementById("amount");

    switch (status) {
      case "add": {
        alert();
        var as=qty*3000;
        if(numbero>as){
            alert('your Gold QTy is '+qty+' gm so you are only eligble for upto '+as+'rupees');
        }else{
            var roi = 8;
        roi = (numbero * roi) / 100;
        roi = numbero + roi;
        roi = roi / (numbert * 12);
        localStorage.setItem("bemi", roi);
        localStorage.setItem("bamount", numbero);
        localStorage.setItem("btenure", numbert);
        amount.innerHTML = numbero;

        }
        // var roi = 8;
        // roi = (numbero * roi) / 100;
        // roi = numbero + roi;
        // roi = roi / (numbert * 12);
        // localStorage.setItem("bemi", roi);
        // localStorage.setItem("bamount", numbero);
        // localStorage.setItem("btenure", numbert);
        // amount.innerHTML = numbero;

        break;
      }

      case "sub": {
        var roi = 8;
        roi = (numbero * roi) / 100;
        roi = numbero + roi;
        roi = roi / (numbert * 12);
        localStorage.setItem("bemi", roi);
        localStorage.setItem("TOtal amont", numbero);
        localStorage.setItem("tenure", numbert);
        localStorage.setItem("Gold-Gm", numbert);
      

        break;
      }

      default:
      // code block
    }
  })

  
  function applynow() {
    window.open('applyformgold.html');
  }
