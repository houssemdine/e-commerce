const express =require("express");
const mongoose=require("mongoose");
const app =express();
const dotenv=require("dotenv");
const productrouter = require("./routes/product");
const authrouter = require("./routes/auth");
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");




dotenv.config();



mongoose.connect(
    process.env.MONGO_URL
    )
    .then(()=>console.log("DB connection successfull!"))
    .catch((err)=>{
        console.log(err);
    });

app.use(express.json());
app.use("/api/auth",authrouter);
app.use("/api/users", userRoute);
app.use("/api/products", productrouter);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);



app.listen(process.env.PORT|| 5000 ,()=>{
    console.log("back is run");
})