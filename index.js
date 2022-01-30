const express = require('express');
const morgan = require('morgan');

//connect DB
const db = require('./src/config/db');
db.connectDB();

const app = express();
app.use(morgan('combined'));

//routes
const plant = require('./src/routes/Plant/plant.route');

app.use('/api', plant);

//connect port
const PORT = 5000;
app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}`));