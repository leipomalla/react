//You have to make the character to run by displaying the images runner1, runner2, runner3 and
//runner4 with a speed of 60ms.



var imageArray = ["runner1.png", "runner2.png","runner3.png", "runner4.png"];
console.log(imageArray.length);

setInterval(vaihdaKuvaa, 60);

var i = 0;

function vaihdaKuvaa() {
    document.getElementById("kuva").src = imageArray[i];
    if (i == imageArray.length-1) {
    	i = 0;
    } else {
    	i++;
    }
}






