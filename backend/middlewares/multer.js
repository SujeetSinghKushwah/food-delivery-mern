import multer from "multer"
const storage=multer.diskStorage({
   destination:(req,file,cb)=>{
    cb(null,"./public") // public folder ke under rakhenge image wagera
   },
   filename:(req,file,cb)=>{
    cb(null,file.originalname)//multer image ko file ke under daal deta hai
   }
})

export const upload=multer({storage})