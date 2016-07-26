/**
 * Created by rafaelguerreroclemente
 */

require(["Camera",
         "NewFolder",
         "Folders"], function(Camera, NewFolder, Folders) {

    var app = {
        initialize: function () {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },

        onDeviceReady: function () {
            document.body.classList.remove("loading");

            new Camera(document.querySelector("#openCamera"));
            new NewFolder(document.querySelector("#newFolder"));

            new Folders(document.querySelector(".folders"));
        }
    };

    app.initialize();
});