const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routerCarts = require(`./routes/Cart.router`)

require("dotenv").config();
const app = express();
app.use(express.json({extendet:true}));
app.use(cors());
app.use(`/api`, routerCarts);
const port = process.env.PORT || 5000;
const connection = mongoose.connection;
(async()=>{
try {
await mongoose.connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
app.listen(port, ()=>{
    console.log(`Starter on port ${port}`)
})
}catch(err){
console.log(`Server error ${err.message}`)
process.exit(1)
}
})();

connection.once(`open`,()=>{
console.log(`mongodb connected`)
})