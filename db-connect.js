const mongoose = require("mongoose")

async function getConnect(){
    try {
        // await mongoose.connect("mongodb://127.0.0.1:27017/may_24_1pm_server")
        await mongoose.connect(process.env.DB_KEY)
        console.log("Database is connected")
    } catch (error) {
        console.log(error)
    }
}
getConnect()


// mongoose.connect("mongodb://127.0.0.1:27017/may_24_1pm_server")
// .then(()=>{
//     console.log("Database is connected")
// })
// .catch((error)=>{
//     console.log(error)
// })