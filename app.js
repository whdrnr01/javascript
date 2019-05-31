window.addEventListener('load', () => {
    let long;
    let lat;

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
        });
    }
});