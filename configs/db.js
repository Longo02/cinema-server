const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Longo:Longo1@cluster01.bunpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01', {
    userNewUrlParser: true,
    userUnifiedTopology: true,
})
.then(() => console.log('Conectado a mongoDB')
.catch((error) => console.log('Errror al conectar con MongoDB', error)));