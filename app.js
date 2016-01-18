var i = 0;

function startAnimation() { 
    var frames = document.getElementById("startLogo").children;
    var frameCount = frames.length;
    var myTimer= setInterval(function() {
        if(i==80) {
            clearInterval(myTimer);
            idleAnimation();
        } else {  
        frames[i % frameCount].style.display = "none";
        frames[++i % frameCount].style.display = "block";
        }
    }, 70);
}

function idleAnimation() {
   var iTimer = setInterval(function() {
        i = 0;
        startAnimation();
        clearInterval(iTimer);        
    }, 10000);
}
$(document).ready(startAnimation());

