/**
 * Created by rafaelguerreroclemente
 */

define(["interface/Camera",
        "interface/NewFolder"], function(Camera, NewFolder) {

    var Interface = function(element) {
        this.element = element;
        this.newFolder = new NewFolder(document.querySelector("#newFolder"));
        this.camera = new Camera(document.querySelector("#openCamera"));
    };

    Interface.prototype = {
        element: null,
        newFolder: null,
        camera : null
    };

    return Interface;
});