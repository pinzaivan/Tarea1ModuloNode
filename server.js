require("dotenv").config();
const app=require('app');
const { db } = require("./database/config");

db.authenticate()
    .then(()=>console.log("database authenticated"))
    .catch((err)=>console.log(err))
db.sync()
    .then(()=>console.log("database sync"))
    .catch((err)=>console.log(err))

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})
