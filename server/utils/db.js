const mongoose = require('mongoose')

// mongodb+srv://areeba:areeba@cluster0.qrq7yk5.mongodb.net/bakery?retryWrites=true&w=majority&

// const URI = "mongodb://127.0.0.1:27017/p2m_system"
const URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection successful to DB")
    } catch (error) {
        console.error("Database Connection Failed")
        process.exit(0)
    }
}

module.exports = connectDB 