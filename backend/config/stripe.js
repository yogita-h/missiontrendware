const Stripe=require("stripe")

let stripe=null
if(process.env.Secret_key){
    stripe=new Stripe(process.env.Secret_key)
}else{
    console.log("Secret_key is not set - Stripe payment routes will fail until it is configured")
}

module.exports=stripe