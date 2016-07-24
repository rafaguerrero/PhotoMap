/**
 * Created by rafaelguerreroclemente on 24/7/16.
 */

define(function() {

    var Map = function() {
        registerListeners.call(this);
    };

    Map.prototype = {

        tapHandler : function() {
            alert("Tap");
        }
    };

    function registerListeners() {
        document.querySelector("#map").addEventListener("click", this.tapHandler);
    }

    return Map;
});