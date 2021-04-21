
function newfunction() {
    document.getElementById("li1").style.animationName = "nothing";
    document.getElementById("li2").style.animationName = "nothing";
    document.getElementById("li3").style.animationName = "nothing";
    document.getElementById("li4").style.animationName = "nothing";
    document.getElementById("li5").style.animationName = "nothing";
    //document.getElementById("li5").style.animationName = "nothing";
    document.getElementById("li1_1").style.animationName = "nothing";
    document.getElementById("li2_1").style.animationName = "nothing";
    document.getElementById("li3_1").style.animationName = "nothing";
    document.getElementById("li4_1").style.animationName = "nothing";
    document.getElementById("li5_1").style.animationName = "nothing";
    document.getElementById("li1_2").style.animationName = "nothing";
    document.getElementById("li2_2").style.animationName = "nothing";
    document.getElementById("li3_2").style.animationName = "nothing";
    document.getElementById("li4_2").style.animationName = "nothing";
    document.getElementById("li5_2").style.animationName = "nothing";
    document.getElementById("li1_3").style.animationName = "nothing";
    document.getElementById("li2_3").style.animationName = "nothing";
    document.getElementById("li3_3").style.animationName = "nothing";
    document.getElementById("li4_3").style.animationName = "nothing";
    document.getElementById("li5_3").style.animationName = "nothing";
    document.getElementById("li1_4").style.animationName = "nothing";
    document.getElementById("li2_4").style.animationName = "nothing";
    document.getElementById("li3_4").style.animationName = "nothing";
    document.getElementById("li4_4").style.animationName = "nothing";
    document.getElementById("li5_4").style.animationName = "nothing";
    document.getElementById("li1_5").style.animationName = "nothing";
    document.getElementById("li2_5").style.animationName = "nothing";
    document.getElementById("li3_5").style.animationName = "nothing";
    document.getElementById("li4_5").style.animationName = "nothing";
    document.getElementById("li5_5").style.animationName = "nothing";

    var location = document.getElementById('search').value;
    var jsonurl = 'https://fireprediction.ga/forecast?locality=' + location;
    var forecastdata_date = "";
    var forecastdata_longtitude = "";
    var forecastdata_latitude = "";
    var forecastdata_rating_0 = "";
    var forecastdata_rating_1 = "";
    var forecastdata_rating_2 = "";
    var forecastdata_rating_3 = "";
    var forecastdata_rating_4 = "";
    var forecastdata_rating_5 = "";
    var forecastdata_rating_6 = "";
    var forecastdata_FFDI_0 = "";
    var forecastdata_FFDI_1 = "";
    var forecastdata_FFDI_2 = "";
    var forecastdata_FFDI_3 = "";
    var forecastdata_FFDI_4 = "";
    var forecastdata_FFDI_5 = "";
    var forecastdata_FFDI_6 = "";
    var forecastdata_address = "";
    $.getJSON(jsonurl, function (data) {
        forecastdata_latitude = data.latitude;
        forecastdata_longtitude = data.longitude;
        forecastdata_address = data.address;
        forecastdata_date = data.days[0].datetime;
        forecastdata_temp_0 = data.days[0].temp;
        forecastdata_temp_1 = data.days[1].temp;
        forecastdata_temp_2 = data.days[2].temp;
        forecastdata_temp_3 = data.days[3].temp;
        forecastdata_temp_4 = data.days[4].temp;
        forecastdata_temp_5 = data.days[5].temp;
        forecastdata_temp_6 = data.days[6].temp;
        var forecastdata_FFDI_0 = data.days[0].FFDI
        var forecastdata_FFDI_1 = data.days[1].FFDI
        var forecastdata_FFDI_2 = data.days[2].FFDI
        var forecastdata_FFDI_3 = data.days[3].FFDI
        var forecastdata_FFDI_4 = data.days[4].FFDI
        var forecastdata_FFDI_5 = data.days[5].FFDI
        var forecastdata_FFDI_6 = data.days[6].FFDI
        forecastdata_rating_0 = data.days[0].FFDI_category;
        forecastdata_rating_1 = data.days[1].FFDI_category;
        forecastdata_rating_2 = data.days[2].FFDI_category;
        forecastdata_rating_3 = data.days[3].FFDI_category;
        forecastdata_rating_4 = data.days[4].FFDI_category;
        forecastdata_rating_5 = data.days[5].FFDI_category;
        forecastdata_rating_6 = data.days[6].FFDI_category;
        if (forecastdata_rating_0 === "low-moderate") {
            document.getElementById("li1").style.animationName = "rotate-one";
            document.getElementById("firedanger_00").innerHTML = "Severity: Low-Moderate";
            document.getElementById("li1").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_02").innerHTML = "Todays Average Temperature is " + forecastdata_temp_0 + "℃";
            */
        }
        else if (forecastdata_rating_0 === "high") {
            document.getElementById("li1").style.animationName = "rotate-one";
            document.getElementById("li2").style.animationName = "rotate-two";
            document.getElementById("firedanger_00").innerHTML = "Severity: High";
            document.getElementById("li2").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_02").innerHTML = "Todays Average Temperature is " + forecastdata_temp_0 + "℃";
            */
        }
        else if (forecastdata_rating_0 === "very high") {
            document.getElementById("li1").style.animationName = "rotate-one";
            document.getElementById("li2").style.animationName = "rotate-two";
            document.getElementById("li3").style.animationName = "rotate-three";
            document.getElementById("firedanger_00").innerHTML = "Severity: very high";
            document.getElementById("li3").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_02").innerHTML = "Todays Average Temperature is " + forecastdata_temp_0 + "℃";
            */
        }
        else if (forecastdata_rating_0 === "severe") {
            document.getElementById("li1").style.animationName = "rotate-one";
            document.getElementById("li2").style.animationName = "rotate-two";
            document.getElementById("li3").style.animationName = "rotate-three";
            document.getElementById("li4").style.animationName = "rotate-four";
            document.getElementById("firedanger_00").innerHTML = "Severity: severe";
            document.getElementById("li4").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_02").innerHTML = "Todays Average Temperature is " + forecastdata_temp_0 + "℃";
            */
        }
        else if ((forecastdata_rating_0 === "extreme") || (forecastdata_rating_0 === "catastrophic (code red)")) {
            document.getElementById("li1").style.animationName = "rotate-one";
            document.getElementById("li2").style.animationName = "rotate-two";
            document.getElementById("li3").style.animationName = "rotate-three";
            document.getElementById("li4").style.animationName = "rotate-four";
            document.getElementById("li5").style.animationName = "rotate-five";
            document.getElementById("firedanger_00").innerHTML = "Severity: extreme";
            document.getElementById("li5").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_02").innerHTML = "Todays Average Temperature is " + forecastdata_temp_0 + "℃";
            */
        }

        if (forecastdata_rating_1 === "low-moderate") {
            document.getElementById("li1_1").style.animationName = "rotate-one";
            document.getElementById("firedanger_10").innerHTML = "Severity: Low-Moderate";
            document.getElementById("li1_1").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_12").innerHTML = "Average Temperature is " + forecastdata_temp_1 + "℃";
            */
        }
        else if (forecastdata_rating_1 === "high") {
            document.getElementById("li1_1").style.animationName = "rotate-one";
            document.getElementById("li2_1").style.animationName = "rotate-two";
            document.getElementById("firedanger_10").innerHTML = "Severity: high";
            document.getElementById("li2_1").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_12").innerHTML = "Average Temperature is " + forecastdata_temp_1 + "℃";
            */
        }
        else if (forecastdata_rating_1 === "very high") {
            document.getElementById("li1_1").style.animationName = "rotate-one";
            document.getElementById("li2_1").style.animationName = "rotate-two";
            document.getElementById("li3_1").style.animationName = "rotate-three";
            document.getElementById("firedanger_10").innerHTML = "Severity: very high";
            document.getElementById("li3_1").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_12").innerHTML = "Average Temperature is " + forecastdata_temp_1 + "℃";
            */
        }
        else if (forecastdata_rating_1 === "severe") {
            document.getElementById("li1_1").style.animationName = "rotate-one";
            document.getElementById("li2_1").style.animationName = "rotate-two";
            document.getElementById("li3_1").style.animationName = "rotate-three";
            document.getElementById("li4_1").style.animationName = "rotate-four";
            document.getElementById("firedanger_10").innerHTML = "Severity: severe";
            document.getElementById("li4_1").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_12").innerHTML = "Average Temperature is " + forecastdata_temp_1 + "℃";
            */
        }
        else if ((forecastdata_rating_1 === "extreme") || (forecastdata_rating_1 === "catastrophic (code red)")) {
            document.getElementById("li1_1").style.animationName = "rotate-one";
            document.getElementById("li2_1").style.animationName = "rotate-two";
            document.getElementById("li3_1").style.animationName = "rotate-three";
            document.getElementById("li4_1").style.animationName = "rotate-four";
            document.getElementById("li5_1").style.animationName = "rotate-five";
            document.getElementById("firedanger_10").innerHTML = "Severity: extreme";
            document.getElementById("li5_1").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_12").innerHTML = "Average Temperature is " + forecastdata_temp_1 + "℃";
            */
        }

        if (forecastdata_rating_2 === "low-moderate") {
            document.getElementById("li1_2").style.animationName = "rotate-one";
            document.getElementById("firedanger_20").innerHTML = "Severity: Low-Moderate";
            document.getElementById("li1_2").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_22").innerHTML = "Average Temperature is " + forecastdata_temp_2 + "℃";
            */
        }
        else if (forecastdata_rating_2 === "high") {
            document.getElementById("li1_2").style.animationName = "rotate-one";
            document.getElementById("li2_2").style.animationName = "rotate-two";
            document.getElementById("firedanger_20").innerHTML = "Severity: high";
            document.getElementById("li2_2").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_22").innerHTML = "Average Temperature is " + forecastdata_temp_2 + "℃";
            */
        }
        else if (forecastdata_rating_2 === "very high") {
            document.getElementById("li1_2").style.animationName = "rotate-one";
            document.getElementById("li2_2").style.animationName = "rotate-two";
            document.getElementById("li3_2").style.animationName = "rotate-three";
            document.getElementById("firedanger_20").innerHTML = "Severity: very high";
            document.getElementById("li3_2").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_22").innerHTML = "Average Temperature is " + forecastdata_temp_2 + "℃";
            */
        }
        else if (forecastdata_rating_2 === "severe") {
            document.getElementById("li1_2").style.animationName = "rotate-one";
            document.getElementById("li2_2").style.animationName = "rotate-two";
            document.getElementById("li3_2").style.animationName = "rotate-three";
            document.getElementById("li4_2").style.animationName = "rotate-four";
            document.getElementById("firedanger_20").innerHTML = "Severity: severe";
            document.getElementById("li4_2").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_22").innerHTML = "Average Temperature is " + forecastdata_temp_2 + "℃";
            */
        }
        else if ((forecastdata_rating_2 === "extreme") || (forecastdata_rating_2 === "catastrophic (code red)")) {
            document.getElementById("li1_2").style.animationName = "rotate-one";
            document.getElementById("li2_2").style.animationName = "rotate-two";
            document.getElementById("li3_2").style.animationName = "rotate-three";
            document.getElementById("li4_2").style.animationName = "rotate-four";
            document.getElementById("li5_2").style.animationName = "rotate-five";
            document.getElementById("firedanger_20").innerHTML = "Severity: extreme";
            document.getElementById("li5_2").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_22").innerHTML = "Average Temperature is " + forecastdata_temp_2 + "℃";
            */
        }


        if (forecastdata_rating_3 === "low-moderate") {
            document.getElementById("li1_3").style.animationName = "rotate-one";
            document.getElementById("firedanger_30").innerHTML = "Severity: Low-Moderate";
            document.getElementById("li1_3").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_32").innerHTML = "Average Temperature is " + forecastdata_temp_3 + "℃";
            */
        }
        else if (forecastdata_rating_3 === "high") {
            document.getElementById("li1_3").style.animationName = "rotate-one";
            document.getElementById("li2_3").style.animationName = "rotate-two";
            document.getElementById("firedanger_30").innerHTML = "Severity: high";
            document.getElementById("li2_3").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_32").innerHTML = "Average Temperature is " + forecastdata_temp_3 + "℃";
            */
        }
        else if (forecastdata_rating_3 === "very high") {
            document.getElementById("li1_3").style.animationName = "rotate-one";
            document.getElementById("li2_3").style.animationName = "rotate-two";
            document.getElementById("li3_3").style.animationName = "rotate-three";
            document.getElementById("firedanger_30").innerHTML = "Severity: very high";
            document.getElementById("li3_3").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_32").innerHTML = "Average Temperature is " + forecastdata_temp_3 + "℃";
            */
        }
        else if (forecastdata_rating_3 === "severe") {
            document.getElementById("li1_3").style.animationName = "rotate-one";
            document.getElementById("li2_3").style.animationName = "rotate-two";
            document.getElementById("li3_3").style.animationName = "rotate-three";
            document.getElementById("li4_3").style.animationName = "rotate-four";
            document.getElementById("firedanger_30").innerHTML = "Severity: severe";
            document.getElementById("li4_3").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_32").innerHTML = "Average Temperature is " + forecastdata_temp_3 + "℃";
            */
        }
        else if ((forecastdata_rating_3 === "extreme") || (forecastdata_rating_3 === "catastrophic (code red)")) {
            document.getElementById("li1_3").style.animationName = "rotate-one";
            document.getElementById("li2_3").style.animationName = "rotate-two";
            document.getElementById("li3_3").style.animationName = "rotate-three";
            document.getElementById("li4_3").style.animationName = "rotate-four";
            document.getElementById("li5_3").style.animationName = "rotate-five";
            document.getElementById("firedanger_30").innerHTML = "Severity: extreme";
            document.getElementById("li5_3").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_32").innerHTML = "Average Temperature is " + forecastdata_temp_3 + "℃";
            */
        }

        if (forecastdata_rating_4 === "low-moderate") {
            document.getElementById("li1_4").style.animationName = "rotate-one";
            document.getElementById("firedanger_40").innerHTML = "Severity: Low-moderate";
            document.getElementById("li1_4").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_42").innerHTML = "Average Temperature is " + forecastdata_temp_4 + "℃";
            */
        }
        else if (forecastdata_rating_4 === "high") {
            document.getElementById("li1_4").style.animationName = "rotate-one";
            document.getElementById("li2_4").style.animationName = "rotate-two";
            document.getElementById("firedanger_40").innerHTML = "Severity: high";
            document.getElementById("li2_4").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_42").innerHTML = "Average Temperature is " + forecastdata_temp_4 + "℃";
            */
        }
        else if (forecastdata_rating_4 === "very high") {
            document.getElementById("li1_4").style.animationName = "rotate-one";
            document.getElementById("li2_4").style.animationName = "rotate-two";
            document.getElementById("li3_4").style.animationName = "rotate-three";
            document.getElementById("firedanger_40").innerHTML = "Severity: very high";
            document.getElementById("li2_4").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_42").innerHTML = "Average Temperature is " + forecastdata_temp_4 + "℃";
            */
        }
        else if (forecastdata_rating_4 === "severe") {
            document.getElementById("li1_4").style.animationName = "rotate-one";
            document.getElementById("li2_4").style.animationName = "rotate-two";
            document.getElementById("li3_4").style.animationName = "rotate-three";
            document.getElementById("li4_4").style.animationName = "rotate-four";
            document.getElementById("firedanger_40").innerHTML = "Severity: severe";
            document.getElementById("li4_4").style.borderTopStyle = "solid";
            /* document.getElementById("firedanger_42").innerHTML = "Average Temperature is " + forecastdata_temp_4 + "℃";
            */
        }
        else if ((forecastdata_rating_4 === "extreme") || (forecastdata_rating_4 === "catastrophic (code red)")) {
            document.getElementById("li1_4").style.animationName = "rotate-one";
            document.getElementById("li2_4").style.animationName = "rotate-two";
            document.getElementById("li3_4").style.animationName = "rotate-three";
            document.getElementById("li4_4").style.animationName = "rotate-four";
            document.getElementById("li5_4").style.animationName = "rotate-five";
            document.getElementById("firedanger_40").innerHTML = "Severity: exrteme";
            document.getElementById("li5_4").style.borderTopStyle = "solid";
            /*document.getElementById("firedanger_42").innerHTML = "Average Temperature is " + forecastdata_temp_4 + "℃";
            */
        }
        if (forecastdata_rating_5 === "low-moderate") {
            document.getElementById("li1_5").style.animationName = "rotate-one";
            document.getElementById("firedanger_50").innerHTML = "Severity: Low-moderate";
            document.getElementById("li1_5").style.borderTopStyle = "solid";
            //document.getElementById("firedanger_52").innerHTML = "Average Temperature is " + forecastdata_temp_5 + "℃";
        }
        else if (forecastdata_rating_5 === "high") {
            document.getElementById("li1_5").style.animationName = "rotate-one";
            document.getElementById("li2_5").style.animationName = "rotate-two";
            document.getElementById("firedanger_50").innerHTML = "Seevrity: high";
            document.getElementById("li2_5").style.borderTopStyle = "solid";
            //document.getElementById("firedanger_52").innerHTML = "Average Temperature is " + forecastdata_temp_5 + "℃";
        }
        else if (forecastdata_rating_5 === "very high") {
            document.getElementById("li1_5").style.animationName = "rotate-one";
            document.getElementById("li2_5").style.animationName = "rotate-two";
            document.getElementById("li3_5").style.animationName = "rotate-three";
            document.getElementById("firedanger_50").innerHTML = "Seevrity: very high";
            document.getElementById("li3_5").style.borderTopStyle = "solid";
            //document.getElementById("firedanger_52").innerHTML = "Average Temperature is " + forecastdata_temp_5 + "℃";
        }
        else if (forecastdata_rating_5 === "severe") {
            document.getElementById("li1_5").style.animationName = "rotate-one";
            document.getElementById("li2_5").style.animationName = "rotate-two";
            document.getElementById("li3_5").style.animationName = "rotate-three";
            document.getElementById("li4_5").style.animationName = "rotate-four";
            document.getElementById("firedanger_50").innerHTML = "Severity:severe";
            document.getElementById("li4_5").style.borderTopStyle = "solid";
            //document.getElementById("firedanger_52").innerHTML = "Average Temperature is " + forecastdata_temp_5 + "℃";
        }
        else if ((forecastdata_rating_5 === "extreme") || (forecastdata_rating_5 === "catastrophic (code red)")) {
            document.getElementById("li1_5").style.animationName = "rotate-one";
            document.getElementById("li2_5").style.animationName = "rotate-two";
            document.getElementById("li3_5").style.animationName = "rotate-three";
            document.getElementById("li4_5").style.animationName = "rotate-four";
            document.getElementById("li5_5").style.animationName = "rotate-five";
            document.getElementById("firedanger_50").innerHTML = "Severity: extreme";
            document.getElementById("li5_5").style.borderTopStyle = "solid";
            //document.getElementById("firedanger_52").innerHTML = "Average Temperature is " + forecastdata_temp_5 + "℃";
        }

        var weatherurl = "https://api.tomorrow.io/v4/timelines?location=" + forecastdata_latitude + "," + forecastdata_longtitude + "&fields=temperature&timesteps=1d&units=metric&apikey=zMAXh4NpzYZZGYKIXA0zTNrFeZCM1Lce";
        $.getJSON(weatherurl, function (weather) {
            weather.data.timelines[0].intervals[0].values.temperature;
        })
    })
}

mapboxgl.accessToken = 'pk.eyJ1IjoiamRhaDAwMDEiLCJhIjoiY2ttb3pvMmYyMjlsdzJvdDRzc3R3ZWp1bSJ9.k4l8C8SfWsC8GDxRwdp4xQ'
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jdah0001/ckn43upw24mwn18nz8ko60usa',
    center: [145.5139, -37.6561],
    zoom: 12
});
var marker1 = new mapboxgl.Marker({ color: 'black' })
    .setLngLat([145.5139, -37.6561])
    .setPopup(new mapboxgl.Popup().setHTML("<h6>" + "Search your location to see the severity" + "</h6>"))
    .addTo(map);
function myfunction() {
    var location = document.getElementById('search').value;
    var jsonurl = 'https://fireprediction.ga/forecast?locality=' + location;
    var forecastdata_longtitude = "";
    var forecastdata_latitude = "";
    var forecastdata_FFDI = "";
    $.getJSON(jsonurl, function (data) {
        forecastdata_latitude = data.latitude;
        forecastdata_longtitude = data.longitude;
        forecastdata_FFDI = data.days[0].FFDI_category;
        b = parseFloat(forecastdata_latitude);
        a = parseFloat(forecastdata_longtitude);
        mapboxgl.accessToken = 'pk.eyJ1IjoiamRhaDAwMDEiLCJhIjoiY2ttb3pvMmYyMjlsdzJvdDRzc3R3ZWp1bSJ9.k4l8C8SfWsC8GDxRwdp4xQ'
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/jdah0001/ckn43upw24mwn18nz8ko60usa',
            center: [a, b],
            zoom: 12
        });
        var text = forecastdata_FFDI;
        var marker1 = new mapboxgl.Marker({ color: 'black' })
            .setLngLat([a, b])
            .setPopup(new mapboxgl.Popup().setHTML("<h2>" + text + "</h2>"))
            .addTo(map);
        mapboxgl.accessToken = 'pk.eyJ1IjoiamRhaDAwMDEiLCJhIjoiY2ttb3pvMmYyMjlsdzJvdDRzc3R3ZWp1bSJ9.k4l8C8SfWsC8GDxRwdp4xQ';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/jdah0001/ckn43upw24mwn18nz8ko60usa',
            center: [a, b],
            zoom: 12
        });
        var text = forecastdata_FFDI;
        var marker1 = new mapboxgl.Marker({ color: 'black' })
            .setLngLat([a, b])
            .setPopup(new mapboxgl.Popup().setHTML("<h2>" + text + "</h2>"))
            .setPopup(new mapboxgl.Popup().setHTML("<h6>" + "Today - you are safe " + "<br>" + "<br>" + "Severity:" + text + "</h6>"))
            .addTo(map);
    })
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

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