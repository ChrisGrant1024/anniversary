relationshipLengthElement = document.querySelector('#relationship-length');
nextAnniversaryTimeElement = document.querySelector('#next-anniversary');

let now = Date.now();

let anniversary = new Date('December 1, 2021 00:00:00').valueOf();
let nextAnniversary = new Date();
nextAnniversary.setDate(anniversary.getDate())
nextAnniversary.setFullYear(new Date().getFullYear());

const FPS = 60;

window.setInterval(function() {
    let now = Date.now();

    daysSinceMS = now - anniversary;
    daysSince = Math.floor(daysSinceMS / 1000 / 60 / 60 / 24);
    months = daysSince / 30;

    relationshipLengthElement.innerHTML = `We've been together for ${months} months or ${daysSince} days! 🥺`;

    days
}, 1000 / FPS);