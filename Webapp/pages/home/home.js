(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            WinJS.Utilities.query("a").listen("click", 
                this.linkClickEventHandler, false);
            console.log("run");
            var theater = new TheaterJS()
            theater.describe("Typophobe", { speed: .8, accuracy: .4, invincibility: 0.5 }, "#typophobe");
            var i = 0;
            theater.write("Typophobe:Typophobe", 400);
        },
        linkClickEventHandler: function (eventInfo) {
        eventInfo.preventDefault();
        var link = eventInfo.currentTarget;
        WinJS.Navigation.navigate(link.href);
       
        }
    }
    );

})();

