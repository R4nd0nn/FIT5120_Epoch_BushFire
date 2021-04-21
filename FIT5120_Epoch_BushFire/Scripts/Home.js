var language = document.getElementById("language");
var analytics = document.getElementById("analytics");
var home = document.getElementById("home");
var slogan = document.getElementById("slogan");
var importanceTitle = document.getElementById("importanceTitle");
var importanceContent = document.getElementById("importanceContent")
var mentalHealthTitle = document.getElementById("mentalHealthTitle");
var mentalHealthContent = document.getElementById("mentalHealthContent");

var socialAttributeTitle = document.getElementById("socialAttributeTitle");
var socialAttributeContent = document.getElementById("socialAttributeContent");

var findSport = document.getElementById('findSports');
var refugeeStats = document.getElementById('refugeeStats');

var details = document.getElementById("details");
var details1 = document.getElementById("details1");

var compare = document.getElementById("compare");
var fire_nav = document.getElementById("fire_nav");
var safety_nav = document.getElementById("safety_nav");
var emergency_nav = document.getElementById("fire_nav");




var analyticsTitle = document.getElementById("analyticsTitle");
var analyticsContent = document.getElementById("analyticsContent");


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



//function sendApiCall() {
//    const Http = new XMLHttpRequest();
//    const url = 'http://34.70.121.80/forecast?locality=croydon';

//    Http.open("GET", url);
//    Http.setRequestHeader("Access-Control-Allow-Headers", "*");
//    Http.send();


//    Http.onreadystatechange = (e) => {
//        console.log(Http.responseText)
//        console.log(e);
//    }
//}

//   sendApiCall();



function changeToCollapsableNavBar() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnavbar") {
        x.className += " responsive";
    } else {
        x.className = "topnavbar";
    }
}


var topLogo = document.getElementById('projectLogo');
topLogo.addEventListener("click", function () {
    window.location.href = '/Home/Index';
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides) {
        slides[slideIndex - 1].style.display = "block";
    }
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}


