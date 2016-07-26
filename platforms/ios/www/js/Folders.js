/**
 * Created by rafaelguerreroclemente
 */

define(["utils/FileSystem"], function(FileSystem) {

    var Folders = function(element) {
        this.element = element;
        this.element.folders = this;

        this.renderFolders.call(this);
    };

    Folders.prototype = {
        element: null,

        renderFolders: function () {
            this.element.innerHTML = "";

            FileSystem.iterate(
                this.element.getAttribute("data-folders-path"),
                createFolders.bind(this),
                errorHandler.bind(this))
        }
    };

    function createFolders(folderData) {
        var folder = createFolder(folderData);
        this.element.appendChild(folder);

        folder.addEventListener("click", function(){
            alert("Folder clicked");
        });
    }

    function createFolder(folderData) {
        var folderWrapper = document.createElement("div");
        folderWrapper.className = "folder";

        var folder = document.createElement("div");
        folder.className = "folder__icon";

        var label = document.createElement("span");
        label.className = "folder__label";
        label.innerText = folderData.name;

        folderWrapper.appendChild(folder);
        folderWrapper.appendChild(label);

        return folderWrapper;
    }

    function errorHandler() {
        alert("Error");
    }

    return Folders;
});