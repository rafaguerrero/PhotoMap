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
            FileSystem.createFolder(
                "/" + Date.now(),

                function success(){
                    this.mainWrapper.folders && this.mainWrapper.folders.renderFolders();
                },

                function error(){
                    alert("Error")
                });
        }
    };

    function registerListeners() {
        this.element.addEventListener("click", this.newFolder);
    }

    return NewFolder;
});