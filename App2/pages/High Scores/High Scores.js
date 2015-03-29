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
    document.getElementById("high").innerHTML = "" + "<div  class=\" first\" >1:" + "\t\t\t" + parseInt(localStorage.getItem("top1")) + "</div> <div  class=\" second\" >2: " + "\t\t\t" + parseInt(localStorage.getItem("top2")) + "</div> <div   class=\" third\" >3: " + "\t\t\t" + parseInt(localStorage.getItem("top3")) + "</div>";
}