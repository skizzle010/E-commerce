const express = require("express")
const router = express()
const stripe = require("stripe")(process.env.SECRET_KEY)

router.post("/payment",(req,res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency:"usd"
    }),(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).json(err)
        }else{
            res.status(200).json(stripe)
        }
    }
})


module.exports = router