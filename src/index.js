//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from './db/index.js'

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
    
})










// always try to wrap in try-catch for connecting to database otherwise will have gto face issues --------also use async
/*
import express from 'express'
const app = express()



(async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_UR}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERRR:", error);
        throw error
        
       })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.Port}`);
        
    })

    } catch (error) {
        console.error("Error", error)
        throw err
    }
})()

*/