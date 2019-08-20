//You have to animate the red circle with javascript. It has to move from left 0 to the right 300px and then stop.

function liikutaYmpyraaOikealle() {
    var ympyraFunktiossa = document.getElementById("ympyra");
    ympyraFunktiossa.style.left = "0px" ;


  

    (ympyraFunktiossa.style.left == "0px" ? (ympyraFunktiossa.style.left = "300px", ympyraFunktiossa.style.transition = "3s") : (myBallRed.style.left = "0px", myBallRed.style.transition = "3s"))



    //var id = setInterval(liikkuminen, 2000);

    /*function liikkuminen() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            ympyraFunktiossa.style.left = pos + "px";
        }
    }*/
}


