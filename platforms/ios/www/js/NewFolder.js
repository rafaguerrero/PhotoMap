/**
 * Created by rafaelguerreroclemente
 */

define(["utils/FileSystem"], function(FileSystem) {

    var NewFolder = function(element, folders) {
        this.element = element;
        this.mainWrapper = folders;

        registerListeners.call(this);
    };

    NewFolder.prototype = {
        element: null,

        newFolder : function() {
            var currentPath = this.mainWrapper.getAttribute("data-folders-path");

            FileSystem.createFolder(
                "/" + currentPath  + Date.now(),

                function success(){
                    this.mainWrapper.folders && this.mainWrapper.folders.renderFolders();
                }.bind(this),

                function error(){
                    alert("Error")
                }.bind(this));
        }
    };

    function registerListeners() {
        this.element.addEventListener("click", this.newFolder.bind(this));
    }

    return NewFolder;
});