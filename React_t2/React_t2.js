//You have to make the character to run by displaying the images runner1, runner2, runner3 and
//runner4 with a speed of 60ms.



var imageArray = ["runner1.png", "runner2.png","runner3.png", "runner4.png"];
console.log(imageArray.length);

setInterval(vaihdaKuvaa, 2000);

function vaihdaKuvaa() {
    for (i = 1; i < imageArray.length; i++) {
       document.getElementById("kuva").src = imageArray[i];
    }
}







