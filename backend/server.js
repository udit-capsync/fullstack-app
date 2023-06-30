const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require('./config/db.config');
require('express-router');


// var corsOptions = {
//     origin: "http://localhost:8081"
//   };
//app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const user_route=require("./routes/player.routes.js");

app.use('/api',user_route);


app.get("/", (req,res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port '+port);
  });
}).catch((error) => {
  console.error('Unable to sync the database:', error);
});


