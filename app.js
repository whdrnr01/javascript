window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        console.log('true');
        navigator.geolocation.getCurrentPosition(position => {
            console.log(ProcessingInstruction);
        });
    }
});