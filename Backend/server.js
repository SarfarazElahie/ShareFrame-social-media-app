require("dotenv").config();
const app = require("./src/app.js")
const connectDB = require("./src/db/db.js")

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(3000, ()=>{
    console.log(`Server is running on port ${PORT}.....`)
})