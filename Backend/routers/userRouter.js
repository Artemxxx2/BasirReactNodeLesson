import express from "express";
import data from "../data.js";
import User from "../userModel.js";
const userRouter = express.Router()
userRouter.get('/seed', async(req,resp)=>{
    const createdUsers = await User.insertMany([
        {
          name:'Artem',
          email:'akolobnevstudio@gmail.com',
          password:1234,
          isAdmin:true,
        }
      ])
    resp.send({createdUsers})
} )

export default userRouter