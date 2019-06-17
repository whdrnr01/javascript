const clock = document.querySelector('.clock');

setInterval(() => {
    let d = new Date();
    let ampm = (d.getHours() > 12) ? "PM" : "AM";
    clock.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + ampm;
}, 1000);