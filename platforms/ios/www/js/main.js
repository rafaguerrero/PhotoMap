/**
 * Created by rafaelguerreroclemente
 */

require(["Camera",
         "NewFolder",
         "Folders",
         "utils/FileSystem"],

function(Camera, NewFolder, Folders, FileSystem) {

    var app = {
        initialize: function () {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },

        onDeviceReady: function () {
            var folders = document.querySelector(".folders");

            FileSystem.initialize(function(){
                new Folders(folders);
                new NewFolder(document.querySelector("#newFolder"), folders);
                new Camera(document.querySelector("#openCamera"));

                document.body.classList.remove("loading");
            });
        }
    };

    app.initialize();
});