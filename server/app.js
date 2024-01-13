const express = require('express')
const app = express()
const db = require('./databaseConfig/dbConfig')

require('dotenv').config()
const cors = require('cors')


const formRoutes = require('./routes/forms')


const port = process.env.PORT
const url = process.env.MongoDB_URL


app.use(express.urlencoded({extended: true}))

app.use(express.json());
const corsOptions = {
    origin:`*`,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    optionSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-access-token','Cookie']
}
app.use(cors(corsOptions));



app.use('/api',formRoutes)

const appEndPoint = async(url)=>{
    try {
        await db.connectDb(url)
        const server =  app.listen(port,()=>{console.log(`App connected to db and listening http://localhost:${port}`)})
    } catch (error) {
        
        console.log(error)
    }

}
appEndPoint(url)

