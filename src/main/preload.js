const {contextBridge, ipcRenderer} = require('electron');
const sourceMapSupport = require('source-map-support/source-map-support.js');

contextBridge.exposeInMainWorld('ScratchDesktop', {
    sourceMapSupport
});

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send (...args) {
            return ipcRenderer.send(...args);
        },
        sendSync (...args) {
            return ipcRenderer.sendSync(...args);
        },
        invoke (...args) {
            return ipcRenderer.invoke(...args);
        },
        on (...args) {
            return ipcRenderer.on(...args);
        },
        removeListener (...args) {
            return ipcRenderer.removeListener(...args);
        }
    }
});
