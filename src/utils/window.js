import config from '../config';

function updateWindowHeight(height) {
  if (window.electron.ipcRenderer) {
    window.electron.ipcRenderer.resizeWindow(config.WINDOW_WIDTH, height);
  }
}

// eslint-disable-next-line import/prefer-default-export
export { updateWindowHeight };
