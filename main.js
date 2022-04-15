canvas = document.querySelector('#canvas');
ctx = canvas.getContext('2d');

relationshipLengthElement = document.querySelector('#relationship-length');
nextAnniversaryTimeElement = document.querySelector('#next-anniversary-time');
canvas.style.webkitFilter = "blur(3px)";

let now = Date.now();

let year = 2021;
let anniversary = new Date('December 1, 2021 00:00:00');

FPS = 60;

balls = []

for (i = 0; i < 1000; i++) {
    balls[i] = {x: window.innerWidth * Math.random(), y: window.innerHeight * Math.random(), vx: 32 * Math.random() - 16, vy: 32 * Math.random() - 16, r: 8 * Math.random() + 8, c: randomHsl()}
}

window.setInterval(function() {
    let now = Date.now();
    anniversary.setFullYear(2021);

    daysSinceMS = now - anniversary;
    daysSince = Math.floor(daysSinceMS / 1000 / 60 / 60 / 24);
    years = daysSince / 365.2425;

    relationshipLengthElement.innerHTML = `We've been together for ${years.toFixed(2)} years or ${daysSince} days! 🥺`;

    anniversary.setFullYear(new Date().getFullYear());   
    
    daysTilMS = anniversary - now;
    daysTil = Math.floor(daysTilMS / 1000 / 60 / 60 / 24);
    hoursinDays = (daysTilMS / 1000 / 60 / 60 / 24) - daysTil;
    hours = hoursinDays * 24;
    minutes = (hours - Math.floor(hours)) * 60;
    seconds = (minutes - Math.floor(minutes)) * 60;
    nextAnniversaryTimeElement.innerHTML = `${daysTil} days, ${Math.floor(hours)} hours, ${Math.floor(minutes)} minutes and ${seconds.toFixed(1)} seconds!`;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (i = 0; i < balls.length; i++) {
        //balls[i].vy += 2;

        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;

        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2*Math.PI);
        ctx.fillStyle = balls[i].c;
        ctx.fill();

        if (balls[i].y > canvas.height) {
            balls[i].vy = -balls[i].vy;
        }

        if (balls[i].y < 0) {
            balls[i].vy = - balls[i].vy;
        }

        if (balls[i].x > canvas.width) {
            balls[i].vx = -balls[i].vx;
        }

        if (balls[i].x < 0) {
            balls[i].vx = -balls[i].vx;
        }
    }
}, 1000 / FPS);

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}