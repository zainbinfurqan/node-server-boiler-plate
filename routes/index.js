// Import all routes here
const routes = {
};

module.exports = function (app) {
  for (let i in routes) {
    app.use("/api/" + i, routes[i]);
  }
};
