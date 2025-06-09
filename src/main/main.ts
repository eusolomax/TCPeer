import { app, BrowserWindow, ipcMain, session, Menu, nativeImage, Tray, screen } from 'electron';
import { join } from 'path';

let tray

const icon = nativeImage.createFromPath('assets/TCPEER.jpg')

let primaryDisplay;
let mainWindowWidth = 600
let mainWindowHeight = 400

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: mainWindowWidth,
    height: mainWindowHeight,
    resizable: false,
    title: 'TCPeer',
    icon: icon,
    autoHideMenuBar: true,
    x: primaryDisplay ? primaryDisplay.bounds.width - mainWindowWidth - 10 : 0,
    y: 0,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2];
    mainWindow.loadURL(`http://localhost:${rendererPort}`);
  }
  else {
    mainWindow.loadFile(join(app.getAppPath(), 'renderer', 'index.html'));
  }
}


app.whenReady().then(() => {
  // createWindow();
  setTray();

  primaryDisplay = screen.getPrimaryDisplay()

  console.log('DIPSLAY', screen.getPrimaryDisplay())

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['script-src \'self\'']
      }
    })
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => { if (!tray) setTray(); });

function setTray() {
  tray = new Tray(icon);
  tray.setToolTip('TCPeer');
  tray.setTitle('TCPeer');
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'TCPeer',
      type: 'normal',
      enabled: false,
      icon: icon
    },
    {
      type: 'separator'
    },
    {
      label: 'Send new file',
      type: 'normal',
      click: () => { createWindow(); }
    },
    {
      label: 'Quit',
      type: 'normal',
      click: () => app.quit()
    }
  ])

  tray.setContextMenu(contextMenu)
}

ipcMain.on('message', (event, message) => {
  console.log(message);
})
