var numberOfButtons = document.querySelectorAll(".mybutt").length;
for (var j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".mybutt")[j]
      .addEventListener("click", function () {
        var buttoninnerhtml = document.getElementById("cartspan").innerHTML;
        var k=parseInt(buttoninnerhtml)+1;
        document.getElementById("cartspan").innerHTML=k.toString();
        
       
        
  
      });
  }

 