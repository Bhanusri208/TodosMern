const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute');
const todoRoute = require('./routes/todoRoute')
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express()

const PORT = process.env.PORT || 4000;


dotEnv.config();
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((error) => console.log(error))

app.use(bodyParser.json());
app.use('/auth', authRoute);
app.use('/alltodos',todoRoute);



app.listen(PORT, () => {
    console.log(`server started and running on ${PORT}`);
});

// app.use('/', (req, res) => {
//     res.send("<h1>Hello World</h1>");
// })