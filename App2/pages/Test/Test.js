// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Test/Test.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            console.log("Initialized");
            var temp = localStorage.getItem("Music");
            console.log("Music checked");
            console.log("legit before : " + legit);
            randomize();
            console.log("legit now : " + legit);
            if (temp == "ON") {
                toggleMusic();     
            }
            console.log("music loaded");
            document.getElementById("dis").innerHTML = '<span style="background-color: #9c8c8c">' + legit.substr(0, tp) + '</span>' + legit.substring(tp);
            console.log("para loaded");
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
function toggleMusic() {
    
    if (document.getElementById("musicButton").innerText == "Music: ON") {
        document.getElementById("music").pause();
        document.getElementById("musicButton").innerHTML = "Music: OFF";
    } else {
        document.getElementById("music").play();
        document.getElementById("musicButton").innerHTML = "Music: ON";
    }
    
}
//var x = Math.floor((Math.random() * 4) + 1);
//var para = localStorage.getItem("" + x);
console.log("first load");
var nx,was=0;
var legit="";
var i = 0;
var tp = 0;
//while (legit[tp] != " ") tp++;
console.log("first word");
var flag = 1;
var wh = 98;
var gc = 0;
var c, wc = 0, pr = 0;
var u;
function setup() {
    document.getElementById("typeit").value = "";
    i = 0;
    flag = 1; wh = 100;
    gc = 0; pr = 0;
    c, wc = 0; state = 0; up();
    legit = localStorage.getItem("default");
}
function x(event) {
    startTimer(60);
   /* 
    (".spinner").Test('animation-play-state', 'running');
    ("filler").Test('animation-play-state', 'running');
    ("mask").Test('animation-play-state', 'running');
    */
    var display = document.getElementById("dis");
    var a = event.keyCode;
    if (a==32) {
        var change = document.getElementById("typeit").value;
        document.getElementById("typeit").value = "";
        change = change.trim();
        //change.replace(/</g, "&lt;");
        //change.replace(/>/g, "&gt;");
        //change.replace(/&/g, "&amp;");
        if (flag == 0) {
            var fl = 0,cl=change.length;
            var li = i;
            c = 0;
            for (j = 0; j < cl && li < u && legit[li] != " "; li++, j++) {
                if (change[j] == legit[li])
                    c++;
                else {
                    fl = 1;
                    break;
                }
            }
            while (legit[i] != " " && i < u)
                i++;
            i++;
            if (cl != i-pr-1)
                fl = 1;
            if (fl == 1)
                c = 0;
            gc += c;
            wc++;
            document.getElementById("wc").innerHTML = "WPM: " + parseInt(wc/(60-timeInSecs)*60);
            document.getElementById("acc").innerHTML = "Accuracy: " + (Number((gc / (i-wc)) * 100).toPrecision(4)).toString() + "%";
            //scroll
            if (i > u)
            { timeInSecs = 0; return; }
            if (i>wh)
            {
                doScroll();
                wh += 49;
            }
            //Highlight the next word
            var v = i;
            while (legit[v] != " " && v < u ) v++;
            var temp = display.innerHTML;
            if (c == 0)
                display.innerHTML = legit.substring(0,pr) + '<span style="color: #ff0000">' + legit.substr(pr, i - pr) + "</span>" + '<span style="background-color: #9c8c8c">' + legit.substr(i, v - i) + "</span>" + legit.substr(v);
            else
                display.innerHTML = legit.substring(0,pr) + '<span style="color: #00ff21">' + legit.substr(pr, i - pr) + "</span>" + '<span style="background-color: #9c8c8c">' + legit.substr(i, v - i) + "</span>" + legit.substr(v);
            flag = 1; pr = i;
            if (i > u)
                timeInSecs = 0;

        }
    }
    else {
        flag = 0;
    }
}
function load() {
    setup();
    u = legit.length;
    tp = 0;
    while (legit[tp] != " ") tp++;
    document.getElementById("dis").innerHTML = '<span style="background-color: #9c8c8c">' + legit.substr(0, tp) + '</span>' + legit.substr(tp);
    document.getElementById("wc").innerHTML = "WPM: 0";
    document.getElementById("acc").innerHTML = "Accuracy: 0%";
    clearInterval(ticker);
    document.getElementById("countdown").innerHTML = "Countdown: 60";
    document.getElementById("typeit").focus();
    document.getElementById("typeit").disabled = false;

}

function randomize() {
    var temp = nx;
    curr = localStorage.getItem("currentMode");
    if (curr == "quickcustom") {
        if (was == 0)
            was = 1;
        else {
            curr = "defaultmode";
            localStorage.setItem("currentMode", "defaultmode");
            was = 0;
        }
    }
    var oh = parseInt(localStorage.getItem(curr));
    if (oh != 1) {
        while (temp == nx)
            nx = Math.floor((Math.random() * oh) + 1);
    } else {
        nx = Math.floor((Math.random() * oh) + 1);
    }
    localStorage.setItem("default", localStorage.getItem(curr + nx.toString()));
    load();
    console.log("Randomized");

}

var timeInSecs;
var ticker;
var state=0;

function startTimer(secs) {
    if (state == 0) {
        timeInSecs = parseInt(secs) - 1;
        ticker = setInterval("tick()", 1000);   // every second
        state = 1;
    }
}

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    }
    else {
        clearInterval(ticker);
        dis();

        var acc=(Number((gc / (i-wc)) * 100).toPrecision(4));
        var ch = acc * wc / 100;
        var msgBox = document.getElementById("messageBox");
        msgBox.innerHTML = document.getElementById("wc").innerHTML + " Accuracy: " + (Number((gc / (i - wc)) * 100).toPrecision(4)).toString() + "%";
        $(msgBox).slideDown(1000, function () { setTimeout(function () { $(msgBox).slideUp(1000, function () { randomize();}) }, 2000); });
        var scores = JSON.parse(localStorage["scores"]);
        var score = {};
        score["type"] = localStorage.getItem("currentMode");
        score["wpm"] = document.getElementById("wc").innerHTML;
        score["accuracy"] = (Number((gc / (i - wc)) * 100).toPrecision(4));
        console.log(JSON.stringify(score));
        scores["scores"].push(score);
        localStorage["scores"] = JSON.stringify(scores);
    }
    document.getElementById("countdown").innerHTML = "Countdown: " + secs;
}

function dis() {
    document.getElementById("typeit").disabled = true;
}

function doScroll() {
    //$('#dis').scrollTop($('#dis').scrollTop() + 53);
    var sc = $("#dis").height() * .125;
    var lol = $("#dis").scrollTop(); 
    $("#dis").animate({ scrollTop: lol+sc}, "slow");
}

function up(){
    $("#dis").animate({ scrollTop: 0 }, "fast");
}
