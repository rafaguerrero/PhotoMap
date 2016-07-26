/**
 * Created by rafaelguerreroclemente
 */

define(function() {

    var Folders = function(element) {
        this.element = element;

        fillFolders.call(this);
    };

    Folders.prototype = {
        element: null,

        newFolder : function() {
            alert("Tap Folders");
        }
    };

    function fillFolders() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    }

    function gotFS(fileSystem) {
        fileSystem.root.getDirectory("data", {create: true}, gotDir);
    }

    function gotDir(dirEntry) {
        dirEntry.getFile("lockfile.txt", {create: true, exclusive: true}, gotFile);
    }

    function gotFile(fileEntry) {
        debugger;
    }

    return Folders;
});