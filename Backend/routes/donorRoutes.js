import express from 'express'

const router = express.Router()

router.get("/",(req,res)=>{
  res.send("Donor Routes are working")
})


export default router;