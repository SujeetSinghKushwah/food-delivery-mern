import jwt from "jsonwebtoken"
//generating token 
const genToken=async (userId) => {
    try {
        const token= jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"}) // token expire in 7 days
        return token
    } catch (error) {
        console.log(error)
    }
}

export default genToken