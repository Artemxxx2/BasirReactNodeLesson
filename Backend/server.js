import  express  from "express";
import mongoose from 'mongoose'
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express()
mongoose.connect('mongodb://localhost:5000/amazona',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
app.use('/api/users', userRouter)
app.get('/api/product/:id', (req,res)=>{
    let URL=Number(req.params.id)
    const product = data.products.find(el=>el.id === URL)
    if (product) {
        res.send(product)
    }
    else{
        res.send('product doesn\'t exist.status code 404')
    }

})
app.get('/api/products', (req,res)=>{
    res.send(data.products)
})
app.get('/',(req,res)=>{
res.send('server is ready')
})
app.listen(5000)
