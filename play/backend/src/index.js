import dotenv from 'dotenv'
import httpClient from 'http'
import { httpServer } from './app'
import connectDb from './db/connectDb'

dotenv.config({path : './.env'})


const startServer = ()=>{
    httpServer.listen(process.env.PORT || 8000, (req,res) => {
        console.log(`Server is listening on port :${process.env.PORT}`)
    })
}


try {
    await connectDb()
    startServer()
} catch (error) {
    console.log(`Error while listening to server: ${error?.message}`)
}