const express = require('express');
const app = express();

//connect DB
const db = require('./config/db');
db.connectDB();

//HTTP logger
const morgan = require('morgan');
app.use(morgan('combined'));

//routes
const home = require('./routes/HomeRoute');
app.use('/api', home);

//connect port
const PORT = 5000;
app.listen(PORT, () =>
    console.log(`server started on port http://localhost:${PORT}`)
);