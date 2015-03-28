﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            WinJS.Utilities.query("a").listen("click", 
                this.linkClickEventHandler, false);
            var temp = localStorage.getItem("default");
            console.log(temp);
            var msg = Windows.UI.Popups.MessageDialog("YOlo");
        },
        linkClickEventHandler: function (eventInfo) {
        eventInfo.preventDefault();
        var link = eventInfo.currentTarget;
        WinJS.Navigation.navigate(link.href);
    }
    });

})();


