/**
 * Created by rafaelguerreroclemente on 24/7/16.
 */

require(["Map"], function(Map) {

    var app = {
        initialize: function () {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },

        onDeviceReady: function () {
            var map = new Map();
        }
    };

    app.initialize();
});