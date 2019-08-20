//When you scroll to 200px, and beyond, the popup #popup has to be displayed. 
//If you scroll back under 200px, the popup has to be hidden.

let myID = document.getElementById("scrollattava");

function scrollaa() {
  var y = window.scrollY;
  if (y >= 500) {
    window.alert("#popup");
  } else {
    myID.className = "bottomMenu hide"
  }
};

