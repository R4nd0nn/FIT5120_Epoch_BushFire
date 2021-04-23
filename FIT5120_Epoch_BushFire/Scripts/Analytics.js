var fire_nav = document.getElementById('fire_nav');
if (fire_nav) {
    fire_nav.addEventListener("click", function () {
        window.location.href = '/Home/Map';
    });
}

var safety_nav = document.getElementById('safety_nav');
if (safety_nav) {
    safety_nav.addEventListener("click", function () {
        window.location.href = '/Home/Analytics';
    });

}

var emergency_nav = document.getElementById('emergency_nav');
if (emergency_nav) {
    emergency_nav.addEventListener("click", function () {
        window.location.href = '/Home/Home';
    });

}