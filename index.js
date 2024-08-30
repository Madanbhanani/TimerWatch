


function showTime(){
    
    var objDate=new Date();
    var clockGet=objDate.getHours();
    var minutesGet=objDate.getMinutes();
    var secGet=objDate.getSeconds();

    var pm="Pm"

    if(clockGet >= 0){
        pm="AM"
     }
     if(clockGet < 10){
        clockGet="0" + clockGet;
     }
     if(clockGet === 0){
        clockGet="0" + clockGet;
     }

     if(secGet < 10){
        secGet="0"+secGet;
     }
     if(minutesGet < 10){
        minutesGet="0"+minutesGet;
     }

     var total= clockGet +" : " + minutesGet + " : " +secGet +" "+ pm;
     document.getElementById("clock").innerText=total

      setTimeout(showTime, 1000);
   
   }

   showTime()