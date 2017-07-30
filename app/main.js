var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function () {

    if (process.platform != 'darwin')

        app.quit();

});

app.on('ready', function () {

    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600,
        minHeight: 300,
        minWidth: 500,
        frame: false,
        titleBarStyle: 'customButtonsOnHover',
        
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {

        mainWindow = null;

    });

});