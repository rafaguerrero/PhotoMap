/**
 * Created by rafaelguerreroclemente
 */

define(function() {
    var ROOT_FOLDER = "PhotoMap",
        FileSystem,
        _fileSystem = null,
        _appRootDir = null,
        _callbacks = [];

    function gotFS(mainCallback, fs) {
        _fileSystem = fs;

        FileSystem.createFolder("", function(entry){
            _appRootDir = entry;
            resolvePendingCallbacks();
            mainCallback();
        });
    }

    function resolvePendingCallbacks() {
        for(var i = 0, length = _callbacks.length; i < length; i++) {
            _callbacks[i]();
        }
    }

    FileSystem = {
        initialize : function(callback) {
            var requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
            requestFileSystem(LocalFileSystem.PERSISTENT, 0,
                gotFS.bind(this, callback),
                function(){ console.log("Error initializing FileSystem") });
        },

        createFolder : function(path, successCallback, errorCallback) {
            if(!_fileSystem) {
                _callbacks.push(this.createFolder.bind(this, path, successCallback, errorCallback));

            } else {
                _fileSystem.root.getDirectory(ROOT_FOLDER + path,
                    { create : true, exclusive : false },
                    successCallback,
                    errorCallback
                );
            }
        },

        iterate : function(path, successCallback, errorCallback) {

            if(!_appRootDir) {
                _callbacks.push(this.iterate.bind(this, path, successCallback, errorCallback));

            } else {
                window.resolveLocalFileSystemURL(
                    _appRootDir.nativeURL,

                    function (fileSystem) {
                        var reader = fileSystem.createReader();

                        reader.readEntries(
                            function(entries){
                                for(var i = 0, length = entries.length; i < length; i++) {
                                    successCallback(entries[i]);
                                }
                            },

                            errorCallback
                        );
                    },

                    errorCallback
                );
            }
        }
    };

    return FileSystem;
});