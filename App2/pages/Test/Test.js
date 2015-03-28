// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Test/Test.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            document.getElementById("dis").innerHTML = '<span style="background-color: #fcf700">' + legit + '</span>';
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
/*function togglefunc() {
    var toggle = document.getElementById("toggle1");
    if (toggle.checked == checked) {
        music.play;
    } else {
        music.pause;
    }
}*/
var legit = 'Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.';
var i = 0;
var flag = 1;
var whole;
var gc = 0;
var c, wc = 0;
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
            gc += c + 1;
            while (legit[i] != " " && i < legit.length)
                i++;
            i++;
            wc++;
            document.getElementById("wc").innerHTML = "WPM: " + parseInt(wc/(60-timeInSecs)*60);
            document.getElementById("acc").innerHTML = "Accuracy: " + (Number((gc / i) * 100).toPrecision(4)).toString() + "%";
            //Highlight the next word
            document.getElementById("dis").innerHTML = legit.substr(0, i) + '<span style="background-color: #fcf700">' + legit.substr(i) + "</span>";
            flag = 1;
        }
    }
    else {
        flag = 0;
    }
}

function reset() {
    i = 0;
    flag = 1;
    gc = 0;
    c, wc = 0; state = 0;
    document.getElementById("dis").innerHTML = '<span style="background-color: #fcf700">' + legit + '</span>';
    document.getElementById("wc").innerHTML = "Words: 0";
    document.getElementById("acc").innerHTML = "Accuracy: 0%";
    clearInterval(ticker);
    document.getElementById("countdown").innerHTML = "Countdown: 60";
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
        clearInterval(ticker); // stop counting at zero
        // startTimer(60);  // remove forward slashes in front of startTimer to repeat if required
    }

    document.getElementById("countdown").innerHTML = "Countdown: " + secs;
}