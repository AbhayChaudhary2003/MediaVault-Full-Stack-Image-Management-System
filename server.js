const dotenv = require('dotenv')
dotenv.config();
const app = require('./src/app')
const postModel = require('./src/models/post.model')

const connectDB = require('./src/db/db')
const port = 3000

connectDB();


app.listen(port,()=>{
    console.log("server started")
});