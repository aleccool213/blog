const Sentry = require("@sentry/browser");

exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed");
  Sentry.init({
    dsn: "https://38babd6b9f934ff798988c81520be80e@sentry.io/4045412"
  });
};
