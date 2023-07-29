function timeShow() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var session = "am";

    
    if(hour > 12) {
     
        session = "pm";
    }
    
    if(hour==0) {
        hour=12;
    }
    
    hour = (hour<10)?"0"+ hour:hour;
    minute = (minute<10)?"0"+minute:minute;
    second = (second<10)?"0"+second:second;
    setTimeout(timeShow, 1000);
    document.getElementById("digitalclock").innerHTML = hour + ":" +  minute + ":" + second + " " + session;
}

timeShow();