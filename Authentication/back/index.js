const express = require("express");
const app = express();
const port = 5000;
const session = require("express-session");
const passport = require("./config/passport");
const authRoutes = require("./routes/authentication");
const adminRoutes = require("./routes/admin");
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoutes);
app.use("/", adminRoutes);

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
