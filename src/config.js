const config = {
  WINDOW_WIDTH: 300,
  WINDOW_MARGIN: 20,
  MAX_WINDOW_HEIGHT: 500,
  DEV_TOOLS: false,
};

export default {
  ...config,
  getMaxHeight: (width, height) => {
    const maxWindowHeight = height - config.WINDOW_MARGIN * 2;
    return maxWindowHeight;
  },
  setMaxWindowHeight: (height) => {
    config.MAX_WINDOW_HEIGHT = height;
  },
  getMaxWindowHeight: () => {
    return config.MAX_WINDOW_HEIGHT;
  },
};
