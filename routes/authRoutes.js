const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  //logging in using google
  app.get("/auth/google/callback", passport.authenticate("google"));

  // logging out
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
    console.log("you logged out");
  });
  // checking whats current logged in
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
