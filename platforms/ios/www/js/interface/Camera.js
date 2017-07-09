/**
 * Created by rafaelguerreroclemente
 */

define(function() {

    var Camera = function(element) {
        this.element = element;

        registerListeners.call(this);
    };

    Camera.prototype = {
        element: null,

        openCamera : function() {
            alert("Tap Camera");
        }
    };

    function registerListeners() {
        this.element.addEventListener("click", this.openCamera);
    }

    return Camera;
});