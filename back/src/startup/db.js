const mongoose = require('mongoose')


mongoose.set('strictQuery', false)



module.exports = function (){
    
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Hay conexión"))
    .catch((err) => console.log("Ha habido un error", err))
}