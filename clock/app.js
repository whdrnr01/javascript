const clock = document.querySelector('.clock');

function showTime() {
    let d = new Date();
    let ampm = (d.getHours() < 12 || d.getHours() === 24) ? "AM" : "PM";
    let hours = addZero((d.getHours() >= 12) ? d.getHours() - 12 : d.getHours());
    clock.innerHTML = hours + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()) + " " + ampm;
}

function addZero(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}

showTime();
setInterval(showTime, 1000);