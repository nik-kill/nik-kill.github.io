function menuAnimate(x) {
    x.classList.toggle("change");
    var side =  document.getElementById("mySidepanel");
    if(side.style.width=="60px"){
        side.style.width = "0px";
    }
    else{
        side.style.width = "60px";
    }
}

function menuAnimateRight(x) {
    x.classList.toggle("change");
    var side = document.getElementById("mySidepanelRight");
    if (side.style.width == "60px") {
        side.style.width = "0px";
    }
    else {
        side.style.width = "60px";
    }
}

var i = 0;
var txt = "Heyy there!";
var speed = 100; /* The speed/duration of the effect in milliseconds */
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome_text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function displayH1(pos){
    document.getElementById("welcome_text").innerHTML = pos;
}

