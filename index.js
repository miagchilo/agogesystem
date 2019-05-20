const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

//useNewUrlParser: true is to avoid deprecationwarning.
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

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

require("./routes/authRoutes")(app);
// calling the authroutes module and immediately call the (app)

const PORT = process.env.PORT || 5000;

app.listen(PORT);
