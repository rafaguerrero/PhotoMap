/**
 * Created by rafaelguerreroclemente
 */

define(function() {

    var NewFolder = function(element) {
        this.element = element;

        registerListeners.call(this);
    };

    NewFolder.prototype = {
        element: null,

        newFolder : function() {
            alert("Tap NewFolder");
        }
    };

    function registerListeners() {
        this.element.addEventListener("click", this.newFolder);
    }

    return NewFolder;
});