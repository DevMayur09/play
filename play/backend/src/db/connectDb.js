import mongoose from 'mongoose'
import { DB_NAME } from '../constants/constants'

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONDO_URI/DB_NAME}`)

        console.log(`\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Error while connection to database: ${error?.message}`)
        exit(1);
    }
}

export default connectDb;