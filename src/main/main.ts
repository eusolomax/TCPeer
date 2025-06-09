import { app, BrowserWindow, ipcMain, session, Menu, nativeImage, Tray } from 'electron';
import { join } from 'path';

let tray

const icon = nativeImage.createFromPath('assets/TCPEER.jpg') 

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    resizable: false,
    title: 'TCPeer',
		icon: icon,
    autoHideMenuBar: true,
    x: 1100,
    y: 600,
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
	
	createWindow();

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

app.on('window-all-closed', function () {
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
			label: 'Open window', 
			type: 'normal', 
			click: () => {
				tray.destroy();
				createWindow();
			}
		},
		{ 
			label: 'Quit', 
			type: 'normal',
			click: () => app.quit()
		}
	])

	tray.setContextMenu(contextMenu)
});

ipcMain.on('message', (event, message) => {
  console.log(message);
})
