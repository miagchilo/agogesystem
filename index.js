const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

//useNewUrlParser: true is to avoid deprecationwarning.
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
// making cookie for 30days and encrypt it.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// calling the passport to use the cookies
app.use(passport.initialize());
app.use(passport.session());

require("./routes/billingRoutes")(app);
require("./routes/authRoutes")(app);
// calling the authroutes module and immediately call the (app)

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("clients/build"));

  // Express will serve up the index.html file
  // if it doesnt recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT);
