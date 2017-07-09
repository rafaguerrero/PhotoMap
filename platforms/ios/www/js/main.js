/**
 * Created by rafaelguerreroclemente
 */

require(["Interface",
         "Folders",
         "utils/FileSystem"],

function(Interface, Folders, FileSystem) {

    var app = {
        initialize: function () {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },

        onDeviceReady: function () {
            var folders = document.querySelector(".folders");

            FileSystem.initialize(function(){
                new Folders(document.querySelector(".folders"));
                new Interface();

                document.body.classList.remove("loading");
            });
        }
    };

    app.initialize();
});