// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Settings/Settings.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            if (localStorage.getItem("Music") == "ON") {
                document.getElementById("musiccheck").checked =true;
            }else{
                document.getElementById("musiccheck").checked = false;
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
function musicchange() {
    if(document.getElementById("musiccheck").checked ==false){
        localStorage.setItem("Music","OFF");
    }else{
        localStorage.setItem('Music', 'ON');
    }
        
}
function resetdef() {
    localStorage.setItem("top1","0");
    localStorage.setItem("top2","0");
    localStorage.setItem("top3","0");
    localStorage.setItem("Music", "OFF");
}