const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "",
    createProxyMiddleware({
      target: "https://mini-twitter-server.vercel.app/api/v1/", // Backend server URL
      changeOrigin: true,
    })
  );
};
