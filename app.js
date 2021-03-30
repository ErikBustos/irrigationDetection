const express = require('express')
const cors = require('cors')

require('dotenv').config();

const { json, urlencoded } = express
const app = express()

//Ports
const PORT = process.env.PORT || 3002
const HOST = process.env.HOST || "0.0.0.0"

app.use(json())
app.use(urlencoded({ extended: false }))
const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

app.get('/',(req,res) =>{
    res.send("Microservice to detect if Irrigation is needed");
})

app.listen(PORT,HOST, () => { console.log(`Server listening on port ${PORT} and host ${HOST}`); })