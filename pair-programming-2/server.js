const connectDB = require("./config/db");
const express = require("express");
const error = require("./middleware/errorMiddleware");
const found = require("./middleware/notFoundMiddleware");


//dotenv
const dotenv = require('dotenv');
dotenv.config();


//express app
const app = express();
connectDB();
// Body Parser Middleware
app.use(express.json());
// Init middleware
//app.use(error);

app.use("/api/users", require("./routers/usersRoutes"));

app.use("/api/services", require("./routers/servicesRoutes"));

app.use("/api/tours", require("./routers/toursRoutes"));




app.use(found);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
