import express from "express"
import { getCurrentUser, updateUserLocation } from "../controllers/user.controllers.js"
import isAuth from "../middlewares/isAuth.js"


const userRouter=express.Router()

userRouter.get("/current",isAuth,getCurrentUser)// is auth middle ware hi user ki id lakar dega
userRouter.post('/update-location',isAuth,updateUserLocation)
export default userRouter