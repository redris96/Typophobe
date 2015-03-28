// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Test/Test.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
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

var legit = "The quick brown fox jumped over the lazy dog.";
var i = 0;
var flag = 1;
var whole;
var gc = 0;
var c, wc = 0;
function x() {
    var change = document.getElementById("typeit").value;
    var len = change.length;
    if (change[len - 1] == " ") {
        document.getElementById("typeit").value = "";
        if (flag == 0) {
            gc += c + 1;
            while (legit[i] != " " && i < legit.length)
                i++;
            i++;
            wc++;
            document.getElementById("wc").innerHTML = "Words:" + wc;
            document.getElementById("acc").innerHTML = "Accuracy: " + (Number((gc / i) * 100).toPrecision(4)).toString() + "%";
            //Highlight the next word
            flag = 1;
        }
    }
    else {
        flag = 0;
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
        if (change.length > li - i)
            fl = 1;
        if (change[j - 1] == legit[li - 1] && fl == 0)
            c = c; //document.getElementById("body").style.backgroundColor = "green";
        else {
            //document.getElementById("body").style.backgroundColor = "red";
            c = 0;
        }
    }
}

function reset() {
    i = 0;
    flag = 1;
    gc = 0;
    c, wc = 0;
}