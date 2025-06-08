import dotenv from 'dotenv'
import { httpServer } from './app.js'
import connectDb from './db/connectDb.js'

const evnvironment = dotenv.config({path : './.env'})
console.log(evnvironment)


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