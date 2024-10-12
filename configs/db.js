const mongoose = require('mongoose')



const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://Longo:Longo1@cluster01.bunpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01');
    } catch (error){
        console.log('MongoDB connection error', error)
        process.exit(1)
    }
}


module.exports = connectDB;