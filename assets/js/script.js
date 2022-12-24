var l = window.innerHeight;
var w = window.innerWidth;

window.onload = function start() {
    var can = document.getElementById("life");
    can.width = w;
    can.height = l;
    m = can.getContext('2d');
    typeWriter();
    // update();
}
        
function draw(x, y, c, s){
    m.fillStyle = c;
    m.fillRect(x, y, s, s);
}

particles = [];
function particle(x, y, c){
    return { "x": x, "y": y, "vx": 0, "vy": 0, "color": c };
}

function random(){
    return Math.random() * w + 50;
}

function create(number, color){
    group = [];
    for (let i = 0; i < number; i++) {
        group.push(particle(random(), random(), color));
        particles.push(group[i]);
    }
    return group;
}

function rule(particles1, particles2, g){
    for (let i = 0; i < particles1.length; i++) {
        fx = 0;
        fy = 0;
        for (let j = 0; j < particles2.length; j++) {
            a = particles1[i];
            b = particles2[j];
            dx = a.x - b.x;
            dy = a.y - b.y;
            d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0 && d < 80) {
                F = g * (1 / d);
                fx += (F * dx);
                fy += (F * dy);
            }
        }
        a.vx = (a.vx + fx) * 0.5;
        a.vy = (a.vy + fy) * 0.5;
        a.x += a.vx;
        a.y += a.vy;
        if (a.x <= 0 || a.x >= w) { a.vx *= -1 ;}
        if (a.y <= 0 || a.y >= l) { a.vy *= -1 ;}
    }
}

yellow = create(500, "yellow");
red = create(500, "red");
green = create(500, "blue");

function update(){
    rule(green, green, -0.32);
    rule(green, red, -0.17);
    rule(green, yellow, 0.34);
    rule(red, red, -0.10);
    rule(red, green, -0.34);
    rule(yellow, yellow, 0.15);
    rule(yellow, green, -0.20);

    // rule(red, red, -0.51)
    // rule(red, yellow, -0.15)
    // rule(yellow, red, 0.01)
    
    m.clearRect(0, 0, w, l);
    for (i = 0; i < particles.length; i++) {
        draw(particles[i].x, particles[i].y, particles[i].color, 1);
    }
    requestAnimationFrame(update);
}




function menuAnimate(x) {
    x.classList.toggle("change");
    var side = document.getElementById("mySidepanel");
    if (side.style.width == "60px") {
        side.style.width = "0px";
    }
    else {
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
async function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome_text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else {update();}
}

function displayH1(pos) {
    document.getElementById("welcome_text").innerHTML = pos;
}

