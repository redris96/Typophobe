// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Modes/Modes.html", {
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
function loadPara(x) {
    localStorage.setItem("currentMode",x);
    var msg = Windows.UI.Popups.MessageDialog("Mode Applied! Please press Reset Button in Test Page");
    msg.showAsync();
}
function quickC() {
    var input = document.getElementById("QuickCustom").value;
    localStorage.setItem("default", input.trim());
    var msg = Windows.UI.Popups.MessageDialog("Mode Applied! Please press Reset Button iyolon Test Page");
    msg.showAsync();
}