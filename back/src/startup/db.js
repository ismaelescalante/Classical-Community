const mongoose = require('mongoose')

mongoose.set('strictQuery', false)



module.exports = function (){
    const db = process.env.MONGO_URI
    mongoose.connect(db)
    .then(() => console.log("Hay conexión"))
    .catch((err) => console.log("Ha habido un error", err))
}