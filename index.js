const express = require('express')
const connectDB= require('./config/db-connection')


const app = express()
app.use(express.json({extend:false}))

//Conexion a la bd
connectDB()

app.use('/poke-api/v1', require('./routes/Pokemon'))


const PORT = process.env.PORT || 5000
app.listen(PORT,()=> console.log("Server started on port: " +PORT))