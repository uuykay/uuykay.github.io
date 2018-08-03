var liveServer = require("live-server");

var params = {
  ignore: "**/node_modules/**" // comma-separated string for paths to ignore
};
liveServer.start(params);
