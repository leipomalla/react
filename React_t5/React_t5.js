//When you hit “Enter” on your keyboard, the message “Bravo” has to be displayed in an alert box. If you press some other keys „Try again“ will 
//be displayed on the console.

var painallus = document.getElementById("laatikko").value;

function mikaNappain() {
    if (painallus == charCodeAt(10)) {  // 27 is the ESC key
      alert ("Bravo");
    } else {
        alert ("Try again");
    }
}
 
