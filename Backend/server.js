import  express  from "express";
import data from "./data.js";
const app = express()
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
