const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('ScratchDesktop', {
    versions: process.versions
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
