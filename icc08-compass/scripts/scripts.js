var watchID;
var CompassDiv = document.getElementById("DivHeading");


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}

function onSuccess(heading) {
    CompassDiv.innerHTML = 'Heading: ' + heading.magneticHeading;
};

function onError(compassError) {
    CompassDiv.innerHTML = 'Compass error: ' + compassError.code;
};

var options = {
    frequency: 1000
}; // Update every 1 second