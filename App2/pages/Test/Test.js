// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Test/Test.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            
            document.getElementById("dis").innerHTML = '<span style="background-color: #9c8c8c">' + legit.substr(0, tp) + '</span>' + legit.substring(tp);
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
var para = localStorage.getItem("default");
var legit = para;
var i = 0;
var tp = 0;
while (legit[tp] != " ") tp++;
var flag = 1;
var wh=94;
var gc = 0;
var c, wc = 0, pr = 0;
var u = legit.length;
function x(event) {
    var a = event.keyCode;
    if (a==32) {
        var change = document.getElementById("typeit").value;
        document.getElementById("typeit").value = "";
        if (flag == 0) {
            var fl = 0;
            var li = i;
            c = 0;
            for (j = 0; j < change.length && li < legit.length && legit[li] != " "; li++, j++) {
                if (change[j] == legit[li])
                    c++;
                else {
                    fl = 1;
                    break;
                }
            }
            if (change.length > li - i+1)
                fl = 1;
            if (fl == 1)
                c = 0;
            gc += c;
            while (legit[i] != " " && i < legit.length)
                i++;
            i++;
            wc++;
            document.getElementById("wc").innerHTML = "WPM: " + parseInt(wc/(60-timeInSecs)*60);
            document.getElementById("acc").innerHTML = "Accuracy: " + (Number((gc / (i-wc)) * 100).toPrecision(4)).toString() + "%";
            //scroll
            if (i>wh)
            {
                doScroll();
                wh += 47;
            }
            //Highlight the next word
            var v = i;
            while (legit[v] != " ") v++;
            var temp = document.getElementById("dis").innerHTML;
            if (c == 0)
                document.getElementById("dis").innerHTML = legit.substring(0,pr) + '<span style="color: #ff0000">' + legit.substr(pr, i - pr) + "</span>" + '<span style="background-color: #9c8c8c">' + legit.substr(i, v - i) + "</span>" + legit.substr(v);
            else
                document.getElementById("dis").innerHTML = legit.substring(0,pr) + '<span style="color: #00ff21">' + legit.substr(pr, i - pr) + "</span>" + '<span style="background-color: #9c8c8c">' + legit.substr(i, v - i) + "</span>" + legit.substr(v);
            flag = 1; pr = i;
        }
    }
    else {
        flag = 0;
    }
}

function reset() {
    /*var msg = new Windows.UI.Popups.MessageDialog("WPM: " + wc + "\nAccuracy: " + (Number((gc / i) * 100).toPrecision(4)).toString() + "%");
    msg.commands.append(new Windows.UI.Popups.UICommand(
            "Try again",));
    msg.commands.append(
        new Windows.UI.Popups.UICommand("Back", commandInvokedHandler));
    msg.showAsync();*/
    document.getElementById("typeit").value = "";
    i = 0;
    flag = 1; wh = 94;
    gc = 0; pr = 0;
    c, wc = 0; state = 0; up();
    document.getElementById("dis").innerHTML = '<span style="background-color: #9c8c8c">' + legit.substr(0, tp) + '</span>' + legit.substr(tp);
    document.getElementById("wc").innerHTML = "Words: 0";
    document.getElementById("acc").innerHTML = "Accuracy: 0%";
    clearInterval(ticker);
    document.getElementById("countdown").innerHTML = "Countdown: 60";
    document.getElementById("typeit").focus();
    document.getElementById("typeit").disabled = false;
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
        var msg = new Windows.UI.Popups.MessageDialog("");
        msg.title="WPM: " + wc + "         Accuracy: " + (Number((gc / i) * 100).toPrecision(4)).toString() + "%"
        /*msg.commands.append(new Windows.UI.Popups.UICommand(
                "Try again",));
        msg.commands.append(
            new Windows.UI.Popups.UICommand("Back", commandInvokedHandler));*/
        msg.showAsync();
    }
    
    document.getElementById("countdown").innerHTML = "Countdown: " + secs;
}

function dis() {
    document.getElementById("typeit").disabled = true;
}

function doScroll() {
<<<<<<< HEAD
    $('#dis').scrollTop($('#dis').scrollTop() + 10);
}
=======
    //$('#dis').scrollTop($('#dis').scrollTop() + 53);
    var lol = $("#dis").scrollTop();
    $("#dis").animate({ scrollTop: lol+53}, "slow");
}

function up(){
    $("#dis").animate({ scrollTop: 0 }, "fast");
}
>>>>>>> 6831a9ede37c3a86eac0c1e5424f34364fadae03
