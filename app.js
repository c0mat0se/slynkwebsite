function startAnimation() { 
    var frames = document.getElementById("startLogo").children;
    var frameCount = frames.length;
    var i = 0;
    setInterval(function () { 
        frames[i % frameCount].style.display = "none";
        frames[++i % frameCount].style.display = "block";
    }, 300);
}
$(document).ready(startAnimation);

