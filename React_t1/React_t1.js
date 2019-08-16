var laskin = 0;
setInterval(milliSekunnit,120);

function milliSekunnit(){
    laskin++;
    console.log(laskin);

    if(laskin == 101){
        laskin = 0;
    }
    
}


