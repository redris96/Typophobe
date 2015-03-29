// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/High Scores/High_Scores.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
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
function load() {
    document.getElementById("high").innerHTML = "" + "<div class="first" > 1st </div> "+localStorage.getItem("top1") +"<div class="second" ><br>2nd </div> "+ localStorage.getItem("top2") +"<div class="third" ><br>3rd </div> "+ localStorage.getItem("top3");
}