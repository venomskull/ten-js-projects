
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secEl = document.querySelector('#seconds');

function countdown() {
    const newYears = new Date('20 Mar 2022');
    const currentDate = new Date();

    const totalSeconds = (newYears - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor(totalSeconds / 60 % 60);
    const seconds = Math.floor(totalSeconds  % 60);
    console.log(totalSeconds, days, hours, minutes, seconds)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = format(hours);
    minsEl.innerHTML = format(minutes);
    secEl.innerHTML = format(seconds);
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);


