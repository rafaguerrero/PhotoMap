/**
 * Created by rafaelguerreroclemente
 */

define(["utils/FileSystem"], function(FileSystem) {

    var NewFolder = function(element) {
        this.element = element;

        this.foldersElement = document.querySelector(".folders");
        this.popup = document.querySelector(".newFolderPopup");

        initializePopup.call(this);
        registerListeners.call(this);
    };

    NewFolder.prototype = {
        element: null,
        foldersElement: null,
        popup: null,

        showPopup: function() {
            if(this.popup.classList.contains("show")) {
                this.popup.classList.remove("show");
            } else {
                this.popup.classList.add("show");
            }
        },

        newFolder : function() {
            var currentPath = this.foldersElement.getAttribute("data-folders-path");

            FileSystem.createFolder(
                "/" + currentPath  + Date.now(),

                function success(){
                    this.foldersElement.folders && this.foldersElement.folders.renderFolders();
                }.bind(this),

                function error(){
                    alert("Error")
                }.bind(this));
        }
    };

    function initializePopup() {
        var geo = this.popup.querySelector(".newFolderPopup__button--geo");
        geo.addEventListener("click", geoButtonHandler)

        var text = this.popup.querySelector(".newFolderPopup__button--text");
        text.addEventListener("click", textButtonHandler)
    }

    function geoButtonHandler() {
        alert("GEO");
    }

    function textButtonHandler() {
        alert("Text");
    }

    function registerListeners() {
        this.element.addEventListener("click", this.showPopup.bind(this));
    }

    return NewFolder;
});