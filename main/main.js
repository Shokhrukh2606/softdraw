const {app, BrowserWindow, ipcMain,Notification } = require('electron');

var welcomeWindow;
async function createWelcome() {
  welcomeWindow = await new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    },
    frame:false,
    transparent:true
  });
  welcomeWindow.loadFile("./main/preload.html");
  welcomeWindow.once('ready-to-show', () => {
    welcomeWindow.show();
  });
  setTimeout(createMain,4000);
}
async function createMain() {
  
  const mainWindow = await new BrowserWindow({
    width: 1000,
    height: 800,
    show:false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  welcomeWindow.close();
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

}


app.whenReady().then(createWelcome)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


