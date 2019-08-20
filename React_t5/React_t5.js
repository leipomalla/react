//When you hit “Enter” on your keyboard, the message “Bravo” has to be displayed in an alert box. If you press some other keys „Try again“ will 
//be displayed on the console.



function mikaNappain(onkeypress) {
    var x = onkeypress.which || onkeypress.keyCode;
    if (x == charAt(10)) {  
      alert ("Bravo");
    } else {
        alert ("Try again");
    }
}
 
