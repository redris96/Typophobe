// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Modes/Modes.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var list = JSON.parse(localStorage.getItem("LIST"));
            var totalstr = localStorage.getItem("TOTAL");
            var total = parseInt(totalstr);
            var i;
            var test = "";
            for (i = 0; i < total; i++) {
                var btn = document.createElement("BUTTON");
                btn.innerText = list[i];
                btn.onclick = "\"loadPara(\"" + list[i] + "\")\"";
                document.getElementById("LIST").appendChild(btn);
            }
            
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
    localStorage.setItem("default",localStorage.getItem("html"));
}
function quickC() {
    var input = document.getElementById("QuickCustom").value;
    localStorage.setItem("default", input);
    var msg = Windows.UI.Popups.MessageDialog("ADDED!");
    msg.showAsync();
}